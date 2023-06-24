import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
//@ts-ignore
import gStyles from '../styles/Global.scss';

interface SubMenuProps {
  onLogout: () => void;
  isOpen: boolean;
}

const SubMenu = ({ onLogout, isOpen }: SubMenuProps) => {
  const handleLogout = () => {
    // Call the logout function passed as a prop
    onLogout();
    isOpen = false;
  };

  return (
    <View style={gStyles.container}>
      {isOpen && (
        <View style={[gStyles.row, styles.subMenu]}>
          <TouchableOpacity onPress={handleLogout} style={styles.subMenuItem}>
            <Text style={styles.subMenuItemText}>Logout</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  menuButton: {
    paddingHorizontal: 10,
  },
  menuText: {
    fontSize: 18,
    color: 'blue',
  },
  subMenu: {
    position: 'absolute',
    top: 30,
    right: 10,
    backgroundColor: '#fff',
    borderRadius: 4,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  subMenuItem: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  subMenuItemText: {
    fontSize: 16,
    color: 'black',
  },
});

export default SubMenu;
