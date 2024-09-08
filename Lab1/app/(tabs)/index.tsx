import React, { useState, useEffect } from 'react';
import { View, Button, Image, TextInput, StatusBar, KeyboardAvoidingView, Dimensions, Platform, useWindowDimensions, Text } from 'react-native';

const App = () => {
  const { width, height } = useWindowDimensions();
  const [isPortrait, setIsPortrait] = useState(height > width);
  const buttonWidth = width / 2;
  const imageWidth = width * 0.8;
  const paddingValue = Platform.select({ ios: 20, android: 10 });

  useEffect(() => {
    const updateLayout = () => {
      setIsPortrait(height > width);
    };

    const subscription = Dimensions.addEventListener('change', updateLayout);
    return () => subscription?.remove();
  }, [height, width]);

  return (
    <KeyboardAvoidingView style={{ flex: 1, padding: paddingValue, backgroundColor: '#f5f5dc' }} behavior="padding">
      <StatusBar barStyle={isPortrait ? 'dark-content' : 'light-content'} />
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 24, marginBottom: 20 }}>2124801030108_LêHữuLộc</Text>
        <View style={{ flexDirection: isPortrait ? 'column' : 'row', justifyContent: 'center' }}>
          <View style={{ width: buttonWidth, margin: 5 }}>
            <Button title="Click 1" onPress={() => {}} color="green" />
          </View>
          <View style={{ width: buttonWidth, margin: 5 }}>
            <Button title="Click 2" onPress={() => {}} color="green" />
          </View>
        </View>
        <TextInput placeholder="Type here..." style={{ borderWidth: 1, margin: 10, width: '80%' }} />
      </View>
    </KeyboardAvoidingView>
  );
};
export default App;