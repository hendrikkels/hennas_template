import React, { useEffect, useMemo, useState } from 'react';
import { useTheme } from 'styled-components';
import { Card, HStack, NavItem, SolidButton, Text } from '.';
import { Heading1, Div, DivProps, Anchor, Paragraph } from './elements';
// import { NavItem } from '.';
import { useRouter } from 'next/router';
import { useStore } from '@/store';
import ReactDropdown from 'react-dropdown';
import { axiosInstance } from '@/axios';

export interface NavBarProps extends DivProps {
  title?: string;
}

export const NavBar: React.FC<NavBarProps> = (props) => {
  const { title, ...rest } = props;
  const theme = useTheme();
  const router = useRouter();
  const store = useStore();

  const [showPopup, setShowPopup] = useState(false);
  const [authed, setAuthed] = useState(false);

  useEffect(() => {
    if (store.accessToken !== null) {
      setAuthed(true);
    } else {
      setAuthed(false);
    }
  }, [store]);

  function logOut() {
    axiosInstance
      .post('api/auth/logout')
      .then((res) => {})
      .catch((err) => {
        console.log(err.message);
      })
      .finally(() => {
        store.setAccessToken(null);
        store.setUser(null);
        router.push('/');
      });
  }

  const renderNavItems = useMemo(() => {
    if (store)
      return (
        <HStack space={'20px'} justifyContent={'center'} alignItems={'center'}>
          <NavItem
            label={'Home'}
            active={router.pathname == '/'}
            onClick={() => {
              router.push('/');
            }}
          />
          <NavItem
            label={'Resume'}
            href={'http://hendrikkels.github.io'}
            target={'_blank'}
          />
          {authed ? (
            <>
              <NavItem
                label={'Profile'}
                active={router.pathname.includes(`/profile`)}
                onClick={() => {
                  router.push(`/profile/${store.user.id}`);
                }}
              />
              <SolidButton
                height={'40px'}
                label={'Logout'}
                onClick={() => {
                  logOut();
                }}
              />
            </>
          ) : (
            <>
              <SolidButton
                height={'40px'}
                label={'Login'}
                onClick={() => {
                  router.push('/login');
                }}
              />
              <SolidButton
                backgroundColor={theme.colors.secondary}
                height={'40px'}
                label={'Register'}
                onClick={() => {
                  router.push('/register');
                }}
              />
            </>
          )}
        </HStack>
      );
  }, [authed, store]);

  return (
    <Div
      width={'100%'}
      height={theme.navbarHeight}
      flexShrink={0}
      backgroundColor={theme.colors.navbarBackground}
      {...rest}
    >
      <HStack
        paddingX={theme.navbarPaddingX}
        overflowX={'auto'}
        space={'20px'}
        width={'100%'}
        height={'100%'}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <Div>
          <Text
            fontFamily={'JetBrains Mono'}
            fontWeight={600}
            fontSize={'32px'}
          >
            {title ? title : 'hennas_template'}
          </Text>
        </Div>
        {renderNavItems}
      </HStack>
    </Div>
  );
};
