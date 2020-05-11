import React, {useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Animated,
  Dimensions,
} from 'react-native';
import {View} from 'react-native-animatable';

import Heart from '../assets/icons/Heart';
import Wallpaper from '../assets/icons/Wallpaper';

const {height, width} = Dimensions.get('screen');

export default function Select({route}) {
  const {image} = route.params;
  const [largura] = useState(new Animated.Value(width));
  const [altura] = useState(new Animated.Value(10));

  Animated.sequence([
    Animated.timing(largura, {
      toValue: width,
      duration: 0,
      useNativeDriver: false,
    }),
    Animated.timing(altura, {
      toValue: height,
      duration: 1000,
      useNativeDriver: false,
    }),
  ]).start();

  return (
    <SafeAreaView style={styles.container}>
      <Animated.Image
        style={{width: largura, height: altura}}
        source={{uri: image}}
      />
      <View animation="bounceIn" delay={1200} style={styles.wallpaperIcon}>
        <TouchableOpacity>
          <Wallpaper size={34} />
        </TouchableOpacity>
      </View>
      <View animation="bounceIn" delay={1000} style={styles.downloadIcon}>
        <TouchableOpacity>
          <Heart size={34} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: -25,
    height: 60,
  },
  textButton: {
    color: 'white',
    fontSize: 28,
  },
  downloadIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width: 60,
    height: 60,
    position: 'absolute',
    borderRadius: 100,
    bottom: 20,
    left: '20%',
  },
  wallpaperIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width: 60,
    height: 60,
    position: 'absolute',
    borderRadius: 100,
    bottom: 20,
    right: '20%',
  },
});
