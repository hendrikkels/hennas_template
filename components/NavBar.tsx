import React from 'react';
import { DefaultTheme, useTheme } from 'styled-components';
import { HStack, HStackProps, Link, Title, View, ViewProps } from '../library';

export interface NavBarProps extends HStackProps {
  title?: string;
}

export const NavBar: React.FC<NavBarProps> = (props) => {
  const { title, ...rest } = props;
  const theme: DefaultTheme = useTheme();
  console.log('color:', theme.colors.primary);

  return (
    <HStack
      width={'100%'}
      justifyContent={'space-between'}
      alignItems={'center'}
      padding={'20px'}
      paddingX={'28px'}
      backgroundColor={theme.colors.primary}
    >
      <View>
        <Title>{title}</Title>
      </View>
      <HStack spaceItems={'20px'}>
        <Link href={'http://hendrikkels.github.io'} target={'_blank'}>
          Resume
        </Link>
        <Link>Portfolio</Link>
        <Link>Contact</Link>
      </HStack>
    </HStack>
  );
};
