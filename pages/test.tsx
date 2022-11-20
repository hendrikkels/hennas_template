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
} from '../components';
import {
  Paragraph,
  Div,
  Heading1,
  Heading2,
  Heading3,
  Anchor,
} from '../library';

const Test: NextPage = () => {
  return (
    <Div style={{ backgroundColor: 'red', minHeight: '100px' }}>
      <SolidButton></SolidButton>
    </Div>
  );
};

export default Test;
