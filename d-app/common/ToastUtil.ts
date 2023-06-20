import { Platform, ToastAndroid } from 'react-native';
import Toast from 'react-native-toast-message';

export enum ToastType {
    success = 'success',
    error = 'error',
    info = 'info',
    any = 'any'
};

export const showToast = (type: string, message: string) => {
    if (Platform.OS === 'android') {
        ToastAndroid.show(message, ToastAndroid.LONG);
    } else if (Platform.OS === 'web') {
        alert(message);
    }
    else {
        Toast.show({
            type: type,
            text1: message,
        });
    }
};