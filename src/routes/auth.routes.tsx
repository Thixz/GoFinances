import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { SigIn } from "../pages/SigIn";

const {Navigator,Screen} = createStackNavigator()

export function AuthRouter(){
    return(
        <Navigator >
            <Screen name='SigIn' component={SigIn} options={{headerShown:false}}/>
        </Navigator>
    )
}