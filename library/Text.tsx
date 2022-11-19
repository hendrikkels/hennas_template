import React, { useCallback, useEffect, useState, useMemo } from "react";
import {
  layout,
  position,
  LayoutProps,
  PositionProps,
  BorderProps,
  border,
  ColorProps,
  color,
  flexbox,
  SpaceProps,
  space,
  TypographyProps,
  typography,
  ShadowProps,
  shadow,
} from 'styled-system';
import styled from 'styled-components';

export interface TextProps
  extends LayoutProps,
    SpaceProps,
    PositionProps,
    BorderProps,
    ColorProps,
    TypographyProps,
    ShadowProps {
  children?: string;
}

export const Text = styled.p<TextProps>(
  {
    display: 'flex',
    flexDirection: 'column',
    padding: 0,
    margin: 0,
  },
  layout,
  space,
  position,
  border,
  color,
  flexbox,
  typography,
  shadow
);
