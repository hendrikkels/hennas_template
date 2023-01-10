import {
  layout,
  position,
  LayoutProps,
  PositionProps,
  BorderProps,
  border,
  ColorProps,
  color,
  FlexboxProps,
  flexbox,
  SpaceProps,
  space,
  ShadowProps,
  shadow,
  typography,
  TypographyProps,
  BoxShadowProps,
  boxShadow,
} from 'styled-system';
import styled from 'styled-components';

export interface ButtonProps
  extends LayoutProps,
    SpaceProps,
    PositionProps,
    BorderProps,
    FlexboxProps,
    ColorProps,
    ShadowProps,
    BoxShadowProps,
    TypographyProps,
    Omit<React.HTMLAttributes<HTMLElement>, 'color'> {
  as?: React.ElementType;
  children?: React.ReactNode;
}

export const Button = styled.button<ButtonProps>(
  { width: 'fit-content', cursor: 'pointer' },
  layout,
  space,
  flexbox,
  position,
  border,
  color,
  shadow,
  boxShadow,
  typography
);
