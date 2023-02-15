import React from 'react';
import { DefaultTheme, useTheme } from 'styled-components';
import { HStack } from '.';
import { Heading1, Div, DivProps } from '../elements';
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
      height={theme.navbarHeight}
      flexShrink={0}
      backgroundColor={theme.colors.navbarBackground}
      {...rest}
    >
      <HStack
        width={'100%'}
        height={'100%'}
        justifyContent={'space-between'}
        alignItems={'center'}
        paddingX={theme.navbarPaddingX}
      >
        <Div>
          <Heading1 fontFamily={'JetBrains Mono'} fontSize={'32px'}>
            {title ? title : theme.navbarHeight}
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
