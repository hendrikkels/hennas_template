import React, { useEffect, useMemo, useState } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
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
} from '@/components';
import useSWR from 'swr';
import fetcher from '@/utils/fetcher';
import { useStore } from '@/store';
import { useTheme } from 'styled-components';

const Profile: NextPage = () => {
  const router = useRouter();
  const theme = useTheme();
  const { userId } = router.query;
  const store = useStore();

  const [authed, setAuthed] = useState(false);

  useEffect(() => {
    if (store.accessToken !== null) {
      setAuthed(true);
    } else {
      setAuthed(false);
    }
  }, [store.accessToken]);

  // Fetch user and their profile
  const { data, error, isLoading } = useSWR(
    userId ? `/api/user-profile/${userId}` : '',
    fetcher
  );

  const card = useMemo(() => {
    if (error) return <Card>failed to load</Card>;
    if (isLoading) return <Card>loading...</Card>;
    if (data && data.profile) {
      return (
        <Card
          header={`${data?.profile?.name} ${data?.profile?.surname}`}
          renderFooter={
            store.user.id == userId && (
              <SolidButton
                backgroundColor={theme.colors.green}
                onClick={() => router.push(`/profile/${userId}/edit`)}
                label={'Edit'}
              ></SolidButton>
            )
          }
        >
          {data.profile.bio && (
            <VStack>
              <Text>Biography:</Text>
              <Text>{data.profile.bio}</Text>
            </VStack>
          )}
        </Card>
      );
    }
  }, [userId, data, error, isLoading]);

  if (authed) {
    return (
      <Container>
        <NavBar />
        <ScrollView
          padding={'28px'}
          height={'100%'}
          overflow={'auto'}
          width={'100%'}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          {data && card}
        </ScrollView>
      </Container>
    );
  } else
    return (
      <Container>
        <NavBar />
        <ScrollView
          padding={'28px'}
          height={'100%'}
          overflow={'auto'}
          width={'100%'}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Text marginBottom={'20px'}>
            You are not logged in, please login to view this page.
          </Text>
          <SolidButton
            onClick={() => router.push('/login')}
            label={'Login'}
          ></SolidButton>
        </ScrollView>
      </Container>
    );
};

export default Profile;
