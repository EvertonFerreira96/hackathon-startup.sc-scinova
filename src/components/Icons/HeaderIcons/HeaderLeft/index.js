import React from 'react';
import { TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { Container, Header } from './styles';

export default function HeaderIcons() {
  const navigation = useNavigation();

  return (
    <Container>
      <Header>
        <TouchableOpacity onPress={() => navigation.navigate('QRCode')}>
          <MaterialCommunityIcons name="qrcode-scan" size={24} color="#153051" />
        </TouchableOpacity>
      </Header>
    </Container>
  );
}
