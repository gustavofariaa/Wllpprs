import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  Linking,
} from 'react-native';
import {View} from 'react-native-animatable';
import {Slider} from 'react-native-elements';

export default function Settings({navigation, route}) {
  const {imageQuality, setImageQuality} = route.params;

  const [quality, setQuality] = useState(imageQuality);

  const qualityText = () => {
    switch (quality) {
      case 0:
        return 'Low';
      case 1:
        return 'Medium';
      case 2:
        return 'High';
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textTileH1}>Settings</Text>
      <View animation="fadeInUpBig" style={styles.container1}>
        <View style={styles.container2}>
          <View style={styles.textContainer}>
            <Text style={styles.text2}>Wllpprs quality</Text>
          </View>
          <Slider
            thumbTouchSize={{width: 200, height: 200}}
            style={{marginVertical: 20}}
            thumbStyle={{
              width: 40,
              height: 40,
              borderRadius: 0,
              backgroundColor: 'black',
            }}
            trackStyle={{height: 10, borderRadius: 5}}
            step={1}
            maximumValue={2}
            value={quality}
            onValueChange={(quality) => setQuality(quality)}
            thumbTintColor={'#000'}
          />
          <View style={styles.textContainer}>
            <Text style={styles.text3}>{qualityText()}</Text>
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setImageQuality(quality);
              navigation.navigate('Home');
            }}>
            <Text style={styles.textButton}>save</Text>
          </TouchableOpacity>
        </View>

        <View animation="fadeInUpBig" delay={300} style={styles.info}>
          <Text style={styles.text4}>All images are hosted on the</Text>
          <Text style={styles.text4}>https://picsum.photos</Text>
        </View>

        <View animation="fadeInUpBig" delay={600} style={styles.contact}>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL('https://gustavofaria.appspot.com').catch((err) =>
                console.error('An error occurred', err),
              )
            }>
            <View animation="pulse" delay={1500} style={{alignItems: 'center'}}>
              <Text style={styles.textSite}>Click me</Text>
              <Text style={styles.textSite}>and visit my website</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
  },
  textTileH1: {
    color: 'white',
    marginHorizontal: 20,
    paddingBottom: 10,
    fontSize: Dimensions.get('window').height * 0.09,
    paddingTop: Dimensions.get('window').height * 0.09,
  },
  container1: {
    flex: 1,
    backgroundColor: 'white',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    paddingBottom: 40,
    marginBottom: -1,
  },
  container2: {
    margin: 20,
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text2: {
    color: 'black',
    fontSize: Dimensions.get('window').height * 0.04,
  },
  text3: {
    color: 'gray',
    fontSize: Dimensions.get('window').height * 0.03,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    marginTop: 20,
    height: 60,
  },
  textButton: {
    color: 'white',
    fontSize: 28,
  },
  info: {
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 110,
    backgroundColor: 'gray',
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    width: '100%',
  },
  text4: {
    color: 'white',
    fontSize: 18,
  },
  contact: {
    padding: 20,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    width: '100%',
  },
  textSite: {
    fontSize: 20,
    color: 'white',
  },
});
