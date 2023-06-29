// import { Platform, ToastAndroid } from 'react-native';
// // import Toast from 'react-native-toast-message';
// // import { toast, ToastContainer, ToastOptions } from 'react-toastify';
// //@ts-ignore
// import ToastManager, {Toast} from 'toastify-react-native';

// export enum ToastType {
//     success = 'success',
//     error = 'error',
//     info = 'info',
//     any = 'any'
// };

// export const showToast = (type: ToastType, message: string) => {
//     if (Platform.OS === 'android') {
//         ToastAndroid.show(message, ToastAndroid.LONG);
//     } else if (Platform.OS === 'web') {
//         let config =  {
//             position: "top-right",
//             autoClose: 5000,
//             hideProgressBar: true,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//             theme: "light",
//             };
//         switch (type) {
//             case ToastType.success:
//                 Toast.success(message, config);
//                 break;
//             case ToastType.error:
//                 Toast.error(message, config);
//                 break;
//         }
//     }
//     else {
//         Toast.show({
//             type: type,
//             text1: message,
//         });
//     }
// };

// export default function ToastContainerWebOnly(){
//     if(Platform.OS === 'web')
//         return (
//             <ToastManager />
//             )
//     else
//         <></>
// }