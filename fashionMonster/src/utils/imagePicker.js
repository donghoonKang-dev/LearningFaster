import axios from 'axios';
import { launchImageLibrary } from 'react-native-image-picker';

export default function imagePicker(images, setImages) {
  launchImageLibrary({ mediaType: 'photo' }, (response) => {
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    } else {
      // https://www.python2.net/questions-1239008.htm
      const formData = new FormData();
      response.assets.forEach(file => formData.append('image', {
        name: file.fileName,
        type: file.type,
        uri:
          Platform.OS === 'android' ? file.uri : file.uri.replace('file://', ''),
      }));
      axios.post('http://192.168.0.38:8080/seller/upload/image/product', formData).then((res) => setImages(prev => [...prev, ...res.data]));
    }
  });
};