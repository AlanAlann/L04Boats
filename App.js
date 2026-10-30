import React from 'react';
import {View, ScrollView, Text} from 'react-native';
import Boat from './components/Boat';


class AllBoats extends React.Component {
    render() {
        return(
            <ScrollView>
                <View>
                    <Text></Text>
                    <Text>GetABoat - For Sale </Text>
                    <Boat boat_name={"Sea Ray 500 Sundancer"} boat_description={"Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away."} icon_name={"ship"} icon_color={"grey"}
                          boat_picture={require("./img/sea_ray.jpg")}/>
                    <Boat boat_name={"Four Winns Horizon 180"} boat_description={"A sporty look and refined details truly set the Horizon 180 above all others ."} icon_name={"ship"} icon_color={"grey"} boat_picture={require("./img/four_winns.jpg")}/>
                    <Boat boat_name={"Flipper 640 ST"} boat_description={"A modern take on the classic, traditional hardtop and perfect for a family picnic."} icon_name={"ship"} icon_color={"grey"} boat_picture={require("./img/flipper.jpg")}/>
                    <Boat boat_name={"Princess V48"} boat_description={"There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior."} icon_name={"ship"} icon_color={"grey"} boat_picture={require("./img/princess.jpg")}/>
                    <Boat boat_name={"Bayliner 175 Bowrider"} boat_description={"Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance."} icon_name={"ship"} icon_color={"grey"} boat_picture={require("./img/bayliner.jpg")}/>
                    <Boat boat_name={"Fairline Targa 47"} boat_description={"Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit."} icon_name={"ship"} icon_color={"grey"} boat_picture={require("./img/fairline.jpg")}/>


                </View>
            </ScrollView>
        );
    };
}

export default AllBoats;