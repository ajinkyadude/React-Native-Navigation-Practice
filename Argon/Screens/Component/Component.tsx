import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import Styles from './ComponentStyle';
import LongButton from '../../Common/LongButton/LongButton';
import CustomInputBox from '../../Common/TextField/CustomInputBox';
import Constant from '../../Common/Constant';
import {useState} from 'react';

const Component = () => {
  const [isOn, seytISOn] = useState(false);
  const {width, height} = Dimensions.get('window');
  return (
    <ScrollView contentContainerStyle={Styles.mainContainer}>
      <View style={Styles.subMainContainer}>
        <Text style={{fontWeight: 'bold', color: '#525F7F', fontSize: 16}}>
          Buttons
        </Text>
        <LongButton
          Label={'DEFAULT'}
          TextColor={'#fff'}
          ButtonColor={'#172B4D'}
          ExternalStyle={{marginVertical: 10}}
          onPress={() => {}}
        />
        <LongButton
          Label={'SECONDARY'}
          TextColor={'#212529'}
          ButtonColor={'#F7FAFC'}
          onPress={() => {}}
          ExternalStyle={{marginVertical: 10}}
        />
        <LongButton
          Label={'PRIMARY'}
          TextColor={'#fff'}
          ButtonColor={'#5E72E4'}
          onPress={() => {}}
          ExternalStyle={{marginVertical: 10}}
        />
        <LongButton
          Label={'INFO'}
          TextColor={'#fff'}
          ButtonColor={'#11CDEF'}
          onPress={() => {}}
          ExternalStyle={{marginVertical: 10}}
        />
        <LongButton
          Label={'SUCCESS'}
          TextColor={'#fff'}
          ButtonColor={'#2DCE89'}
          onPress={() => {}}
          ExternalStyle={{marginVertical: 10}}
        />
        <LongButton
          Label={'WARNING'}
          TextColor={'#fff'}
          ButtonColor={'#FB6340'}
          onPress={() => {}}
          ExternalStyle={{marginVertical: 10}}
        />
        <LongButton
          Label={'ERROR'}
          TextColor={'#fff'}
          ButtonColor={'#F5365C'}
          onPress={() => {}}
          ExternalStyle={{marginVertical: 10}}
        />

        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <View style={{backgroundColor: '#172B4D', borderRadius: 4}}>
            <Text
              style={{
                fontWeight: 'bold',
                color: '#fff',
                paddingVertical: 10,
                paddingHorizontal: 30,
                textAlign: 'left',
              }}>
              01
            </Text>
          </View>
          <View style={{backgroundColor: '#172B4D', borderRadius: 4}}>
            <Text
              style={{
                fontWeight: 'bold',
                color: '#fff',
                paddingVertical: 10,
                paddingHorizontal: 20,
              }}>
              DELETE
            </Text>
          </View>
          <View style={{backgroundColor: '#172B4D', borderRadius: 4}}>
            <Text
              style={{
                fontWeight: 'bold',
                color: '#fff',
                paddingVertical: 10,
                paddingHorizontal: 10,
              }}>
              SAVE FOR LATER
            </Text>
          </View>
        </View>
        <View style={{padding: 20}}>
          <Text style={{fontWeight: 'bold', color: '#525F7F', fontSize: 20}}>
            Typography
          </Text>
        </View>
        <View>
          <Text style={{color: '#32325D', fontSize: 40}}>Heading 1</Text>
          <Text style={{color: '#32325D', fontSize: 35}}>Heading 2</Text>
          <Text style={{color: '#32325D', fontSize: 30}}>Heading 3</Text>
          <Text style={{color: '#32325D', fontSize: 25}}>Heading 4</Text>
          <Text style={{color: '#32325D', fontSize: 20}}>Heading 5</Text>
          <Text style={{color: '#32325D', fontSize: 15}}>Paragraph</Text>
          <Text style={{color: '#32325D', fontSize: 15}}>
            This is a muted paragraph
          </Text>
        </View>
        <View style={{padding: 20}}>
          <Text style={{fontWeight: 'bold', color: '#525F7F', fontSize: 20}}>
            Inputs
          </Text>
        </View>
        <View>
          <CustomInputBox
            placeHolder="Regular"
            ExternalStyle={{
              borderWidth: 0.5,
              borderColor: '#11CDEF',
              marginVertical: 10,
            }}
          />
          <CustomInputBox
            placeHolder="Regular"
            ExternalStyle={{
              borderWidth: 0.5,
              borderColor: '#8898AA',
              backgroundColor: '#E9ECEF',
              marginVertical: 10,
            }}
          />
          <CustomInputBox
            placeHolder="Search"
            firstIcon={Constant?.searchPlus}
            ExternalStyle={{
              borderWidth: 0.5,
              borderColor: '#8898AA',
              marginVertical: 10,
            }}
          />
          <CustomInputBox
            placeHolder="Birthday"
            lastIcon={Constant?.searchPlus}
            ExternalStyle={{
              borderWidth: 0.5,
              borderColor: '#8898AA',
              marginVertical: 10,
            }}
          />

          <CustomInputBox
            placeHolder="Success"
            lastIcon={Constant?.componentCheck}
            ExternalStyle={{
              borderWidth: 1,
              borderColor: '#2DCE89',
              marginVertical: 10,
            }}
            placeHolderColor={'#7BDEB2'}
          />
          <CustomInputBox
            placeHolder="Error Input"
            lastIcon={Constant?.componentError}
            ExternalStyle={{
              borderWidth: 1,
              borderColor: '#FB6340',
              marginVertical: 10,
            }}
            placeHolderColor={'#FCB3A4'}
          />
        </View>
        <View style={{padding: 20}}>
          <Text style={{fontWeight: 'bold', color: '#525F7F', fontSize: 20}}>
            Switches
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{color: '#525F7F', fontSize: 14}}>Switch is ON</Text>
          <View
            style={{
              borderWidth: 1,
              borderColor: isOn ? '#5E72E4' : '#E9ECEF',
              width: width * 0.25,
              height: width * 0.13,
              borderRadius: 30,
              //   flexDirection: 'row',
            }}>
            {!isOn && (
              <TouchableOpacity
                onPress={() => {
                  seytISOn(true);
                }}
                style={{
                  width: '50%',
                  height: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <View
                  style={{
                    backgroundColor: '#E9ECEF',
                    height: '80%',
                    width: '80%',
                    borderRadius: 20,
                  }}></View>
              </TouchableOpacity>
            )}
            {isOn && (
              <TouchableOpacity
                onPress={() => {
                  seytISOn(false);
                }}
                style={{
                  width: '50%',
                  height: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  alignSelf: 'flex-end',
                }}>
                <View
                  style={{
                    backgroundColor: '#5E72E4',
                    height: '80%',
                    width: '80%',
                    borderRadius: 20,
                  }}></View>
              </TouchableOpacity>
            )}
          </View>
        </View>
        <View style={{height: 500}}></View>
      </View>
    </ScrollView>
  );
};

export default Component;
