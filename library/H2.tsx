import React, { useCallback, useEffect, useState, useMemo } from "react";
import {
  layout,
  position,
  border,
  color,
  flexbox,
  space,
  typography,
} from "styled-system";
import styled from "styled-components";
import { TextProps } from "./Text";

export const H2 = styled.p<TextProps>(
  {
    display: 'flex',
    flexDirection: 'column',
    fontSize: '16px',
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
