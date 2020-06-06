/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import {Navigation} from 'react-native-navigation';
// console.log(Navigation);
// AppRegistry.registerComponent(appName, () => App);

// import {Navigation} from 'react-native-navigation';
// import App from './App';
Navigation.registerComponent('com.myApp.WelcomeScreen', () => App);
// Navigation.setDefaultOptions({
//   overlay: {
//     interceptTouchOutside: true,
//     handleKeyboardEvents: true,
//   },
//   layout: {direction: 'rtl'}, //RTL
//   // layout: {direction: 'ltr'}, //<TLR
//   topBar: {
//     background: {
//       color: 'white',
//     },
//     rightButtons: [],
//     noBorder: true,
//     elevation: 0,
//     backButton: {
//       visible: true,
//       showTitle: false,
//       color: '#575757',
//       fontSize: 16,
//     },
//     title: {
//       color: '#575757',
//       fontSize: 18,
//       alignment: 'center',
//     },
//   },
// });

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'com.myApp.WelcomeScreen',
            },
          },
        ],
      },
    },
  });
});

// import {Navigation} from 'react-native-navigation';
// import App from './App';
// Navigation.registerComponent('com.myApp.WelcomeScreen', () => App);
// Navigation.events().registerAppLaunchedListener(() => {
//   Navigation.setRoot({
//     root: {
//       stack: {
//         children: [
//           {
//             component: {
//               name: 'com.myApp.WelcomeScreen',
//             },
//           },
//         ],
//       },
//     },
//   });
// });
