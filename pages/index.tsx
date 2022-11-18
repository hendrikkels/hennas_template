import type { NextPage } from "next";
import { useTheme } from 'styled-components';
import { NavBar } from '../components/NavBar';
import { View } from '../library';

const Home: NextPage = () => {
  return (
    <View height={'100%'} width={'100%'}>
      <NavBar title={'Hendrikkels'}></NavBar>
    </View>
  );
};

export default Home;
