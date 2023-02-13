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
  View,
  Text,
} from '../components';
import { Formik } from 'formik';
import * as Yup from 'yup';
import useSWR from 'swr';
import fetcher from '../../lib/fetcher';

const Home: NextPage = () => {
  const { data, error, isLoading } = useSWR('/api/users', fetcher);

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
        <Text>{JSON.stringify(data)}</Text>
      </ScrollView>
    </Container>
  );
};

export default Home;
