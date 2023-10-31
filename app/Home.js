import {View, Text} from 'react-native';
import React from 'react';
import {Button, Headline} from 'react-native-paper';
import {useNavigation, useRoute} from '@react-navigation/native';
import style from './style';

const Home = () => {
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <View>
      <Headline>All Wings</Headline>

      <View style={style.card}>
        <Button onPress={() => navigation.navigate('about', "Ahmedabad")}>
          6 Ahmedabad
        </Button>
      </View>
      <View style={style.card}>
        <Button onPress={() => navigation.navigate('about')}>2 Mehsana</Button>
      </View>
      <View style={style.card}>
        <Button onPress={() => navigation.navigate('about')}>2 Mumbai</Button>
      </View>
      <View style={style.card}>
        <Button onPress={() => navigation.navigate('about')}>6 Surat</Button>
      </View>
      <View style={style.card}>
        <Button onPress={() => navigation.navigate('about')}>1 Vadodara</Button>
      </View>
    </View>
  );
};

export default Home;
