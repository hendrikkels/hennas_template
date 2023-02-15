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

const RegisterSuccess: NextPage = () => {
  const router = useRouter();
  const { data, error, isLoading } = useSWR('/api/users', fetcher);

  const [registerError, setRegisterError] = useState('');

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
        <Card title={'Success!'}>
          <View>
            <Text>
              Your account has been created, please login to your account
            </Text>
          </View>
        </Card>
      </ScrollView>
    </Container>
  );
};

export default RegisterSuccess;
