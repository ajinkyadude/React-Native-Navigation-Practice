import {Text, TouchableOpacity} from 'react-native';
import Styles from './LongButtonStyle';

interface Button {
  Label: String;
  ButtonColor?: any;
  TextColor?: any;
  onPress: () => void;
  ExternalStyle?: any;
}

const LongButton = ({
  Label,
  ButtonColor,
  TextColor,
  onPress,
  ExternalStyle,
}: Button) => {
  return (
    <TouchableOpacity
      style={[
        Styles.TouchableStyle,
        ButtonColor && {backgroundColor: ButtonColor},
        ExternalStyle && ExternalStyle,
      ]}
      onPress={onPress}>
      <Text style={[Styles.buttonTextStyle, TextColor && {color: TextColor}]}>
        {Label}
      </Text>
    </TouchableOpacity>
  );
};

export default LongButton;
