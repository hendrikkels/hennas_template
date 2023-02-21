import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import {
  Card,
  Container,
  NavBar,
  ScrollView,
  SolidButton,
  VStack,
  Text,
  View,
} from '../components';
import { useRouter } from 'next/router';
import { useStore } from '@/store';
import { useTheme } from 'styled-components';
import axiosInstance from '../../lib/axios';

const Home: NextPage = () => {
  const router = useRouter();
  const store = useStore();
  const theme = useTheme();
  const [authed, setAuthed] = useState(false);

  useEffect(() => {
    if (store.accessToken !== null) {
      setAuthed(true);
    } else {
      setAuthed(false);
    }
  }, [store.accessToken]);

  function logOut() {
    axiosInstance
      .post('api/auth/logout')
      .then((res) => {})
      .catch((err) => {
        console.log(err.message);
      })
      .finally(() => {
        store.setAccessToken(null);
        store.setUser(null);
      });
  }

  return (
    <Container>
      <NavBar></NavBar>
      <ScrollView
        height={'100%'}
        width={'100%'}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        {authed ? (
          <Card width={'28%'}>
            <VStack width={'100%'} space={86}>
              <SolidButton
                width={'100%'}
                backgroundColor={theme.colors.green}
                label={'Profile'}
                onClick={() => router.push(`profile/${store.user.id}`)}
              ></SolidButton>
              <SolidButton
                width={'100%'}
                label={'Logout'}
                onClick={() => logOut()}
              ></SolidButton>
            </VStack>
          </Card>
        ) : (
          <Card width={'28%'}>
            <VStack width={'100%'} space={86}>
              <SolidButton
                width={'100%'}
                label={'Login'}
                onClick={() => router.push('/login')}
              ></SolidButton>
              <SolidButton
                width={'100%'}
                label={'Register'}
                onClick={() => router.push('/register')}
              ></SolidButton>
            </VStack>
          </Card>
        )}
        <View position={'absolute'} bottom={0} left={0}>
          <Text>{JSON.stringify(store.accessToken)}</Text>
        </View>
      </ScrollView>
    </Container>
  );
};

export default Home;
