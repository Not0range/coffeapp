import {Playground} from "../../common/playground";
import {extendWithDontPushTwoPageInStack} from "../extendWithDontPushTwoPageInStack";
import {NavigationPages} from "../navigation";
import {InDeveloping} from "../../common/components/InDeveloping";
import { createStackNavigator } from "react-navigation-stack";
import { NavigationAction, NavigationActions, NavigationContainer, NavigationState, StackActions } from "react-navigation";
import { LoginPage } from "../../modules/login/LoginPage";
import { CoreActions } from "../../core/store";
import { IAppState } from "../../core/store/appState";
import { RegistrationPage } from "../../modules/registration/RegistrationPage";
import { LoginActions } from "../../modules/login/loginAction";

export const RootNavigator = createStackNavigator({
    [NavigationPages.login]: {screen: LoginPage},
    [NavigationPages.registration]: {screen: RegistrationPage},

    [NavigationPages.playground]: {screen: Playground},
    [NavigationPages.inDevelopment]: {screen: InDeveloping},
}, {
    headerMode: "none"
}) as NavigationContainer;

extendWithDontPushTwoPageInStack(RootNavigator.router);

export const RootNavigationInitialState = RootNavigator.router.getStateForAction(NavigationActions.init({}), undefined);

export function rootNavigationReducer(
    state: NavigationState = RootNavigationInitialState,
    action: NavigationAction): NavigationState {
    switch (action.type) {
        case CoreActions.rehydrate.type:
            const appState = (action as any).payload as IAppState;

            if (appState != null && appState.system.authToken != null) {
                return RootNavigator.router.getStateForAction(StackActions.reset(
                    {
                        index: 0,
                        actions: [
                            NavigationActions.navigate({
                                routeName: NavigationPages.registration,//todo menu
                            })
                        ]
                    }
                ), state);
            }

            return {...RootNavigationInitialState};
        case LoginActions.login.done.type:
            return RootNavigator.router.getStateForAction(StackActions.reset(
                {
                    index: 0,
                    actions: [
                        NavigationActions.navigate({
                            routeName: NavigationPages.registration,
                        })
                    ]
                }
            ), state);
        default:
            return RootNavigator.router.getStateForAction(action, state);
    }
}