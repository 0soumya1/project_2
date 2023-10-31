import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {PaperProvider} from 'react-native-paper';
import Routes from './app/routes';

const App = () => {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <Routes />
      </PaperProvider>
    </SafeAreaProvider>
  );
};

export default App;
