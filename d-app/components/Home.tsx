import { useEffect } from "react";
import { View } from "react-native";
import { useDispatch } from "react-redux";
// import { setCurrentScreens } from "../features/userSlice";
import { ScreenType } from "./Drawer";

export default function Home() {
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(setCurrentScreens(ScreenType.Home))
    // }, []);

    return(
        <View>
            <h1>Home Screen</h1>
        </View>
    )
}