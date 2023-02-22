import React, { useCallback, useMemo, useRef, useState } from 'react';
import type { NextApiResponse, NextPage } from 'next';
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
  DepthButton,
} from '../../components';
import { Formik } from 'formik';
import * as Zod from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { useStore } from '@/store';
// import axiosInstance from '../../../lib/axios';
import { AxiosError } from 'axios';
import { axiosInstance } from '@/axios';

const validationSchema = Zod.object({
  email: Zod.string({ required_error: 'Email is required' }),
  password: Zod.string({ required_error: 'Password is required' }),
});

const Login: NextPage = () => {
  const router = useRouter();
  const store = useStore();

  const [loginError, setLoginError] = useState('');

  const onSubmit = useCallback(
    async (values: { email: string; password: string }, actions: any) => {
      actions.setSubmitting(true);

      axiosInstance
        .post('api/auth/login', values)
        .then((res) => {
          if (res.data && res.data.accessToken && res.data.user) {
            store.setAccessToken(res.data.accessToken);
            store.setUser(res.data.user);
            router.replace('/');
          }
        })
        .catch((err) => {
          console.log(err.message);
          setLoginError(err.response.data);
        })
        .finally(() => {
          actions.setSubmitting(false);
        });
    },
    []
  );

  const loginForm = useMemo(() => {
    return (
      <Card header={'Login'}>
        <Formik
          validationSchema={toFormikValidationSchema(validationSchema)}
          onSubmit={onSubmit}
          initialValues={{
            email: 'hendrikkels@icloud.com',
            password: '123456',
          }}
          enableReinitialize
        >
          {({
            handleSubmit,
            isSubmitting,
            errors,
            touched,
            values,
            setFieldValue,
            setFieldTouched,
          }) => (
            <VStack>
              <TextInput
                name={'email'}
                value={values.email}
                handleValueChange={(val) => {
                  setFieldValue('email', val);
                  setFieldTouched('email');
                }}
                error={touched.email ? errors.email : ''}
                label={'Email'}
              ></TextInput>
              <TextInput
                name={'password'}
                type={'password'}
                value={values.password}
                handleValueChange={(val) => {
                  setFieldValue('password', val);
                  setFieldTouched('password');
                }}
                error={touched.password ? errors.password : ''}
                label={'Password'}
              ></TextInput>
              <DepthButton
                animateHover
                onClick={() => handleSubmit()}
                width={'100%'}
                label={'Login'}
              />
              {/* <View position={'absolute'} bottom={0} left={0}>
                <Text>{JSON.stringify(values)}</Text>
                <Text>{JSON.stringify(touched)}</Text>
                <Text>{JSON.stringify(errors)}</Text>
              </View> */}
            </VStack>
          )}
        </Formik>
        {loginError && (
          <View>
            <Text>{loginError}</Text>
          </View>
        )}
      </Card>
    );
  }, [loginError]);

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
        <View>{loginForm}</View>
      </ScrollView>
    </Container>
  );
};

export default Login;
