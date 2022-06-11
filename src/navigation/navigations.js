import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginContainer from '../containers/LoginContainer';
import HomeComponent from '../components/HomeComponent';
import {createDrawerNavigator, DrawerContent} from '@react-navigation/drawer';
import StartScreen from '../components/StartScreen';
import BorrowerTypeContainer from '../containers/BorrowerTypeContainer';
import EmploymentTypeContainer from '../containers/EmploymentTypeContainer';
import ModelListContainer from '../containers/ModelListContainer';
import CompareModelListingContainer from '../containers/CompareModelListingContainer';
import ApplicationMenu from '../components/ApplicationMenu';
import ApplicantContainer from '../containers/ApplicantContainer';
import ApplicationMenuContainer from '../containers/Application_Menu_Container';
import Application_Queue_Container from '../containers/Application_Queue_Container';
// import ModelListComponent from '../components/ModelListComponent';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function AppDrawer() {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="StartScreen" component={StartScreen} />
      <Drawer.Screen name="Home" component={HomeComponent} />
      <Drawer.Screen name="BorrowerType" component={BorrowerTypeContainer} />
      <Drawer.Screen name="ModelList" component={ModelListContainer} />
      <Drawer.Screen
        name="ApplicationMenu"
        component={ApplicationMenuContainer}
      />
      <Drawer.Screen name="Applicant" component={ApplicantContainer} />

      <Drawer.Screen
        name="EmploymentType"
        component={EmploymentTypeContainer}
      />
      <Drawer.Screen
        name="CompareModelList"
        component={CompareModelListingContainer}
      />
      <Drawer.Screen
        name="ApplicationQueueList"
        component={Application_Queue_Container}
      />
    </Drawer.Navigator>
  );
}

export default function AppNavigationStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerTransparent: true,
            headerMode: 'screen',
            headerShown: false,
          }}
          name="Login"
          component={LoginContainer}
        />
        <Stack.Screen
          name="DrawerOpen"
          component={AppDrawer}
          options={{
            headerTransparent: true,
            headerMode: 'screen',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="StartScreen"
          component={StartScreen}
          options={{
            headerTransparent: true,
            headerMode: 'screen',
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
