import React, { PureComponent } from "react";
import { ImageSourcePropType, View } from "react-native";
import { CoffeRooms } from "../../common/components/CoffeRooms";
import { FlatListWrapper } from "../../common/components/FlatListWrapper";
import { PlainHeader } from "../../common/components/Headers";
import { defaultIdExtractor } from "../../common/helpers";
import { ImageResources } from "../../common/ImageResources.g";

export class CafesPage extends PureComponent<IEmpty, IEmpty> {
    static navigationOptions = PlainHeader("Кофейни", true, true);

    constructor(props: IEmpty) {
        super(props);
    }

    render(): JSX.Element {
        return (
            <View style={{flex: 1}}>
                <FlatListWrapper 
                data={testData}
                keyExtractor={defaultIdExtractor}
                renderItem={this.renderCafe} />
            </View>
        )
    }

    private renderCafe = ({item}: {item: ICafe}): JSX.Element => {
        return (
            <CoffeRooms title={item.title} address={item.address} image={item.image}/>
        )
    }
}

interface ICafe {
    id: number;
    title: string;
    address: string;
    image: ImageSourcePropType;
}

const testData: ICafe[] = [
    {
        id: 0,
        title: "Coffe",
        address: "ул. Юности д. 120",
        image: ImageResources.cafe
    },
    {
        id: 1,
        title: "Coffe Lattelady",
        address: "ул.Мадинова пер.6 д.28",
        image: ImageResources.cafe2
    },
    {
        id: 3,
        title: "Coffe Lattelady",
        address: "ул. Маршала д.5/2",
        image: ImageResources.cafe3
    },
    {
        id: 4,
        title: "Coffe",
        address: "ул.25 Октября д.18/5",
        image: ImageResources.cafe4
    }
]