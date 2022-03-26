// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProceedWallet from './src/ProceedWallet';
import ConnectWallet from './src/ConnectWallet';
import NewWalletSuccess from './src/NewWalletSuccess';
import Onboarding from "./src/Onboarding";
import AnonymousApproval from "./src/modes/anonymous/Approval";
import ViewInfo from "./src/Info/ViewInfo";
import Options from './src/globalComponents/Options'
import AnonymousDonate from "./src/modes/anonymous/Donate";
import CreateCampaign from './src/CreateCampaign';
import WalletConnect from './src/WalletConnect';
import WebviewURL from './src/WebView';
import wcApproval from './src/modes/walletConnect/Approval';
import wcDonate from './src/modes/walletConnect/Donate';

import { NativeBaseProvider } from 'native-base/src/core/NativeBaseProvider';
import { StatusBar } from 'native-base';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NativeBaseProvider>
      <StatusBar translucent backgroundColor={'transparent'}/>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="ProceedWallet" component={ProceedWallet} />
          <Stack.Screen name="ConnectWallet" component={ConnectWallet} />
          <Stack.Screen name="NewWalletSuccess" component={NewWalletSuccess} />
          <Stack.Screen name="Onboarding" component={Onboarding} />
          <Stack.Screen name="AnonymousApproval" component={AnonymousApproval} />
          <Stack.Screen name="AnonymousDonate" component={AnonymousDonate} />
          <Stack.Screen name="ViewInfo" component={ViewInfo} />
          <Stack.Screen name="Options" component={Options} />
          <Stack.Screen name="CreateCampaign" component={CreateCampaign} />
          <Stack.Screen name="WalletConnect" component={WalletConnect} />
          <Stack.Screen name="WebviewURL" component={WebviewURL} />
          <Stack.Screen name="wcApproval" component={wcApproval} />
          <Stack.Screen name="wcDonate" component={wcDonate} />

        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default App;

