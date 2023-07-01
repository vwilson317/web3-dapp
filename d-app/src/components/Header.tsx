import React from 'react';
import { View, StyleSheet } from 'react-native';
import Login from './Login/LoginHeader';
import { FaUser } from 'react-icons/fa';

const Header: React.FC = () => {
  return (
    <>
      <Login icon={<FaUser size={'2em'} />} />
    </>
  );
};

export default Header;