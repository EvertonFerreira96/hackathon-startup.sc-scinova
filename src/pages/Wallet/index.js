import React, { useState } from 'react';
import { Ionicons, Feather  } from '@expo/vector-icons';
import { Switch } from 'react-native';

import { realizarPagamentos, extratoAmeDigital } from  '../../assets/Constants/index'

import {
  Wrapper,
  Header,
  HeaderContainer,
  Title,
  BalanceContainer,
  Value,
  Bold,
  UseBalance,
  UseBalanceTitle,
  PaymentMethods,
  PaymentMethodsTitle,
  PaymentList,
  PaymentItem,
  PaymentHeader,
  PaymentImage,
  PaymentTitle,
  PaymentDescription,
  EyeButton,
  ExtractList,
  ExtractHeader,
  ExtractTitle,
  ExtractDate,
  ExtractValue,
  ExtractItem

} from './styles';

export default function Wallet() {

  const [isVisible, setIsVisible] = useState(true);
  const [useBalance, setUseBalance] = useState(true);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);


  function handleToggleVisibility() {
    setIsVisible((prevState) => !prevState);
  }

  function handleToggleUseBalance() {
    setUseBalance((prevState) => !prevState);
  }
  
  return (
    <Wrapper>
      <Header

        colors={
          useBalance
            ? ['#E8005A', '#160085']
            : ['#D3D3D3', '#868686']
        }
        start={[0,0.3]}
      >
        <HeaderContainer>
        

          <BalanceContainer>
          <Title>Saldo Ame Digital de 
</Title>
            <Value>
              R$ <Bold>{isVisible ? '1234,34' : '----'}</Bold>
            </Value>
            <EyeButton onPress={handleToggleVisibility}>
              <Feather name={isVisible ? 'eye' : 'eye-off'} size={28} color="#fff" />
            </EyeButton>
          </BalanceContainer>
        </HeaderContainer>
      </Header>

      <UseBalance>
        <UseBalanceTitle>
          Utilizar saldo nos pagamentos
        </UseBalanceTitle>

        <Switch
          value={useBalance} 
          trackColor={{true: '#160085', false: '#D3D3D3'}}
          thumbColor={useBalance ? "#FAFAFA" : "#CCC"}
          onValueChange={handleToggleUseBalance}

        />
      </UseBalance>

    <PaymentMethods>
      <PaymentMethodsTitle>
        Extrato 
      </PaymentMethodsTitle>
      <ExtractList
        data={extratoAmeDigital}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => (
        <ExtractItem key={item.id}>
          <item.lib name={item.icon} size={20} /> 
          <ExtractHeader>
            <ExtractTitle>{item.title}</ExtractTitle>
            <ExtractDate>{item.data}</ExtractDate>
          </ExtractHeader>
          <ExtractValue color={item.color}>{Intl.NumberFormat('pt-BR'
                                        ,{ style: 'currency'
                                        , currency: 'BRL'})
                                        .format(item.value)}</ExtractValue>
        </ExtractItem>
        )}
      />

      </PaymentMethods>

      <PaymentMethods>
        <PaymentMethodsTitle>
          Atividades e Pagamentos
        </PaymentMethodsTitle>

        <PaymentList
          data={realizarPagamentos}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => (
          <PaymentItem key={item.id}>
            <item.lib name={item.icon} size={20} /> 
            <PaymentHeader>
              <PaymentTitle>{item.title}</PaymentTitle>
              <PaymentDescription>{item.description}</PaymentDescription>
            </PaymentHeader>
            <Ionicons name="ios-arrow-forward" size={15}/>   
          </PaymentItem>
          )}
        />
        

      </PaymentMethods>
    </Wrapper>
  );
}