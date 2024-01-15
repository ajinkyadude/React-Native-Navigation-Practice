import {Text, TouchableOpacity, View, Dimensions, FlatList} from 'react-native';

const HomeScreen = () => {
  const {width, height} = Dimensions.get('window');
  const arr = [
    'Ajinkya',
    'Dude',
    'Ajay',
    'test',
    'long',
    'short',
    'distance',
    'phone',
  ];
  return (
    <FlatList
      data={arr}
      numColumns={2}
      contentContainerStyle={{
        width: width,
      }}
      showsVerticalScrollIndicator={false}
      renderItem={({item}) => {
        return (
          <TouchableOpacity
            style={{
              borderWidth: 1,
              backgroundColor: '#fcc203',
              borderRadius: 4,
              shadowOpacity: 1,
              shadowOffset: {width: 5, height: 5},
              width: width * 0.4,
              height: width * 0.4,
              alignItems: 'center',
              justifyContent: 'center',
              margin: 20,
              elevation: 20,
              shadowColor: '#52006A',
            }}>
            <Text style={{fontWeight: 'bold', fontStyle: 'italic'}}>
              {item}
            </Text>
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default HomeScreen;
