import React, {useEffect} from 'react';
import {Button} from 'react-native';
import type {Node} from 'react';
import * as LocalAuthentication from 'expo-local-authentication';
import {
  AppState,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const handleAppStateChange = status => {
    if (status) {
      console.log(status);
    }
  };

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

      <Button
        title={'auth'}
        onPress={() => {
          LocalAuthentication.cancelAuthenticate()
            .then(res => {
              console.log('err', res);
            })
            .catch(err => {
              console.log('err', err);
            });
          LocalAuthentication.authenticateAsync()
            .then(res => {
              console.log('res', res);
            })
            .catch(() => {
              console.log('err', err);
            })
            .finally(() => {
              LocalAuthentication.cancelAuthenticate();
            });
        }}>
        Auth
      </Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
// import * as React from 'react';
// import {Text, View, StyleSheet, Button, Alert} from 'react-native';
// import Constants from 'expo-constants';
// import * as LocalAuthentication from 'expo-local-authentication';

// export default class App extends React.Component {
//   componentDidMount() {}
//   async login() {
//     try {
//       let results = await LocalAuthentication.authenticateAsync();
//       if (results.success) {
//         Alert.alert('alert', 'login success');
//       } else {
//         Alert.alert('alert', JSON.stringify(results));
//       }
//       // LocalAuthentication.cancelAuthenticate();
//     } catch (err) {
//       Alert.alert('alert', 'login fail: ' + err);
//       console.log(err);
//     }
//   }
//   render() {
//     return (
//       <View style={styles.container}>
//         <Button title="login" onPress={this.login.bind(this)}></Button>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     paddingTop: Constants.statusBarHeight,
//     backgroundColor: '#ecf0f1',
//     padding: 8,
//   },
// });
