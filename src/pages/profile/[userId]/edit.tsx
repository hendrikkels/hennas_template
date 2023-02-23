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
  HStack,
  TextAreaInput,
} from '@/components';
import { Formik } from 'formik';
import * as Zod from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import useSWR from 'swr';
import fetcher from '@/utils/fetcher';
import { useStore } from '@/store';
import { useTheme } from 'styled-components';
import { axiosInstance } from '@/axios';

const validationSchema = Zod.object({
  name: Zod.string({}),
  surname: Zod.string({}),
  bio: Zod.string({}),
});

const EditProfile: NextPage = () => {
  const router = useRouter();
  const theme = useTheme();
  // GET ID from url, use later for viewing other user's profiles
  const userId = Number(router.query.userId);
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

  const [registerError, setRegisterError] = useState('');

  const onSubmit = useCallback(
    async (
      values: { name: string; surname: string; bio: string },
      actions: any
    ) => {
      actions.setSubmitting(true);
      axiosInstance
        .post(`/api/user-profile/${userId}/update`, {
          id: data.profile.id,
          name: values.name,
          surname: values.surname,
          bio: values.bio,
        })
        .then((res) => {
          if (res.data && res.data.profile) {
            router.replace(`/profile/${userId}`);
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
    [userId, data, error, isLoading]
  );

  const card = useMemo(() => {
    if (error) return <Card>failed to load</Card>;
    if (isLoading) return <Card>loading...</Card>;
    if (data && data.profile) {
      return (
        <Formik
          validationSchema={toFormikValidationSchema(validationSchema)}
          onSubmit={onSubmit}
          initialValues={{
            name: data.profile.name,
            surname: data.profile.surname,
            bio: data.profile.bio,
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
              header={'Edit'}
              renderFooter={
                store.user.id == userId && (
                  <SolidButton
                    onClick={() => handleSubmit()}
                    backgroundColor={theme.colors.blue}
                    type={'submit'}
                    label={'Save'}
                  />
                )
              }
            >
              <VStack width={'100%'}>
                <HStack width={'100%'} space={28}>
                  <TextInput
                    name={'name'}
                    label={'Name'}
                    value={values.name}
                    handleValueChange={(val) => {
                      setFieldValue('name', val);
                      setFieldTouched('name');
                    }}
                    error={touched.name ? errors.name : ''}
                  ></TextInput>
                  <TextInput
                    name={'surname'}
                    label={'Surname'}
                    value={values.surname}
                    handleValueChange={(val) => {
                      setFieldValue('surname', val);
                      setFieldTouched('surname');
                    }}
                    error={touched.surname ? errors.surname : ''}
                  ></TextInput>
                </HStack>

                <TextAreaInput
                  rows={20}
                  name={'bio'}
                  label={'Biography'}
                  value={values.bio}
                  handleValueChange={(val) => {
                    setFieldValue('bio', val);
                    setFieldTouched('bio');
                  }}
                  error={touched.bio ? errors.bio : ''}
                  height={'200px'}
                ></TextAreaInput>
              </VStack>
            </Card>
          )}
        </Formik>
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
  } else return <View></View>;
};

export default EditProfile;
function useSWRMutation(
  arg0: string,
  updateUser: (url: string, { args }: any) => Promise<void>,
  arg2: any
): { trigger: any } {
  throw new Error('Function not implemented.');
}
