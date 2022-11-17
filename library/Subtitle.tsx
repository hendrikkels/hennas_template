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

export const Subtitle = styled.div<TextProps>(
  {
    display: "flex",
    flexDirection: "column",
    fontSize: "20px",
    fontWeight: "normal",
  },
  layout,
  space,
  position,
  border,
  color,
  flexbox,
  typography
);
