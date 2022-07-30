import React from "react";
import {ScrollView, StatusBar, View, ViewStyle} from "react-native";
import {Dispatch} from "redux";
import {VersionInfo} from "../../common/components/VersionInfo";
import {styleSheetCreate} from "../../common/utils";
import {BaseReduxComponent, IReduxProps} from "../../core/BaseComponent";
import {connectAdv} from "../../core/store";
import {IAppState} from "../../core/store/appState";
import {Colors, CommonStyles, isIos, isIphoneX} from "../../core/theme";
import {DrawerContentComponentProps} from "react-navigation-drawer/lib/typescript/src/types"
import { MenuItem } from "./components/MenuItem";
import { NavigationActions } from "../navigation";

interface IStateProps {
    isOpen: boolean;
}

interface IDispatchProps {
    navigateToCafes: () => void;
    closeDrawer: () => void;
}

interface IState {
    isModalVisible: boolean;
}

@connectAdv(
    (state: IAppState): IStateProps => ({
        isOpen: state.navigation.menu.isDrawerOpen,
    }),
    (dispatch: Dispatch<any>): IDispatchProps => ({
        navigateToCafes: (): any => dispatch(NavigationActions.navigateToCafes()),
        closeDrawer: (): any => dispatch(NavigationActions.closeMenu())
    })
)
export class Menu extends BaseReduxComponent<IStateProps, IDispatchProps, IState, DrawerContentComponentProps> {
    constructor(props: DrawerContentComponentProps) {
        super(props);
        this.state = {isModalVisible: false};
    }

    componentWillReceiveProps(nextProps: IReduxProps<IStateProps, IEmpty>): void {
        const nextStateProps = nextProps.stateProps!;
        if (nextStateProps.isOpen != this.stateProps.isOpen && isIos) {
            StatusBar.setHidden(nextStateProps.isOpen, "slide");
        }
    }

    componentDidMount(): void {
        
    }

    render(): JSX.Element {
        return (
            <View style={styles.container}>
                {isIphoneX ? <View style={CommonStyles.iPhoneXFooter}/> : null}
                <ScrollView contentContainerStyle={styles.scrollContent} bounces={false}>
                    <View>
                        <MenuItem title="Список кофейнь" onPress={this.coffeRooms} />
                    </View>
                </ScrollView>
                <VersionInfo/>
            </View>
        );
    }

    private coffeRooms = (): void => {
        this.dispatchProps.navigateToCafes();
        this.dispatchProps.closeDrawer();
    }
}

const styles = styleSheetCreate({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        alignItems: "stretch",
        justifyContent: "flex-start"
    } as ViewStyle,
    scrollContent: {
        flex: 1,
        alignItems: "stretch",
        justifyContent: "space-between"
    } as ViewStyle
});
