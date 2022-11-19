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
import { TextProps } from './Text';

export const Heading1 = styled.h1<TextProps>(
  {
    display: 'flex',
    flexDirection: 'column',
    fontSize: '30px',
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
