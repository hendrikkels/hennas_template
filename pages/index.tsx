import type { NextPage } from 'next';
import { Card, ColorPalette, NavBar } from '../components';
import { Paragraph, ScrollView, View, VStack } from '../library';

const Home: NextPage = () => {
  return (
    <View height={'100%'} width={'100%'}>
      <NavBar title={'Hendrikkels'}></NavBar>

      <ScrollView padding={'28px'}>
        <Card title={'Introduction'} marginBottom={'28px'}>
          <Paragraph>
            This is a proof-of-concept project that I am building as an showcase
            of my software engineering ability and design skills. The project is
            built using Next.js and React.
          </Paragraph>
          <Paragraph>
            All the components that can be seen in the project are React
            components built and designed by me to be easily mutable and
            adaptable for different projects that use this project as a base.
          </Paragraph>
          <Paragraph>
            The idea is to build this out into a extensive UI component library
            with design properties that are easily mutable by changing the
            values in the theme.tsx file, to fit the user's/designer's needs.
          </Paragraph>
        </Card>
        <Card title={'Color Palette'} width={'auto'}>
          <ColorPalette></ColorPalette>
        </Card>
      </ScrollView>
    </View>
  );
};

export default Home;
