import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { RNCamera } from 'react-native-camera';

const CamScreen = () => {
  const [isCameraOn, setIsCameraOn] = useState(false);

  const toggleCamera = () => {
    setIsCameraOn(!isCameraOn);
  };

  return (
    <View style={styles.container}>
      {isCameraOn ? (
        <RNCamera
          style={styles.camera}
          type={RNCamera.Constants.Type.back} // Use 'front' for the front camera
          autoFocus={RNCamera.Constants.AutoFocus.on}
        />
      ) : (
        <Text>Camera is off</Text>
      )}

      <TouchableOpacity onPress={toggleCamera} style={styles.button}>
        <Text style={styles.buttonText}>
          {isCameraOn ? 'Turn Off Camera' : 'Turn On Camera'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  camera: {
    flex: 1,
    width: '100%',
  },
  button: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default CamScreen;
