import React, {useMemo} from 'react';
import type { NextPage } from 'next';
import {
  Card,
  Container,
  NavBar,
  ScrollView,
  SolidButton,
  TextInput,
  VStack,
} from '../components';
import useSWR from 'swr';
import fetcher from '../../lib/fetcher';

const Home: NextPage = () => {
  const { data, error, isLoading } = useSWR('/api/users', fetcher);

  const content = useMemo(() => {
    if (!false) {
      return (
        <Card title={'Register'}>
          <VStack>
            <TextInput label={'Email'}></TextInput>
            <TextInput label={'Username'}></TextInput>
            <TextInput label={'Password'}></TextInput>
          </VStack>
          <SolidButton animateHover width={'100%'} label={'Register'} />
        </Card>
      );
    } else {
      return <SolidButton label="Logout"></SolidButton>;
    }
  }, []);

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
        {content}
      </ScrollView>
    </Container>
  );
};

export default Home;
