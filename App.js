/* eslint-disable react-native/no-inline-styles */
import React, {useRef} from 'react';
import {View, Animated, Button} from 'react-native';

const App: () => React$Node = () => {
  const animation = useRef(new Animated.Value(0)).current;

  const left = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 30],
  });

  const onClick = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };
  const onClickReset = () => {
    Animated.timing(animation, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View flex={1}>
      <Animated.View
        style={{
          backgroundColor: 'red',
          width: 100,
          height: 100,
          transform: [{translateX: left}],
          margin: 20,
        }}
      />
      <Button style={{margin: 10}} onPress={onClick} title={'to move'} />
      <Button style={{marginUp: 10}} onPress={onClickReset} title={'reset'} />
    </View>
  );
};

export default App;
