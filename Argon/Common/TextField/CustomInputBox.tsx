import {TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface CustomInput {
  borderColor?: string;
  lastIcon?: string;
  placeHolder: string;
}

const CustomInputBox = ({borderColor, lastIcon, placeHolder}: CustomInput) => {
  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: borderColor ? borderColor : 'transparent',
        backgroundColor: 'white',
        width: '100%',
        padding: 14,
        paddingRight: 20,
        borderRadius: 4,
        elevation: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <TextInput placeholder={placeHolder} />
      {lastIcon && <Icon name={lastIcon} color={'black'} />}
    </View>
  );
};

export default CustomInputBox;
