import React, { PureComponent } from "react";
import { Image, View, Text, TouchableOpacity, ImageSourcePropType, ViewStyle, ImageStyle, TextStyle } from "react-native";
import { ImageResources } from "../ImageResources.g";
import { styleSheetCreate } from "../utils";
import { localization } from "../localization/localization";

interface IProps {
    title: string;
    address: string;
    image: ImageSourcePropType;
    onPress?: () => void;
}

export class CoffeRooms extends PureComponent<IProps, IEmpty> {
    constructor(props: IProps) {
        super(props);
    }

    render(): JSX.Element {
        return (
            <View style={styles.container}>
                <Image source={this.props.image} style={styles.image} />
                <View style={styles.description}>
                    <Text style={styles.title}>{this.props.title}</Text>
                    <Text style={styles.place}>{localization.cafe.located}</Text>
                    <Text style={styles.address}>{this.props.address}</Text>
                    <TouchableOpacity style={styles.button} onPress={this.props.onPress}>
                        <Text style={styles.more}>{localization.cafe.more}</Text>
                        <Image source={ImageResources.icon_read_more} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = styleSheetCreate({
    container: {
        flexDirection: "row",
        marginVertical: 4
    } as ViewStyle,
    description: {
        flex: 2,
        padding: 12
    } as ViewStyle,
    image: {
        flex: 1,
        aspectRatio: 1
    } as ImageStyle,
    title: {
        color: "#C8D9AF",
        fontSize: 20,
        marginBottom: 14//todo bold
    } as TextStyle,
    place: {
        fontSize: 14,
        marginBottom: 4//todo light
    } as TextStyle,
    address: {
        fontSize: 16,
        marginBottom: 10
    } as TextStyle,
    more: {
        fontSize: 14//todo light
    } as TextStyle,
    button: {
        flexDirection: "row",
        alignSelf: "flex-end"
    } as ViewStyle,
});