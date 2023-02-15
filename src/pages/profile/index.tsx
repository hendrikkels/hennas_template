import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
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
} from '../../components';
import { Formik } from 'formik';
import * as Zod from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import useSWR from 'swr';
import fetcher from '../../utils/fetcher';
import { useStore } from '@/store';

const Profile: NextPage = () => {
  const router = useRouter();
  const store = useStore();

  // GET ID from url, use later for viewing other user's profiles
  // const { userId } = router.query;

  // Fetch user and their profile
  const { data, error, isLoading, mutate } = useSWR(
    `/api/user-profile/${store.user.id}`,
    fetcher
  );

  useEffect(() => {
    console.log('inUseEffect');
    console.log(data);
    console.log(data?.profile);
    if (data && !data.profile) {
      try {
        fetch(`/api/user-profile/${store.user.id}/create`, {
          method: 'POST',
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(JSON.stringify(data, null, 2));
            if (data && data.user) {
              mutate();
              console.log('Successfully created profile');
            } else if (data && data.error) {
              console.log(data.error);
            }
          });
      } catch (err) {
        // your error handling here
        console.log(err);
      }
    }
  }, [data]);

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
        <Text>{JSON.stringify(data, null, 2)}</Text>
      </ScrollView>
    </Container>
  );
};

export default Profile;
