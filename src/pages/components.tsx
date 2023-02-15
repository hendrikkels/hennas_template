import type { NextPage } from 'next';
import { useState } from 'react';
import { useTheme } from 'styled-components';
import { backgroundColor } from 'styled-system';
import {
  Card,
  ColorPalette,
  HStack,
  NavBar,
  ScrollView,
  TextInput,
  VStack,
  SolidButton,
  DepthButton,
  Container,
} from '../components';
import {
  Paragraph,
  Div,
  Heading1,
  Heading2,
  Heading3,
  Anchor,
} from '../elements';

const Components: NextPage = () => {
  const theme = useTheme();

  return (
    <Container>
      <NavBar></NavBar>
      <ScrollView padding={'28px'} width={'100%'}>
        <VStack space={'28px'}>
          <Card title={'Introduction'}>
            <VStack space={'10px'}>
              <Paragraph>
                This is a proof-of-concept project that I am building as a
                showcase of my software engineering ability and design skills.
                The project is built using Next.js and React.
              </Paragraph>
              <Paragraph>
                All the components that can be seen in the project are React
                components built and designed by me to be easily mutable and
                adaptable for different projects that use this project as a
                base.
              </Paragraph>
              <Paragraph>
                The idea is to build this out into a extensive UI component
                library with design properties that are easily mutable by
                changing the values in the theme.tsx file, to fit the
                user's/designer's needs.
              </Paragraph>
            </VStack>
          </Card>
          <Card title={'Color Palette'}>
            <ColorPalette />
          </Card>
          <Card title={'Component Library'}>
            <VStack space={'20px'}>
              <Heading1>Heading 1</Heading1>
              <Heading2>Heading 2</Heading2>
              <Heading3>Heading 3</Heading3>
              <Paragraph>Paragraph</Paragraph>
              <Anchor>Anchor (Hover me)</Anchor>

              <HStack space={'40px'} width={'100%'}>
                <TextInput
                  label="Input with placeholder"
                  placeholder={'Email'}
                ></TextInput>
                <TextInput
                  label="Example input with error"
                  initAsTouched={true}
                  required={true}
                ></TextInput>
              </HStack>

              <HStack space={'20px'}>
                <SolidButton
                  label={'Success'}
                  backgroundColor={theme.colors.success}
                ></SolidButton>
                <SolidButton
                  label={'Info'}
                  backgroundColor={theme.colors.info}
                ></SolidButton>
                <SolidButton
                  label={'Warning'}
                  backgroundColor={theme.colors.warning}
                ></SolidButton>
                <SolidButton
                  label={'Error'}
                  backgroundColor={theme.colors.error}
                ></SolidButton>
                <SolidButton
                  label={'animateHover'}
                  animateHover={true}
                  backgroundColor={theme.colors.primary}
                ></SolidButton>
              </HStack>
              <HStack space={'20px'}>
                <DepthButton
                  label={'Success'}
                  backgroundColor={theme.colors.success}
                />
                <DepthButton
                  label={'Info'}
                  backgroundColor={theme.colors.info}
                />
                <DepthButton
                  label={'Warning'}
                  backgroundColor={theme.colors.warning}
                />
                <DepthButton
                  label={'Error'}
                  backgroundColor={theme.colors.error}
                />
                <DepthButton
                  label={'Primary'}
                  backgroundColor={theme.colors.primary}
                />
              </HStack>
              <Card
                title={'Card'}
                backgroundColor={theme.colors.primaryBackground}
              >
                <HStack space={'40px'} width={'100%'}>
                  <TextInput label="Example input"></TextInput>
                  <TextInput
                    label="Example disabled input"
                    value={'Disabled text'}
                    disabled={true}
                  ></TextInput>
                </HStack>
                <HStack space={'40px'} width={'100%'}>
                  <TextInput
                    label="Input with placeholder"
                    placeholder={'Email'}
                  ></TextInput>
                  <TextInput
                    label="Example input with error"
                    initAsTouched={true}
                    required={true}
                  ></TextInput>
                </HStack>
              </Card>
            </VStack>
          </Card>
        </VStack>
      </ScrollView>
    </Container>
  );
};

export default Components;
