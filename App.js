/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useRef} from 'react';
import {
  SafeAreaView,
  Image,
  useWindowDimensions,
  StatusBar,
  Text,
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  PanResponder,
  Animated,
} from 'react-native';

const images = [
  {
    id: 1,
    uri: require('./assets/images/1.jpeg'),
  },
  {
    id: 2,
    uri: require('./assets/images/2.jpeg'),
  },
  {
    id: 3,
    uri: require('./assets/images/3.jpeg'),
  },
  {
    id: 4,
    uri: require('./assets/images/4.jpeg'),
  },
  {
    id: 5,
    uri: require('./assets/images/5.jpeg'),
  },
  {
    id: 6,
    uri: require('./assets/images/6.jpeg'),
  },
];

const App = () => {
  const {width, height} = useWindowDimensions();
  const [activeIndex, setActiveIndex] = React.useState(images[1].id);
  const pan = useRef(new Animated.ValueXY()).current;

  return (
    <SafeAreaView>
      <StatusBar translucent backgroundColor="transparent" animated />
      <Image
        source={images.find(image => image.id === activeIndex).uri}
        style={[
          {
            width,
            height,
          },
        ]}
        resizeMode="cover"
      />
      <Animated.View
        style={[
          styles.bottomView,
          {
            transform: [{translateX: pan.x}, {translateY: pan.y}],
          },
        ]}>
        <View
          style={{
            backgroundColor: 'white',
            width: 50,
            height: 6,
            borderRadius: 6,
            alignSelf: 'center',
            marginBottom: 20,
          }}
        />
        <View>
          <Text
            style={{
              fontSize: 36,
              fontWeight: 'bold',
              color: 'white',
            }}>
            Aurora
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: 'white',
            }}>
            Aurora Aksnes, known mononymously as Aurora, is a Norwegian singer,
            songwriter, dancer and record producer. Born in Stavanger and raised
            in the towns of Høle and Os, she began writing her first songs and
            learning dance at the age of six.
          </Text>
        </View>
        <FlatList
          data={images}
          horizontal
          contentContainerStyle={{
            paddingTop: 10,
          }}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => {
            return (
              <TouchableOpacity onPress={() => setActiveIndex(item.id)}>
                <Image
                  source={item.uri}
                  resizeMode="cover"
                  style={{
                    borderRadius: 8,
                    width: 150,
                    height: 200,
                    marginHorizontal: 5,
                  }}
                />
              </TouchableOpacity>
            );
          }}
        />
      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bottomView: {
    position: 'absolute',
    bottom: 0,
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginHorizontal: 5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: 'rgba(0,0,0,0.8)',
  },
});

export default App;
