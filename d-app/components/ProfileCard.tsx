import { Card, Text } from '@rneui/themed';
import useEth from '../contexts/EthContext/useEth';
import User from '../interfaces/User';

const ProfileCard = ({ name, gender }: User) => {
    const { state: { contract, accounts } } = useEth();
    function getImage(gender: String){
        return gender === "m" ? require('../assets/man.png') : require('../assets/girl.png');
    }
    return (
        <Card>
            <Card.Title>{name}</Card.Title>
            <Card.Image source={getImage(gender)} />
            <Text>Some profile text</Text>
        </Card>
    )
}

export default ProfileCard;