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

export interface TextAreaProps
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
  name?: string;
  rows?: number;
  cols?: number;
  type?: string;
  children?: React.ReactNode;
}

export const TextArea = styled.textarea<TextAreaProps>(
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
