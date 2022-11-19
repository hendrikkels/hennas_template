import React, { ReactNode, useMemo } from 'react';
import { useTheme } from 'styled-components';
import {
  Div,
  DivProps,
  Input,
  InputProps,
  Paragraph,
  ParagraphProps,
} from '../library';

export interface TextInputProps extends InputProps {
  label?: string | number;
  _containerStyle?: DivProps;
  _labelContainerStyle?: DivProps;
  _labelStyle?: ParagraphProps;
  _errorContainerStyle?: DivProps;
  _errorStyle?: ParagraphProps;
}

export const TextInput: React.FC<TextInputProps> = (props) => {
  const {
    label,
    _containerStyle,
    _labelStyle,
    _labelContainerStyle,
    _errorStyle,
    _errorContainerStyle,
    ...rest
  } = props;
  const theme = useTheme();

  return (
    <Div display={'flex'} flexDirection={'column'} {..._containerStyle}>
      <Div
        height={theme.inputLabelHeight}
        paddingLeft={theme.inputLabelPaddingLeft}
        {..._labelContainerStyle}
      >
        <Paragraph
          fontFamily={theme.inputLabelFontFamily}
          fontSize={theme.inputLabelFontSize}
          color={theme.colors.inputLabel}
          {..._labelStyle}
        >
          Label
        </Paragraph>
      </Div>

      <Input
        borderWidth={theme.inputBorderWidth}
        borderRadius={theme.inputBorderRadius}
        borderColor={theme.colors.inputBorder}
        height={theme.inputHeight}
        paddingX={theme.inputPaddingX}
        paddingY={theme.inputPaddingY}
        backgroundColor={theme.colors.inputBackground}
        caretColor={theme.colors.inputCaret}
        {...rest}
      ></Input>
      <Div
        justifyContent={'flex-end'}
        height={theme.inputErrorHeight}
        paddingLeft={theme.inputErrorPaddingLeft}
        {..._errorContainerStyle}
      >
        <Paragraph
          fontFamily={theme.inputErrorFontFamily}
          fontSize={theme.inputErrorFontSize}
          color={theme.colors.inputError}
          {..._errorStyle}
        >
          Label
        </Paragraph>
      </Div>
    </Div>
  );
};
