import { launchImageLibrary } from 'react-native-image-picker';

export default function imagePicker(images, setImages) {
  launchImageLibrary({ mediaType: 'photo' }, (response) => {
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    } else {
      setImages([
        ...images, 
        {
          id: response.assets[0].fileName,
          uri: response.assets[0].uri,
        }
      ]);
    }
  });
};