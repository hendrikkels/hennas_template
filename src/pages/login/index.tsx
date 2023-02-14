import React, { useCallback, useMemo, useRef } from 'react';
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
import { useStore } from '@/store';

const validationSchema = Zod.object({
  email: Zod.string({ required_error: 'Email is required' }),
  password: Zod.string({ required_error: 'Password is required' }),
});

const Login: NextPage = () => {
  const router = useRouter();
  const store = useStore();

  const onSubmit = useCallback(
    async (values: { email: string; password: string }, actions: any) => {
      actions.setSubmitting(true);
      try {
        await fetch('http://localhost:3000/api/auth/login', {
          method: 'POST',
          body: JSON.stringify(values),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log('Lekkor!');
            console.log(JSON.stringify(data, null, 2));
            store.setAccessToken(data.accessToken);
            store.setUser(data.user);
            router.replace('/');
          });
      } catch (err) {
        console.log(err);
      } finally {
        actions.setSubmitting(false);
      }
    },
    []
  );

  const content = useMemo(() => {
    if (!false) {
      return (
        <Card title={'Login'}>
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
                <SolidButton
                  animateHover
                  onClick={() => handleSubmit()}
                  width={'100%'}
                  label={'Login'}
                />
                <View position={'absolute'} bottom={0} left={0}>
                  <Text>{JSON.stringify(values)}</Text>
                  <Text>{JSON.stringify(touched)}</Text>
                  <Text>{JSON.stringify(errors)}</Text>
                </View>
              </VStack>
            )}
          </Formik>
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
        <View>{content}</View>
      </ScrollView>
    </Container>
  );
};

export default Login;
