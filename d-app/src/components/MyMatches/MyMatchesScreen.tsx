import { useEffect } from "react";
import { View } from "react-native";
import { useDispatch } from "react-redux";
// import { setCurrentScreens } from "../../features/userSlice";
import { ScreenType } from "../Drawer";

export default function MyMatchesScreen() {
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(setCurrentScreens(ScreenType.MyMatches))
    // }, []);
    
    return (
        <View>
            <h1>My Matches</h1>
        </View>
    )
}