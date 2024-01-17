import {Text, TouchableOpacity} from 'react-native';
import Styles from './LongButtonStyle';

interface Button {
  Label: String;
  ButtonColor?: any;
  TextColor?: any;
  onPress: () => void;
}

const LongButton = ({Label, ButtonColor, TextColor, onPress}: Button) => {
  return (
    <TouchableOpacity
      style={[
        Styles.TouchableStyle,
        ButtonColor && {backgroundColor: ButtonColor},
      ]}
      onPress={onPress}>
      <Text style={[Styles.buttonTextStyle, TextColor && {color: TextColor}]}>
        {Label}
      </Text>
    </TouchableOpacity>
  );
};

export default LongButton;
