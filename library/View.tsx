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
  FlexboxProps,
  flexbox,
  SpaceProps,
  space,
  ShadowProps,
  shadow,
} from 'styled-system';
import styled from 'styled-components';

export interface ViewProps
  extends LayoutProps,
    SpaceProps,
    PositionProps,
    BorderProps,
    FlexboxProps,
    ColorProps,
    ShadowProps,
    Omit<React.HTMLAttributes<HTMLElement>, 'color'> {
  as?: React.ElementType;
  children?: React.ReactNode;
}

export const View = styled.div<ViewProps>(
  {
    boxSizing: 'border-box',
    '-moz-box-sizing': 'border-box',
    '-webkit-box-sizing': 'border-box',
    display: 'flex',
    flexDirection: 'column',
  },
  layout,
  space,
  flexbox,
  position,
  border,
  color,
  shadow
);
