import React from 'react';
import {
  Button,
  NativeModules,
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
} from 'react-native';
import {Colors, Header} from 'react-native/Libraries/NewAppScreen';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />

        <Button
          onPress={() =>
            NativeModules.Fourthline.startKyc(`{
            "flowType": "testMe"
          }`)
          }
          title="Launch Verification"
        />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
