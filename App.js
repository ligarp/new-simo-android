/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import Login from './app/components/Login';
import Register from './app/components/Register';
import Dashboard from './app/components/Dashboard';
import Suhu from './app/components/Suhu';
import Akun from './app/components/Akun';
import {createAppContainer, createSwitchNavigator, createBottomTabNavigator, createStackNavigator, createMaterialTopTabNavigator, createMaterialBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-ionicons';
import Iconf from 'react-native-vector-icons/FontAwesome5';

class App extends Component {
    render() {
    return (
      <AppContainer />
    );
  }
}
export default App;



const AppStackNavigator = createStackNavigator({
  Login:{
    screen:Login
  },
  Register:{
    screen:Register
  }
},
{defaultNavigationOptions:{
  header:null
}})

const RiwayatTopNavigator = createMaterialTopTabNavigator({
  Aktifitas:{
    screen: Suhu,
    navigationOptions:{
      tabBarIcon: ({tintColor})=><Iconf name="running" color={tintColor} size={20}/>
    }
    
  },Arus:{
    screen: Suhu,
    navigationOptions:{
      tabBarIcon: ({tintColor})=><Iconf name="bolt" color={tintColor} size={20}/>
    }
  },Asap:{
    screen: Suhu,
    navigationOptions:{
      tabBarIcon: ({tintColor})=><Iconf name="fire" color={tintColor} size={20}/>
    }
  },Cahaya:{
    screen: Suhu,
    navigationOptions:{
      tabBarIcon: ({tintColor})=><Iconf name="lightbulb" color={tintColor} size={20}/>
    }
  },Suhu:{
    screen: Suhu,
    navigationOptions:{
      tabBarIcon: ({tintColor})=><Iconf name="temperature-low" color={tintColor} size={20}/>
    }
  },
},{
  tabBarOptions:{
    activeTintColor:"#900",
    inactiveTintColor: "black",
    style:{
      backgroundColor: "white",
    },
    showIcon: true,
    showLabel: false
  },
  }
)

const AppBottomNavigator = createBottomTabNavigator({
  Dashboard:{
    screen: Dashboard,
    navigationOptions:{
      tabBarLabel: "Dashboard",
      tabBarIcon: ({tintColor})=><Icon name="home" color={tintColor}/>
    }
  },
  Riwayat:{
    screen: RiwayatTopNavigator,
    navigationOptions:{
      tabBarLabel: "Riwayat",
      tabBarIcon: ({tintColor})=><Icon name="time" color={tintColor}/>
    }
  },
  Akun:{
    screen:Akun,
    navigationOptions:{
      tabBarLabel: "Akun",
      tabBarIcon: ({tintColor}) => <Icon name="person" color={tintColor}/>
    }
  }
},{
  tabBarOptions:{
    activeTintColor: "#900",    
  },
  navigationOptions: ({navigation}) => {
    const {routeName} = navigation.state.routes[navigation.state.index];
    if (routeName=="Riwayat"){
      return{header:null}
    }else{
      return{
        headerTitle:routeName,
      }  
    }
    
  }
})

const DashboardStackNavigator = createStackNavigator({
  Dashboard:AppBottomNavigator
})

const AppSwitchNavigator = createSwitchNavigator({
  Login:AppStackNavigator,
  Dashboard:AppBottomNavigator
})

const AppContainer = createAppContainer( AppSwitchNavigator );