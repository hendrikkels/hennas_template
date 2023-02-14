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
} from '../components';
import useSWR from 'swr';
import fetcher from '../utils/fetcher';
import { useRouter } from 'next/router';
import { useStore } from '@/store';

const Home: NextPage = () => {
  const { data, error, isLoading } = useSWR('/api/users', fetcher);
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

  return (
    <Container>
      <NavBar></NavBar>
      <ScrollView
        padding={'28px'}
        height={'100%'}
        overflow={'auto'}
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
                // onClick={() => router.push('/login')}
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
        <Text>{JSON.stringify(data)}</Text>
        <Text>{JSON.stringify(store.accessToken)}</Text>
      </ScrollView>
    </Container>
  );
};

export default Home;
