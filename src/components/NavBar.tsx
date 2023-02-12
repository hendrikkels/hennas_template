import React from 'react';
import { DefaultTheme, useTheme } from 'styled-components';
import { HStack } from '.';
import { Heading1, Div, DivProps } from '../library';
import { NavItem } from '.';
import { useRouter } from 'next/router';

export interface NavBarProps extends DivProps {
  title?: string;
}

export const NavBar: React.FC<NavBarProps> = (props) => {
  const { title, ...rest } = props;
  const theme = useTheme();
  const router = useRouter();

  return (
    <Div
      width={'100%'}
      backgroundColor={theme.colors.navbarBackground}
      {...rest}
    >
      <HStack
        width={'100%'}
        justifyContent={'space-between'}
        alignItems={'center'}
        padding={'20px'}
        paddingX={'28px'}
      >
        <Div>
          <Heading1 fontFamily={'JetBrains Mono'} fontSize={'32px'}>
            {title ? title : 'Hendrikkels'}
          </Heading1>
        </Div>
        <HStack space={'20px'}>
          <NavItem
            label={'Home'}
            active={router.pathname == '/'}
            onClick={() => {
              router.push('/');
            }}
          />
          <NavItem
            label={'UI Library'}
            active={router.pathname.includes('/components')}
            onClick={() => {
              router.push('/components');
            }}
          />
          <NavItem
            label={'Resume'}
            href={'http://hendrikkels.github.io'}
            target={'_blank'}
          />
        </HStack>
      </HStack>
    </Div>
  );
};