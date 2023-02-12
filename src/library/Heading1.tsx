import {
  layout,
  position,
  border,
  color,
  flexbox,
  space,
  typography,
} from 'styled-system';
import styled from 'styled-components';
import { ParagraphProps } from '.';

export const Heading1 = styled.h1<ParagraphProps>(
  {
    fontSize: '36px',
    fontWeight: 'bold',
    padding: 0,
    margin: 0,
  },
  layout,
  space,
  position,
  border,
  color,
  flexbox,
  typography
);
