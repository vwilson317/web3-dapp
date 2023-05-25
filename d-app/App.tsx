import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import MatchingView from './components/MatchingView';
import EthProvider from "./contexts/EthContext/EthProvider";
// import styles from './components/styles/MatchingView.module.scss';
import Match from './interfaces/Match';
import User from './interfaces/User';
import { Provider } from 'react-redux';
import store from './store';

function App() {


  // useEffect(() => {

  // });

  return (
    <Provider store={store}>
      <EthProvider>
        <View style={styles.container}>
          <MatchingView />
        </View>
      </EthProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default App;