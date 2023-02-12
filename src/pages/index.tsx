import React, {useMemo} from 'react';
import type { NextPage } from 'next';
import {
  Card,
  NavBar,
  ScrollView,
  SolidButton,
  Text,
  TextInput,
  VStack,
} from '../components';
import { Div, Input } from '../library';
import useSWR from 'swr';
import fetcher from '../../lib/fetcher';

const Home: NextPage = () => {
  const { data, error, isLoading } = useSWR('/api/users', fetcher);

  // const { data: session, status } = useSession();

  const content = useMemo(() => {
    if (!false) {
      return (
        <Card>
          <VStack>
            <TextInput label={'Email'}></TextInput>
            <TextInput label={'Password'}></TextInput>
          </VStack>
        </Card>
      );
    } else {
      return <SolidButton label="Logout"></SolidButton>;
    }
  }, []);

  return (
    <Div>
      <NavBar title={'Hendrikkels'}></NavBar>
      <ScrollView
        padding={'28px'}
        height={'100%'}
        overflow={'auto'}
        width={'100%'}
        display={'flex'}
        justifyContent={'center'}
        justifyItems={'center'}
        alignItems={'center'}
        backgroundColor={'red'}
      >
        {content}
      </ScrollView>
    </Div>
  );
};

export default Home;
