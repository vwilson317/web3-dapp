import { Platform, ToastAndroid } from 'react-native';
import Toast from 'react-native-toast-message';
import { toast, ToastContainer } from 'react-toastify';

export enum ToastType {
    success = 'success',
    error = 'error',
    info = 'info',
    any = 'any'
};

export const showToast = (type: ToastType, message: string) => {
    if (Platform.OS === 'android') {
        ToastAndroid.show(message, ToastAndroid.LONG);
    } else if (Platform.OS === 'web') {
        switch (type) {
            case ToastType.success:
                toast.success(message, { autoClose: 2000 });
                break;
            case ToastType.error:
                toast.error(message, { autoClose: false });
                break;
        }
    }
    else {
        Toast.show({
            type: type,
            text1: message,
        });
    }
};

export default function ToastContainerWebOnly(){
    if(Platform.OS === 'web')
        return (
            <ToastContainer />
            )
}