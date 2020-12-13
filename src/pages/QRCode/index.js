import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, SafeAreaView } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useNavigation } from '@react-navigation/native';

import imgLogo from '../../assets/logo.png';

export default function QRCode() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    navigation.navigate('Product');
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#153051' }}>
      <View
        style={{
          padding: 50,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#153051',
        }}>
        <Image source={imgLogo} />
      </View>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={[styles.container]}>
        <View>
          <View style={styles.focused} />
        </View>
      </BarCodeScanner>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#153051',
    marginHorizontal: 40,
    marginVertical: 50,
  },
});
