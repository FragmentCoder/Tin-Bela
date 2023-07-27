import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Splash from './src/screens/splash/Splash';
import Onboarding_01 from './src/screens/onboarding_01/Onboarding_01';
import Onboarding_02 from './src/screens/onboarding_02/Onboarding_02';
import Onboarding_03 from './src/screens/onboarding_03/Onboarding_03';
import Login from './src/screens/login/Login';
import Verification from './src/screens/verification/Verification';
import Successfully from './src/screens/account_created_successfully/Successfully';
import AccountType from './src/screens/account_type/AccountType';
import TestPage from './src/test/test';
import AccountSettings from './src/screens/account_settings/AccountSettings';
import Home from './src/screens/home/Home';
import CreateGroup from './src/screens/create_group/CreateGroup';
import CreateGroup2 from './src/screens/create_group_2/CreateGroup2';
import {AppProvider} from './src/context/CContext';
import JoinTheOfficeGroup from './src/screens/join_office_group/JoinTheOfficeGroup';
import WeeklyMealPlan from './src/screens/weekly_meal_plan/WeeklyMealPlan';
import DayMealPlan from './src/screens/day_meal_plan/DayMealPaln';
import CateringFoodList from './src/screens/catering_food_list/CateringFoodList';
import Group from './src/screens/group/Group';

import CColors from './src/color/CColors';

import {Icon} from '@rneui/themed';
import Calculation from './src/screens/calculation/Calculation';
import Others from './src/screens/others/Others';
import CStrings from './src/strings/CStrings';
import InvoiceDetails from './src/screens/invoice_details/InvoiceDetails';
import GroupCreate from './src/screens/drawer_screen/GroupCreate';
import GroupCreate2 from './src/screens/drawer_screen/GroupCreate2';

const transitionSide = {
  headerShown: false,
  ...TransitionPresets.SlideFromRightIOS,
};

const hideHeader = {
  headerShown: false,
};

const Stack = createStackNavigator();
const StackScreen = () => (
  <Stack.Navigator
    initialRouteName="catering_food_list"
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="test" component={TestPage} />
    <Stack.Screen
      name="splash"
      component={Splash}
      options={{...TransitionPresets.SlideFromRightIOS}}
    />
    <Stack.Screen
      name="onboarding_01"
      component={Onboarding_01}
      options={{...TransitionPresets.SlideFromRightIOS}}
    />
    <Stack.Screen
      name="onboarding_02"
      component={Onboarding_02}
      options={{...TransitionPresets.SlideFromRightIOS}}
    />
    <Stack.Screen
      name="onboarding_03"
      component={Onboarding_03}
      options={{...TransitionPresets.SlideFromRightIOS}}
    />
    <Stack.Screen
      name="login"
      component={Login}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="verification"
      component={Verification}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="account_created_successfully"
      component={Successfully}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="account_type"
      component={AccountType}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="account_settings"
      component={AccountSettings}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="create_group"
      component={CreateGroup}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="create_group_2"
      component={CreateGroup2}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="join_the_office_group"
      component={JoinTheOfficeGroup}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="weekly_meal_plan"
      component={WeeklyMealPlan}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="day_meal_plan"
      component={DayMealPlan}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="catering_food_list"
      component={CateringFoodList}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name={CStrings.invoice_details}
      component={InvoiceDetails}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);

const Tab = createBottomTabNavigator();
const TabScreen = () => (
  <Tab.Navigator
    initialRouteName={CStrings.cost}
    screenOptions={({route}) => ({
      headerShown: false,
      tabBarActiveTintColor: CColors.green,
      tabBarInactiveTintColor: CColors.gray,
      tabBarLabelStyle: {fontFamily: 'HindSiliguri-Bold'},
      //tabBarStyle: {height: 56},
      tabBarIcon: ({focused, color}) => {
        let iconName = '',
          iconSize = 0,
          iconType = 'ionicon';
        if (route.name == CStrings.home) {
          iconName = focused ? 'home' : 'home-outline';
          iconSize = focused ? 30 : 25;
        } else if (route.name == CStrings.group) {
          iconName = focused ? 'account-group' : 'account-group-outline';
          iconSize = focused ? 30 : 25;

          iconType = 'material-community';
        } else if (route.name == CStrings.cost) {
          iconName = focused ? 'calculator' : 'calculator-outline';
          iconSize = focused ? 30 : 25;
        } else if (route.name == CStrings.others) {
          iconName = focused ? 'menu' : 'menu-outline';
          iconSize = focused ? 30 : 25;
        }

        return (
          <Icon name={iconName} type={iconType} size={iconSize} color={color} />
        );
      },
    })}>
    <Tab.Screen name={CStrings.home} component={Home} />
    <Tab.Screen name={CStrings.group} component={Group} />
    <Tab.Screen name={CStrings.cost} component={Calculation} />
    <Tab.Screen name={CStrings.others} component={Others} />
  </Tab.Navigator>
);

/* const Drawer = createDrawerNavigator();
const DrawerScreen = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="group" component={GroupCreate} />
    <Drawer.Screen name="group2" component={GroupCreate2} />
  </Drawer.Navigator>
); */

function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="tab">
          <Stack.Screen
            name="stack"
            component={StackScreen}
            options={hideHeader}
          />
          <Stack.Screen name="tab" component={TabScreen} options={hideHeader} />
          {/*  <Stack.Screen
            name="drawer"
            component={DrawerScreen}
            options={hideHeader}
          /> */}
          ` `
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}

export default App;
