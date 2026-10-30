import React from 'react';
import {View, Text, Image} from 'react-native';
import {FontAwesome6} from "@expo/vector-icons";


const Boat = ({boat_name, boat_description, boat_picture, icon_name, icon_color}) => {
    return (
        <View>
            <Text></Text>

            <Text>
                <FontAwesome6 name={icon_name} size={40} color={icon_color} />
                {boat_name}</Text>

                <Text>{boat_description}
                </Text>
            <Image source={boat_picture}
                   style={{width:400, height:500}} />

        </View>
    );
};

export default Boat;
