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
    boxSizing: 'border-box',
    '-moz-box-sizing': 'border-box',
    '-webkit-box-sizing': 'border-box',
    display: 'flex',
    flexDirection: 'column',
    width: '200px',
    height: '28px',
    fontSize: '18px',
    border: 0,
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
