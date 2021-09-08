import React, {useEffect} from 'react';
import Background from '../../components/atom/Background/Background';
import Logo from '../../components/atom/Background/Logo';
import Header from '../../components/atom/Background/Header';
import Button from '../../components/atom/Background/Button';
import Paragraph from '../../components/atom/Background/Paragraph';

export default function Splash({navigation}) {
  console.log(navigation);
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('onBoarding');
    }, 3000);
  });
  return (
    <Background>
      <Logo />
      <Header>HotelApp</Header>
      <Paragraph>
        The easiest way to find Hotel, Indonesia Number one Hotel Application.
      </Paragraph>
    </Background>
  );
}
