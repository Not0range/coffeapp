import React, { PureComponent } from "react"
import { View, ViewStyle, Text, TextStyle } from "react-native";
import { Fonts } from "../../core/theme";
import { localization } from "../localization/localization";
import { styleSheetCreate } from "../utils";

export class Logo extends PureComponent<IEmpty, IEmpty> {
    constructor(props: IEmpty) {
        super(props);
    }

    render(): JSX.Element {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>CoffeTime</Text>
                <Text style={styles.subTitle}>{localization.common.coffeTerritory}</Text>
            </View>
        );
    }
}

const styles = styleSheetCreate({
    container: {
        flex: 1
    } as ViewStyle,
    title: {
        fontFamily: Fonts.lobster,
        fontSize: 64,
        textAlign: "center",
        color: "white"
    } as TextStyle,
    subTitle: {
        fontSize: 16,
        textAlign: "left",
        color: "white",
        marginLeft: 135,
        marginTop: 65,
        position: "absolute"
    } as TextStyle
});