import React, {useState} from 'react';
import {
  StyleSheet,
  ScrollView,
  Animated,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {View} from 'react-native-animatable';

import HomeCarousel from '../components/HomeCarousel';
import HomeGrid from '../components/HomeGrid';

import Settings from '../assets/icons/Settings';

const {height} = Dimensions.get('window');

export default function Home({navigation}) {
  const [containerSize] = useState(new Animated.Value(height * 0.09));
  const [imageQuality, setImageQuality] = useState(0);

  let last = 0;

  function handleScroll({y}) {
    let toValue = y <= 0 ? height * 0.09 : height * 0.05;
    let duration = y <= 0 ? 1000 : 600;

    if (last !== toValue) {
      Animated.timing(containerSize, {
        toValue,
        duration,
        useNativeDriver: false,
      }).start();
      last = toValue;
    }
  }

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <Animated.Text
          style={[
            styles.textTileH1,
            {
              fontSize: containerSize,
              paddingTop: containerSize,
            },
          ]}>
          Wllpprs
        </Animated.Text>

        <TouchableOpacity
          style={styles.settingsIcon}
          onPress={() =>
            navigation.navigate('Settings', {imageQuality, setImageQuality})
          }>
          <Settings size={height * 0.05} />
        </TouchableOpacity>
      </View>

      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        onScroll={(event) => handleScroll(event.nativeEvent.contentOffset)}>
        <View style={styles.container1}>
          <HomeCarousel
            navigation={navigation}
            name={'Best Wllpprs'}
            quality={imageQuality}
          />
        </View>
        <View style={styles.container2}>
          <View animation="fadeInUpBig" delay={1000} style={styles.container0}>
            <HomeGrid
              navigation={navigation}
              name={'Others'}
              quality={imageQuality}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  container2: {
    backgroundColor: '#333',
  },
  container1: {
    backgroundColor: '#333',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    paddingBottom: 40,
    marginBottom: -1,
  },
  container0: {
    backgroundColor: 'white',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  textTileH1: {
    color: 'black',
    marginHorizontal: 20,
    paddingBottom: 10,
  },
  settingsIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: height * 0.06,
    right: height * 0.01,
  },
});
