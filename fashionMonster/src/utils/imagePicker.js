import axios from 'axios';
import { launchImageLibrary } from 'react-native-image-picker';

export default function imagePicker(images, setImages, setUploading) {
  if (images.length === 20) return alert('사진은 최대 20장까지 등록 가능합니다.');
  launchImageLibrary({ mediaType: 'photo' }, (response) => {
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    } else {
      const formData = new FormData();
      response.assets.forEach(file => formData.append('image', {
        name: file.fileName,
        type: file.type,
        uri:
          Platform.OS === 'android' ? file.uri : file.uri.replace('file://', ''),
      }));
      setUploading(true);
      axios
        .post('https://api.fstr.shop/seller/upload/image/product', formData)
        .then((res) => setImages(prev => [...prev, ...res.data]))
        .finally(() => setUploading(false));
    }
  });
};