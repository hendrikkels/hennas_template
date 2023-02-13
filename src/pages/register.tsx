import React, { useCallback, useMemo, useRef } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Prisma } from '@prisma/client';
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

const validationSchema = Yup.object().shape({
  username: Yup.string().required('This is a required field'),
  email: Yup.string().email().required('This is a required field'),
  password: Yup.string().required('This is a required field'),
});

const Home: NextPage = () => {
  const router = useRouter();
  const { data, error, isLoading } = useSWR('/api/users', fetcher);

  const onSubmit = useCallback(
    async (values: Prisma.userCreateInput, actions: any) => {
      actions.setSubmitting(true);
      try {
        // your login request here
        console.log(values);
        const res = await fetch('http://localhost:3000/api/auth/register', {
          method: 'POST',
          body: JSON.stringify(values),
        });
        if (res.status == 200) {
          router.replace('/');
        }
        console.log(res);
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
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            initialValues={{
              username: 'hoendrik',
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

export default Home;
