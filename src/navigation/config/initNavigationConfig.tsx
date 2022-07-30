import {appSettingsProvider} from "../../core/settings";
import {mainHeaderNavigation, NoHeaderNavigation} from "../../core/theme/navigation";
import { menuNavigationReducer, MenuNavigator } from "../configurations/menuNavigationConfiguration";
import {rootNavigationReducer, RootNavigator} from "../configurations/rootNavigationConfiguration";
import {CafesNavigator} from "../configurations/cafesNavigationConfiguration";
import {NavigationActions} from "../navigation";
import {NavigationConfig} from "./NavigationConfig";
import {reduxHelper} from "./reduxHelper";

export function initNavigationConfig(): void {
    const isRehydrateEnabled = appSettingsProvider.settings.environment == "Development";

    NavigationConfig.instance = reduxHelper({
        root: {
            isRehydrateEnabled,
            customReducer: rootNavigationReducer,
            navigator: RootNavigator,
            navigationOptions: NoHeaderNavigation,
            backAction: NavigationActions.internal.backInRoot,
        },
        menu: {
            isRehydrateEnabled,
            customReducer: menuNavigationReducer,
            navigator: MenuNavigator,
            navigationOptions: mainHeaderNavigation("menu", "none"),
        },
        cafes: {
            isRehydrateEnabled,
            navigator: CafesNavigator,
            navigationOptions: mainHeaderNavigation("menu", "none"),
        },
    });
}