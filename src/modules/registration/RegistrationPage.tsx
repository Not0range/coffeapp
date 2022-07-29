import React from "react";
import {Dispatch} from "redux";
import { ImageBackground, View, ViewStyle, Text, TextStyle, ImageStyle, TouchableOpacity, Image } from "react-native";
import { ImageResources, SplashResources } from "../../common/ImageResources.g";
import { styleSheetCreate } from "../../common/utils";
import { BaseReduxComponent } from "../../core/BaseComponent";
import { connectAdv } from "../../core/store";
import { IAppState } from "../../core/store/appState";
import { localization } from "../../common/localization/localization";
import { Logo } from "../../common/components/Logo";
import { BorderedImage } from "../../common/components/BorderedImage";

interface IStateProps {

}

interface IDispatchProps {

}

interface IState {

}

@connectAdv(
    (state: IAppState): IStateProps => ({}),
    (dispatch: Dispatch<any>): IDispatchProps => ({})
)
export class RegistrationPage extends BaseReduxComponent<IStateProps, IDispatchProps, IState> {
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
                    <View style={styles.separatorContainer}>
                        <View style={styles.profileImageBox}>
                            <Image source={ImageResources.user_border} style={styles.profileImageBorder} />
                            <BorderedImage source={ImageResources.user} borderRadius={100} style={styles.profileImage}/>
                        </View>
                        <Text style={styles.buttonText}>Анна Борисова</Text>
                    </View>
                    <View style={styles.separatorContainer}>
                        <TouchableOpacity
                            style={[styles.continueButton, {backgroundColor: "#C8D9AF"}]}
                            onPress={this.continue}
                        >
                            <Text style={styles.buttonText}>{localization.login.continue}</Text>
                        </TouchableOpacity> 
                    </View>
                </ImageBackground>
            </View>
        )
    }

    private continue(): void {
        //todo go to menu
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
    profileImageBox: {
        flex: 1, 
        justifyContent: "center", 
        marginBottom: 80
    } as ViewStyle,
    profileImageBorder: {
        alignSelf: "center"
    } as ImageStyle,
    profileImage: {
        alignSelf: "center",
        position: "absolute"
    } as ImageStyle,
    continueButton: {
        borderRadius: 100,
        flexDirection: "row",
        justifyContent: "center",
        paddingVertical: 15,
        paddingHorizontal: 30,
        marginVertical: 5
    } as ViewStyle,
    buttonText: {
        color: "white",
        fontSize: 18,
        flex: 1,
        textAlign: "center"
    } as TextStyle
});