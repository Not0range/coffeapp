import {DrawerNavigationState, NavigationState} from "react-navigation";
import {EntitiesInitialState, IEntitiesState} from "../../modules/entities/entitiesState";
import {ISystemState, SystemInitialState} from "./systemState";
import {NavigationConfig} from "../../navigation/config";

export interface IAppState {
    navigation: INavigationState;
    system: ISystemState;
    entities: IEntitiesState;
}

export interface INavigationState {
    root: NavigationState;
    menu: DrawerNavigationState;
    cafes: NavigationState;
}

export function getAppInitialState(): IAppState {
    const NavigationInitialState: INavigationState = NavigationConfig.instance.getCombinedInitialState();

    return {
        navigation: NavigationInitialState,
        system: SystemInitialState,
        entities: EntitiesInitialState,
    };
}