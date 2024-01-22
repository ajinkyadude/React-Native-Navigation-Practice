import {Platform, TextInput, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface CustomInput {
  borderColor?: string;
  lastIcon?: string;
  placeHolder: string;
  firstIcon?: string;
  ExternalStyle?: any;
  placeHolderColor?: string;
}

const CustomInputBox = ({
  borderColor,
  lastIcon,
  placeHolder,
  firstIcon,
  ExternalStyle,
  placeHolderColor,
}: CustomInput) => {
  return (
    <View
      style={[
        {
          borderWidth: 1,
          borderColor: borderColor ? borderColor : 'transparent',
          backgroundColor: 'white',
          width: '100%',
          padding: Platform.OS === 'ios' ? 14 : 3,
          paddingHorizontal: 10,
          paddingRight: 20,
          borderRadius: 4,
          elevation: 10,
          flexDirection: 'row',
          justifyContent: lastIcon && 'space-between',
          alignItems: 'center',
        },
        ExternalStyle,
      ]}>
      {firstIcon && (
        <TouchableOpacity>
          <Icon
            name={firstIcon}
            color={'#ADB5BD'}
            style={{marginRight: 15}}
            size={18}
          />
        </TouchableOpacity>
      )}
      <TextInput
        placeholder={placeHolder}
        placeholderTextColor={placeHolderColor}
      />
      {lastIcon && (
        <TouchableOpacity>
          <Icon
            name={lastIcon}
            color={placeHolderColor ? placeHolderColor : '#ADB5BD'}
            size={18}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CustomInputBox;
