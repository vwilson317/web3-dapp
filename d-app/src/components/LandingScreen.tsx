import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useTailwind } from 'tailwind-rn';

const LandingScreen = () => {
  const tw = useTailwind();
  return (
    <View className={'flex-1 items-center justify-center bg-white'}>
      {/* <Image
        source={require('./assets/logo.png')}
        className={'w-32 h-32 mb-8')}
      /> */}
      <Text className={'text-2xl font-bold text-gray-800 mb-4'}>
        Welcome to Serendipity Dating
      </Text>
      <Text className={'text-lg text-gray-600 text-center mb-8'}>
        Discover meaningful connections and make online interactions as
        serendipitous as real-life ones.
      </Text>
      <TouchableOpacity
        className={'bg-blue-500 py-3 px-8 rounded-full'}
        onPress={() => console.log('Sign Up button clicked')}
      >
        <Text className={'text-white font-bold text-lg'}>
          Sign Up Now
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        className={'mt-4'}
        onPress={() => console.log('Login button clicked')}
      >
        <Text className={'text-blue-500 underline'}>
          Already have an account? Log in here.
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LandingScreen;
