import React, { useCallback, useEffect, useState, useMemo } from 'react';
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
import { ParagraphProps } from './.';

export const Heading3 = styled.h3<ParagraphProps>(
  {
    fontSize: '22px',
    fontWeight: 'normal',
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
