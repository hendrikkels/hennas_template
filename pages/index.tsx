import type { NextPage } from 'next';
import { NavBar, ScrollView, Text } from '../components';
import { Div } from '../library';
import useSWR from 'swr';
import fetcher from '../lib/fetcher';

const Home: NextPage = () => {
  const { data, error, isLoading } = useSWR('/api/users', fetcher);

  return (
    <Div width={'100%'}>
      <NavBar title={'Hendrikkels'}></NavBar>
      <ScrollView padding={'28px'}>
        <Text>{JSON.stringify(data)}</Text>
      </ScrollView>
    </Div>
  );
};

export default Home;
