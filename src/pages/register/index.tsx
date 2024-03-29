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
} from '@/components';
import { Formik } from 'formik';
import * as Zod from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { axiosInstance } from '@/axios';

const validationSchema = Zod.object({
  username: Zod.string({ required_error: 'Username is required' }),
  email: Zod.string({ required_error: 'Email is required' }),
  password: Zod.string({ required_error: 'Password is required' }),
});

const Register: NextPage = () => {
  const router = useRouter();

  const [registerError, setRegisterError] = useState('');

  const onSubmit = useCallback(
    async (
      values: { username: string; email: string; password: string },
      actions: any
    ) => {
      actions.setSubmitting(true);
      axiosInstance
        .post(
          'api/auth/register',
          { ...values },
          { headers: { Authorization: false } }
        )
        .then((res) => {
          if (res.data && res.data.user) {
            router.replace('/register/success');
          }
        })
        .catch((err) => {
          console.log(err);
          setRegisterError(err.data);
        })
        .finally(() => {
          actions.setSubmitting(false);
        });
    },
    []
  );

  const registerForm = useMemo(() => {
    return (
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
          <Card
            header={'Register'}
            renderFooter={
              <SolidButton
                type={'submit'}
                animateHover
                onClick={() => handleSubmit()}
                width={'100%'}
                label={'Register'}
              />
            }
            width={'60%'}
            maxWidth={'420px'}
          >
            <VStack width={'100%'}>
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
              {/* <View position={'absolute'} bottom={0} left={0}>
                <Text>{JSON.stringify(values)}</Text>
                <Text>{JSON.stringify(touched)}</Text>
                <Text>{JSON.stringify(errors)}</Text>
              </View> */}
            </VStack>
            <View>
              <Text>{registerError}</Text>
            </View>
          </Card>
        )}
      </Formik>
    );
  }, [registerError]);

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
        {registerForm}
      </ScrollView>
    </Container>
  );
};

export default Register;
