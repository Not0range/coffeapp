import {
    NavigationAction,
    NavigationActions,
    NavigationComponent,
    NavigationState,
} from "react-navigation";
import {createDrawerNavigator} from 'react-navigation-drawer'
import {CoreActions} from "../../core/store";
import {IAppState} from "../../core/store/appState";
import {Colors, menuWidth} from "../../core/theme";
import {NavigationConfig} from "../config";
import { Menu } from "../menu/Menu";
import {NavigationPages} from "../navigation";

export const MenuNavigator = createDrawerNavigator({
    [NavigationPages.cafes]: {
        getScreen: (): NavigationComponent<any, any> => NavigationConfig.instance.getNavigationComponent("cafes")
    },
    // [NavigationPages.currentRun]: {
    //     getScreen: (): NavigationComponent => NavigationConfig.instance.getNavigationComponent("currentRun")
    // },
}, {
    contentComponent: Menu,
    drawerWidth: menuWidth,
    drawerPosition: "left",
    drawerBackgroundColor: Colors.transparent
});

export const MenuNavigationInitialState = MenuNavigator.router.getStateForAction(NavigationActions.init({}), undefined);

export function menuNavigationReducer(
    state: NavigationState = MenuNavigationInitialState,
    action: NavigationAction): NavigationState {
    switch (action.type) {
        case CoreActions.rehydrate.type:
            const appState = (action as any).payload as IAppState;

            if (appState != null && appState.system.authToken != null) {
                return {...MenuNavigationInitialState, index: 1};
            } else {
                return {...MenuNavigationInitialState, index: 0};
            }
        default:
            return MenuNavigator.router.getStateForAction(action, state);
    }
}