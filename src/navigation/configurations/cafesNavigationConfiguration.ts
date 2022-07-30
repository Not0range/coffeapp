import { createStackNavigator } from "react-navigation-stack";
import { CafesPage } from "../../modules/cafes/CafesPage";
import {NavigationPages} from "../navigation";

export const CafesNavigator = createStackNavigator({
    [NavigationPages.cafes]: {screen: CafesPage},
}, {
    headerMode: "screen"
});