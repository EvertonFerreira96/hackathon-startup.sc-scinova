import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { TouchableOpacity, Image, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Container, Header } from './styles';

import imgLogo from '../../assets/logo.png';

export default function Home() {
  const navigation = useNavigation();
  return (
    <Container>
      <Header>
        <View style={{ padding: 50 }}>
          <Image source={imgLogo} />
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: '#FFF',
            padding: 15,
            marginTop: 120,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 15,
            width: '95%',
          }}
          onPress={() => {
            navigation.navigate('QRCode');
          }}>
          <Text style={{ fontSize: 16 }}>OBTER INFORMAÇÕESDO QRCODE</Text>
          <MaterialCommunityIcons
            style={{ padding: 15 }}
            name="qrcode-scan"
            size={24}
            color="#153051"
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: '#FFF',
            padding: 30,
            marginTop: 50,
            justifyContent: 'center',
            borderRadius: 15,
            alignItems: 'center',
            width: '95%',
          }}
          onPress={() => {}}>
          <Text tyle={{ fontSize: 16 }}>FAZER LOGIN</Text>
        </TouchableOpacity>
      </Header>
    </Container>
  );
}

/*
 <Sugestions/>
  <Tips />
  <Products />
*/
