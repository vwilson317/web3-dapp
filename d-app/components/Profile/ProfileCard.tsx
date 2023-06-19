import { Card, Text } from '@rneui/themed';
import useEth from '../../contexts/EthContext/useEth';
import { View, Pressable, ImageBackground } from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

import Styles from './Profile.scss';
import GStyles from '../../src/styles/Global.scss';
// very slow rendering :/
// import manPng from '../../assets/man.png';
// import womanPng from '../../assets/girl.png';
const manPng = require('../../assets/man.png');
const womanPng = require('../../assets/girl.png');

const ProfileCard = ({ name, gender }: User) => {
  const { state: { contract, accounts } } = useEth();
  function getImage(gender: String) {
    // return gender === "m" ? manPng : womanPng;
    return gender === "m" ? manPng : womanPng;
  }

  const spin = useSharedValue<number>(0);

  const fStyle = useAnimatedStyle(() => {
    const spinVal = interpolate(spin.value, [0, 1], [0, 180]);
    return {
      transform: [
        {
          rotateY: withTiming(`${spinVal}deg`, { duration: 500 }),
        },
      ],
    };
  }, []);

  const bStyle = useAnimatedStyle(() => {
    const spinVal = interpolate(spin.value, [0, 1], [180, 360]);
    return {
      transform: [
        {
          rotateY: withTiming(`${spinVal}deg`, { duration: 500 }),
        },
      ],
    };
  }, []);

  return (
    //   <View>
    //   <View>
    //     <Animated.View style={[Styles.front, fStyle]} >
    //       <ImageBackground source={getImage(gender)} style={Styles.backgroundImage}/>
    //       {/* <Text>Front View</Text> */}
    //     </Animated.View>
    //     <Animated.View style={[Styles.back, bStyle]}>
    //       <Text>Back</Text>
    //     </Animated.View>
    //   </View>
    //   <Pressable
    //     onPress={() => (spin.value = spin.value ? 0 : 1)}
    //     style={{ marginTop: 30, alignItems: "center" }}
    //   >
    //     <Text style={{ fontSize: 16 }}>Flip</Text>
    //   </Pressable>
    // </View>
    // <View>
    //   <View>
    // <View style={[GStyles.container]}>
    //   <Pressable sytle={Styles.pressDiv} onPress={() => (spin.value = spin.value ? 0 : 1)}>
    //     <Animated.View style={[Styles.front, fStyle]} >
    //       <Card>
    //         <Card.Title>{name}</Card.Title>
    //         <Card.Image source={getImage(gender)} />
    //         <Text>Some profile text</Text>
    //       </Card>
    //     </Animated.View>
    //     <Animated.View style={[Styles.back, bStyle]}>
    //       <Card>
    //       <Card.Title>{name}</Card.Title>
    //         <Card.Image source={getImage(gender)} />
    //         <Text>Back</Text>
    //       </Card>
    //     </Animated.View>
    //   </Pressable>
    // </View>

<Card>
<Card.Title>{name}</Card.Title>
<Card.Image source={getImage(gender)} />
<Text>Some profile text</Text>
</Card>

    //<View />
    //</View> */}
  )
}

export default ProfileCard;