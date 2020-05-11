import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';
import {View} from 'react-native-animatable';

export default function HomeGrid({navigation, name, quality}) {
  const {height, width} = Dimensions.get('window');

  const imageQuality = () => {
    return quality === 0 ? 1 : quality === 1 ? 1.5 : 2;
  };

  const url = `https://picsum.photos/${Math.round(width) * imageQuality()}/${
    Math.round(height) * imageQuality()
  }?random=`;

  const initialArr = [1, 2, 3, 4];

  const [pressButton, setPressButton] = useState(false);

  const renderMore = () => {
    return (
      <FlatList
        data={initialArr}
        numColumns={2}
        renderItem={({item}) => {
          let image = `${url}${Math.random()}`;
          return (
            <View animation="flipInY" duration={1500}>
              <TouchableOpacity
                key={item}
                onPress={() => navigation.navigate('Select', {image})}>
                <Image style={styles.imageBox} source={{uri: image}} />
              </TouchableOpacity>
            </View>
          );
        }}
        keyExtractor={(item) => item}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textTileH2}>{name}</Text>
      <View style={styles.container1}>
        <View style={styles.container2}>
          {pressButton ? renderMore() : null}
          {pressButton ? null : renderMore()}
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setPressButton(!pressButton)}>
          <Text style={styles.textButton}>more</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container1: {
    paddingBottom: 10,
    height: Dimensions.get('window').height - 80,
  },
  container2: {
    flex: 1,
    marginRight: 20,
    marginLeft: 10,
  },
  textTileH2: {
    color: 'black',
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 10,
    fontSize: 26,
  },
  imageBox: {
    margin: 10,
    width: Dimensions.get('window').width * 0.5 - 30,
    height: Dimensions.get('window').height * 0.5 - 100,
    backgroundColor: 'lightgray',
    borderRadius: 25,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    marginHorizontal: 20,
    marginTop: 10,
    height: 60,
  },
  textButton: {
    color: 'white',
    fontSize: 28,
  },
});
