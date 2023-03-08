import type { NextPage } from 'next';
import { useTheme } from 'styled-components';
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
  Text,
  TextAreaInput,
} from '@/components';
import {
  Paragraph,
  Heading1,
  Heading2,
  Heading3,
  Anchor,
  Button,
  Input,
  TextArea,
} from '@/components/elements';

const Home: NextPage = () => {
  const theme = useTheme();

  return (
    <Container>
      <NavBar></NavBar>
      <ScrollView overflow={'scroll'} width={'100%'} height={'100%'}>
        <VStack padding={'28px'} space={'28px'} minWidth={'565px'}>
          <Card header={'Introduction'}>
            <VStack space={'10px'}>
              <Text>
                This is a proof-of-concept project that I am building as a
                showcase of my software engineering ability and design skills.
                The project is built using React Next.js and Prisma to create a
                monolith full-stack web application that can be used on a
                plug-and-play basis for scaffolding future projects.
              </Text>
              <Text>
                The idea is to create 'Elements' which are React components of
                all exisiting HTML tags with a one-to-one ratio of each property
                that exitsts on each tag. These Elements will then be used to
                create custom react components which extend the elements but
                with added custom functionality to esentially build a custom
                extensive UI component library that stays true to the HTML
                convention with design properties that are easily mutable by
                changing the values in the theme.tsx file, to fit the
                user's/designer's needs.
              </Text>
              <Text>
                All the components that can be seen in the project are React
                components built and designed by me to be easily mutable and
                adaptable for different projects that use this project as a
                base.
              </Text>
            </VStack>
          </Card>
          <HStack space={'28px'} width={'100%'} wrap={true}>
            <Card header={'Elements'} flex={'1 0.1 300px'} width={'100%'}>
              <VStack space={'20px'}>
                <Heading1>Heading 1</Heading1>
                <Heading2>Heading 2</Heading2>
                <Heading3>Heading 3</Heading3>
                <Paragraph>Paragraph</Paragraph>
                <Anchor>Anchor (Hover me)</Anchor>

                <Button>Button</Button>
                <Input placeholder="Input"></Input>
                <TextArea placeholder="Input"></TextArea>
              </VStack>
            </Card>

            <Card
              header={'Component Library'}
              flex={'1 0.9 600px'}
              width={'100%'}
            >
              <VStack space={'20px'} width={'100%'}>
                <HStack space={'40px'} width={'100%'} wrap={true}>
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

                <HStack space={'20px'} wrap={true}>
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
                <HStack space={'20px'} wrap={true}>
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
                  header={'Card'}
                  backgroundColor={theme.colors.primaryBackground}
                >
                  <HStack space={'40px'} width={'100%'} wrap={true}>
                    <TextInput label="Example input"></TextInput>
                    <TextInput
                      label="Example disabled input"
                      value={'Disabled text'}
                      disabled={true}
                    ></TextInput>
                  </HStack>
                  <HStack space={'40px'} width={'100%'} wrap={true}>
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
                  <TextAreaInput
                    label="Example text area input"
                    height="120px"
                  ></TextAreaInput>
                </Card>
              </VStack>
            </Card>
          </HStack>

          <Card header={'Color Palette'} width={'100%'}>
            <ColorPalette />
          </Card>
        </VStack>
      </ScrollView>
    </Container>
  );
};

export default Home;
