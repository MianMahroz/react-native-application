import {Toast} from 'native-base';

const ToastMsg = msg => {
  Toast.show({
    text: msg,
    buttonText: 'close',
    duration: 3000,
  });
};
export default ToastMsg;
