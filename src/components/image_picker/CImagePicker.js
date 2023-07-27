import React, {useContext} from 'react';
import {TouchableOpacity, Image, Alert} from 'react-native';
import styles from './style';
import ImageCropPicker from 'react-native-image-crop-picker';
import {AppContext} from '../../context/CContext';

//global variable
let defaultImagePath = require('../../../assets/images/avater.png');

function CImagePicker(props) {
  //hooks

  const {imagePath, setImagePath} = useContext(AppContext);

  //function
  const imagePicker = () => {
    console.log(`image is click`);
    ImageCropPicker.openPicker({
      width: 8000,
      height: 8000,
      cropping: true,
    }).then(image => {
      const imagePathVariable = image.path;
      setImagePath({uri: imagePathVariable});
    });
  };
  const deleteSelectedImage = () => {
    setImagePath(defaultImagePath);
  };

  const imageSelection = () => {
    Alert.alert('What do you Want?', 'Change image Or Delete Selected Image', [
      {
        text: 'Change Image',
        onPress: imagePicker,
      },
      {
        text: 'Delete Image',
        onPress: deleteSelectedImage,
      },
    ]);
  };

  //main function
  return (
    <TouchableOpacity
      onPress={imagePath == defaultImagePath ? imagePicker : imageSelection}
      style={styles.container}>
      <Image
        source={imagePath}
        style={
          imagePath == defaultImagePath ? styles.defaultImage : styles.image
        }
      />
    </TouchableOpacity>
  );
}
CImagePicker.defaultProps = {
  selectedImage: defaultImagePath,
};
export default CImagePicker;
