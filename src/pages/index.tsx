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

const Home: NextPage = () => {
  const router = useRouter();
  const store = useStore();
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    if (store.accessToken !== null) {
      setAuth(true);
    } else {
      setAuth(false);
    }
  }, [store.accessToken]);

  function logOut() {
    fetch('/api/auth/logout', {
      method: 'POST',
      credentials: 'include',
    }).then(() => {
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
        {auth ? (
          <Card width={'28%'}>
            <VStack width={'100%'} space={86}>
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
