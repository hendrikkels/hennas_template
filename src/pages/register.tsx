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
} from '../components';
import { Formik } from 'formik';
import * as Zod from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import useSWR from 'swr';
import fetcher from '../utils/fetcher';

const validationSchema = Zod.object({
  username: Zod.string({ required_error: 'Username is required' }),
  email: Zod.string({ required_error: 'Email is required' }),
  password: Zod.string({ required_error: 'Password is required' }),
});

const Register: NextPage = () => {
  const router = useRouter();
  const { data, error, isLoading } = useSWR('/api/users', fetcher);

  const onSubmit = useCallback(
    async (
      values: { username: string; email: string; password: string },
      actions: any
    ) => {
      actions.setSubmitting(true);
      try {
        fetch('http://localhost:3000/api/auth/register', {
          method: 'POST',
          body: JSON.stringify(values),
        }).then((res) => {
          console.log('Lekkor!');
          console.log(JSON.stringify(res.json, null, 2));
          if (res.status == 200) {
            router.replace('/');
          }
          //TODO: Error handling!
        });
      } catch (err) {
        // your error handling here
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
        <Card title={'Register'}>
          <Formik
            validationSchema={toFormikValidationSchema(validationSchema)}
            onSubmit={onSubmit}
            initialValues={{
              username: '',
              email: '',
              password: '',
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
                  name={'username'}
                  value={values.username}
                  handleValueChange={(val) => {
                    setFieldValue('username', val);
                    setFieldTouched('username');
                  }}
                  error={touched.username ? errors.username : ''}
                  label={'Username'}
                ></TextInput>
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
                  label={'Register'}
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
        <Text>{JSON.stringify(data)}</Text>
      </ScrollView>
    </Container>
  );
};

export default Register;
