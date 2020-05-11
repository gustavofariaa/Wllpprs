import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import * as Animatable from 'react-native-animatable';

export default function HomeCarousel({navigation, name, quality}) {
  const {height, width} = Dimensions.get('window');

  const imageQuality = () => {
    return quality === 0 ? 1 : quality === 1 ? 1.5 : 2;
  };
  const url = `https://picsum.photos/${Math.round(width) * imageQuality()}/${
    Math.round(height) * imageQuality()
  }?random=`;

  const initialArr = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <View style={styles.container1}>
      <Text style={styles.textTileH2}>{name}</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.container2}>
          {initialArr.map((key) => {
            let image = `${url}${Math.random()}`;
            return (
              <Animatable.View
                animation="fadeInRight"
                delay={500}
                duration={1500}>
                <TouchableOpacity
                  key={image + key}
                  onPress={() => navigation.navigate('Select', {image})}>
                  <Image style={styles.imageBox} source={{uri: image}} />
                </TouchableOpacity>
              </Animatable.View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
  },
  container2: {
    flex: 1,
    flexDirection: 'row',
    marginRight: 20,
    marginLeft: 10,
  },
  textTileH2: {
    color: 'white',
    marginHorizontal: 20,
    margin: 20,
    fontSize: 26,
  },
  imageBox: {
    marginHorizontal: 10,
    width: Dimensions.get('window').width / 2 - 50,
    height: Dimensions.get('window').height / 2.5,
    backgroundColor: 'lightgray',
    borderRadius: 25,
  },
});
