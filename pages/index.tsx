import type { NextPage } from 'next';
import {
  Card,
  ColorPalette,
  NavBar,
  ScrollView,
  TextInput,
  VStack,
} from '../components';
import {
  Paragraph,
  Div,
  Heading1,
  Heading2,
  Heading3,
  Anchor,
} from '../library';

const Home: NextPage = () => {
  return (
    <Div height={'100%'} width={'100%'}>
      <NavBar title={'Hendrikkels'}></NavBar>
      <ScrollView padding={'28px'}>
        <VStack space={'28px'}>
          <Card title={'Introduction'}>
            <VStack space={'10px'}>
              <Paragraph>
                This is a proof-of-concept project that I am building as an
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
          <Card title={'Library'}>
            <VStack space={'20px'}>
              <Heading1>Heading 1</Heading1>
              <Heading2>Heading 2</Heading2>
              <Heading3>Heading 3</Heading3>
              <Paragraph>Paragraph</Paragraph>
              <Anchor>Anchor (Hover me)</Anchor>
              <TextInput label="lekkor"></TextInput>
            </VStack>
          </Card>
        </VStack>
      </ScrollView>
    </Div>
  );
};

export default Home;
