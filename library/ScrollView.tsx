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
} from 'styled-system';
import styled from 'styled-components';
import { ViewProps } from './View';

export const ScrollView = styled.div<ViewProps>(
  {
    boxSizing: 'border-box',
    '-moz-box-sizing': 'border-box',
    '-webkit-box-sizing': 'border-box',
    display: 'flex',
    flexDirection: 'column',
    'overflow-x': 'hidden',
    'overflow-y': 'auto',
    'text-align': 'justify',
  },
  layout,
  space,
  position,
  border,
  color,
  flexbox
);
