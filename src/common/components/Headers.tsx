import {CommonHeaderStyles} from "../../core/theme/commonStyles";
import React from "react";
import {HeaderButton} from "../../navigation/components/HeaderButton";
import {ImageResources} from "../ImageResources.g";
import {NavigationActions} from "../../navigation/navigation";
import {View} from "react-native";
import { StackNavigationOptions } from "react-navigation-stack/lib/typescript/src/vendor/types";

export function NoHeader(): StackNavigationOptions | null {
    return ({
        header: (props) => <React.Fragment/>
    });
}

export function PlainHeader(title: string, showLeftButton?: boolean, showDrawerIcon?: boolean):
    StackNavigationOptions {
    return ({
        headerTitle: title,
        headerTitleStyle: CommonHeaderStyles.headerTitleStyle as any,
        headerLeft: (props) => showLeftButton ? (
            <HeaderButton
                image={showDrawerIcon ? ImageResources.image_menu : ImageResources.image_back}
                action={showDrawerIcon ? NavigationActions.toggleDrawer : NavigationActions.navigateToBack}
            />
        ) : undefined,
        headerRight: (props) => <View/>,
        headerBackTitle: undefined,
        headerStyle: CommonHeaderStyles.headerStyle as any,
        headerTitleAllowFontScaling: false,
    });
}