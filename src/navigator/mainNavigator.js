import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile77119Navigator from '../features/UserProfile77119/navigator';
import Settings77118Navigator from '../features/Settings77118/navigator';
import Settings77116Navigator from '../features/Settings77116/navigator';
import SignIn277114Navigator from '../features/SignIn277114/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
UserProfile77119: { screen: UserProfile77119Navigator },
Settings77118: { screen: Settings77118Navigator },
Settings77116: { screen: Settings77116Navigator },
SignIn277114: { screen: SignIn277114Navigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
