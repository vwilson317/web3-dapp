import React from 'react';
import { View, StyleSheet } from 'react-native';
import Login from './Login/Login';
import { FaUser } from 'react-icons/fa';
const Header: React.FC = () => {
  return (
    <View style={styles.container}>
      <Login icon={<FaUser />}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
});

export default Header;
