import React from "react";
import {Dispatch} from "redux";
import { ImageBackground, View, ViewStyle, Text, TextStyle, ImageStyle, Image, TouchableOpacity } from "react-native";
import { SplashResources, ImageResources } from "../../common/ImageResources.g";
import { styleSheetCreate } from "../../common/utils";
import { BaseReduxComponent } from "../../core/BaseComponent";
import { connectAdv } from "../../core/store";
import { IAppState } from "../../core/store/appState";
import { localization } from "../../common/localization/localization";
import { Logo } from "../../common/components/Logo";
import { LoginActionsAsync } from "./loginActionAsync";

interface IStateProps {

}

interface IDispatchProps {
    login: () => void;
}

interface IState {

}

@connectAdv(
    (state: IAppState): IStateProps => ({}),
    (dispatch: Dispatch<any>): IDispatchProps => ({
        login: (): any => dispatch(LoginActionsAsync.login())
    })
)
export class LoginPage extends BaseReduxComponent<IStateProps, IDispatchProps, IState> {
    constructor(props: IEmpty) {
        super(props);

        this.state = {};
    }

    render(): JSX.Element {
        return (
            <View style={styles.container}>
                <ImageBackground source={SplashResources.splash} style={styles.background} resizeMode={"cover"}>
                    <View style={styles.separatorContainer}>
                        <Logo />
                    </View>
                    <View style={styles.separatorContainer} />
                    <View style={styles.separatorContainer}>
                        <TouchableOpacity
                            style={[styles.loginButton, {backgroundColor: "#3B5998"}]}
                            onPress={this.login}
                        >
                            <Image source={ImageResources.icon_facebook} style={styles.icon} />
                            <Text style={styles.buttonText}>{localization.login.loginViaFacebook}</Text>
                        </TouchableOpacity> 
                    </View>
                </ImageBackground>
            </View>
        )
    }

    private login = (): void => {
        this.dispatchProps.login();
    }
}

const styles = styleSheetCreate({
    container: {
        flex: 1
    } as ViewStyle,
    background: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center"
    } as ViewStyle,
    separatorContainer: {
        flex: 1,
        padding: 40,
        justifyContent: "center",
        alignContent: "center"
    } as ViewStyle,
    loginButton: {
        borderRadius: 100,
        flexDirection: "row",
        justifyContent: "center",
        paddingVertical: 15,
        paddingHorizontal: 30,
        marginVertical: 5
    } as ViewStyle,
    icon: {
        alignSelf: "flex-start",
    } as ImageStyle,
    buttonText: {
        color: "white",
        fontSize: 18,
        flex: 1,
        textAlign: "center"
    } as TextStyle
});