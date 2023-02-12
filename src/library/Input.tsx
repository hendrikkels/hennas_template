import React, { useCallback, useEffect, useState, useMemo } from 'react';
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
  TypographyProps,
  typography,
} from 'styled-system';
import styled from 'styled-components';

export interface InputProps
  extends LayoutProps,
    SpaceProps,
    PositionProps,
    BorderProps,
    FlexboxProps,
    ColorProps,
    ShadowProps,
    TypographyProps,
    Omit<React.HTMLAttributes<HTMLElement>, 'color'> {
  as?: React.ElementType;
  children?: React.ReactNode;
}

export const Input = styled.input<InputProps>(
  {
    width: 'fit-content',
    fontSize: '18px',
  },
  layout,
  space,
  flexbox,
  position,
  border,
  color,
  shadow,
  typography
);
