import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const SubMenu = ({ onLogout, isOpen }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleToggleSubMenu = () => {
//     setIsOpen(!isOpen);
//   };

  const handleLogout = () => {
    // Call the logout function passed as a prop
    onLogout();
    isOpen = false;
  };

  return (
    <View style={styles.container}>
      {/* <TouchableOpacity onPress={handleToggleSubMenu} style={styles.menuButton}>
        <Text style={styles.menuText}>Menu</Text>
      </TouchableOpacity> */}

      {isOpen && (
        <View style={styles.subMenu}>
          <TouchableOpacity onPress={handleLogout} style={styles.subMenuItem}>
            <Text style={styles.subMenuItemText}>Logout</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    alignItems: 'flex-end',
    marginTop: 10,
  },
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
