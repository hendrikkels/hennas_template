import React, { useCallback, useMemo, useRef, useState } from 'react';
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
  const { data, error, isLoading } = useSWR('/api/user/all', fetcher);

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

export default Profile;
