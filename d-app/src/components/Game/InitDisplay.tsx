import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { Button, TextInput, View } from "react-native";
import { useContext, useState } from "react";
import { ServicesContext } from "../ApiProvider";
import { useAppSelector } from "../../../hooks";
import { getLoginUser } from '../../features/userSlice';
import { GestureResponderEvent } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import GameConfigScreen from "./GameConfigScreen";
import QuestionScreen from './QuestionScreen';
import ShareScreen from "./ShareScreen";
import GameScreen from "./GameScreen";

const InitDisplay = () => {
    const navigator = useNavigation();
    const userId = useAppSelector(getLoginUser)?.id;
    const api = useContext(ServicesContext)?.gameApi;
    const [title, setTitle] = useState<string>("");

    async function handleCreateOnPress(event: GestureResponderEvent): Promise<void> {
        const gameId: number | undefined = (await api?.createAsync(userId, title))?.id;
        //@ts-ignore
        navigator.navigate({ name: 'GameConfig', params: { gameId: gameId } });
    }

    const Tab = createBottomTabNavigator();

    function MyTabs() {
        return (
            <NavigationContainer independent={true}>
                <Tab.Navigator screenOptions={{
                    headerShown: false
                }}>
                    <Tab.Screen name="Games" component={GameScreen} />
                    <Tab.Screen name="GameConfig" component={GameConfigScreen} />
                    <Tab.Screen name="Questions" component={QuestionScreen} />
                    <Tab.Screen name="Share" component={ShareScreen} />
                </Tab.Navigator>
            </NavigationContainer>
        );
    }

    return (
        <>
            <View className="mt-4 mb-4">
                <div className='flex flex-column justify-center'>
                    <TextInput placeholder="Do you Know Me !?" value={title} onChangeText={setTitle}></TextInput>
                    <Button title="Create Game" onPress={handleCreateOnPress}></Button>
                </div>
            </View>

            {MyTabs()}
        </>
    )
};

export default InitDisplay;