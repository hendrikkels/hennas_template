import React from 'react';
import { DefaultTheme, useTheme } from 'styled-components';
import { H2, HStack, HStackProps, Title, View } from '../library';
import { Clickable } from '../library/Clickable';

export interface NavBarProps extends HStackProps {
  title?: string;
}

export const NavBar: React.FC<NavBarProps> = (props) => {
  const { title, ...rest } = props;
  const theme = useTheme();
  console.log('navbar reloaded with: ', theme.colors.navbarBackground);

  return (
    <View backgroundColor={theme.colors.navbarBackground} {...rest}>
      <HStack
        width={'100%'}
        justifyContent={'space-between'}
        alignItems={'center'}
        padding={'20px'}
        paddingX={'28px'}
      >
        <View>
          <Title fontFamily={'JetBrains Mono'} fontSize={'32px'}>
            {title}
          </Title>
        </View>
        <HStack spaceItems={'20px'}>
          <Clickable href={'http://hendrikkels.github.io'} target={'_blank'}>
            <H2>Resume</H2>
          </Clickable>
          <Clickable
            onClick={() => {
              console.log('clicked portfolio');
            }}
          >
            <H2>Portfolio</H2>
          </Clickable>
          <Clickable
            onClick={() => {
              console.log('clicked contact');
            }}
          >
            <H2>Contact</H2>
          </Clickable>
        </HStack>
      </HStack>
    </View>
  );
};
