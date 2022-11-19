import React from 'react';
import { DefaultTheme, useTheme } from 'styled-components';
import {
  Heading2,
  HStack,
  HStackProps,
  Heading1,
  Div,
  Anchor,
} from '../library';

export interface NavBarProps extends HStackProps {
  title?: string;
}

export const NavBar: React.FC<NavBarProps> = (props) => {
  const { title, ...rest } = props;
  const theme = useTheme();

  return (
    <Div backgroundColor={theme.colors.navbarBackground} {...rest}>
      <HStack
        width={'100%'}
        justifyContent={'space-between'}
        alignItems={'center'}
        padding={'20px'}
        paddingX={'28px'}
      >
        <Div>
          <Heading1 fontFamily={'JetBrains Mono'} fontSize={'32px'}>
            {title}
          </Heading1>
        </Div>
        <HStack spaceItems={'20px'}>
          <Anchor href={'http://hendrikkels.github.io'} target={'_blank'}>
            <Heading2>Resume</Heading2>
          </Anchor>
          <Anchor
            onClick={() => {
              console.log('clicked portfolio');
            }}
          >
            <Heading2>Portfolio</Heading2>
          </Anchor>
          <Anchor
            onClick={() => {
              console.log('clicked contact');
            }}
          >
            <Heading2>Contact</Heading2>
          </Anchor>
        </HStack>
      </HStack>
    </Div>
  );
};
