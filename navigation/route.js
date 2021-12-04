import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './Authstack';
import MyDrawer from '../src/Screens/sideNav';

const Routes=()=>{
    return (
        <NavigationContainer>
            <AuthStack />
        </NavigationContainer>
      
    )
}
export default Routes;