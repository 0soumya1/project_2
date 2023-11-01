import {View, Text} from 'react-native';
import React from 'react';
import {Button, Headline} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import style from './style';

const Home = () => {
  const navigation = useNavigation();
  
  return (
    <View>
      <Headline>All Wings</Headline>

      <View style={style.card}>
        <Button onPress={() => navigation.navigate('about', "Ahmedabad")}>
          6 Ahmedabad
        </Button>
      </View>
      <View style={style.card}>
        <Button onPress={() => navigation.navigate('about', "Mehsana")}>2 Mehsana</Button>
      </View>
      <View style={style.card}>
        <Button onPress={() => navigation.navigate('about', "Mumbai")}>2 Mumbai</Button>
      </View>
      <View style={style.card}>
        <Button onPress={() => navigation.navigate('about', "Surat")}>6 Surat</Button>
      </View>
      <View style={style.card}>
        <Button onPress={() => navigation.navigate('about', "Vadodara")}>1 Vadodara</Button>
      </View>
    </View>
  );
};

export default Home;
