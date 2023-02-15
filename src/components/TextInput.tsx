import React, {
  FormEvent,
  ReactNode,
  useCallback,
  useMemo,
  useState,
} from 'react';
import { useTheme } from 'styled-components';
import {
  Div,
  DivProps,
  Input,
  InputProps,
  Paragraph,
  ParagraphProps,
} from '../elements';
import { useField } from 'formik';

export interface TextInputProps extends InputProps {
  name?: string;
  label?: string | ReactNode;
  error?: string | ReactNode;
  value?: string;
  onChange?: (arg0: FormEvent<HTMLInputElement>) => void;
  handleValueChange?: (value: string) => void;
  required?: boolean;
  initAsTouched?: boolean;
  disabled?: boolean;
  _containerStyle?: DivProps;
  _labelContainerStyle?: DivProps;
  _labelStyle?: ParagraphProps;
  _errorContainerStyle?: DivProps;
  _errorStyle?: ParagraphProps;
}

export const TextInput: React.FC<TextInputProps> = (props) => {
  const {
    name,
    label,
    error,
    value: _value,
    onChange: _onChange,
    handleValueChange,
    required = false,
    initAsTouched = false,
    disabled = false,
    _containerStyle,
    _labelStyle,
    _labelContainerStyle,
    _errorStyle,
    _errorContainerStyle,
    ...rest
  } = props;
  const theme = useTheme();

  const [value, setValue] = useState(_value || '');
  const [touched, setTouched] = useState(initAsTouched);

  const onChange = useCallback(
    (event: FormEvent<HTMLInputElement>) => {
      if (_onChange) {
        _onChange(event);
      }
      setTouched(true);
      setValue(event.currentTarget.value);
      if (handleValueChange) {
        handleValueChange(event.currentTarget.value);
      }
    },
    [setValue]
  );

  const emptyError = useMemo(() => {
    if (touched && required && value.length <= 0) {
      return 'Required';
    }
  }, [touched, required, value]);

  return (
    <Div
      display={'flex'}
      flex={1}
      flexDirection={'column'}
      {..._containerStyle}
    >
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
          {required ? `${label} *` : label}
        </Paragraph>
      </Div>

      <Input
        value={value}
        name={name}
        onChange={onChange}
        disabled={disabled}
        color={
          disabled ? theme.colors.inputTextDisabled : theme.colors.inputText
        }
        borderWidth={theme.inputBorderWidth}
        borderRadius={theme.inputBorderRadius}
        borderColor={theme.colors.inputBorder}
        height={theme.inputHeight}
        paddingX={theme.inputPaddingX}
        paddingY={theme.inputPaddingY}
        backgroundColor={theme.colors.inputBackground}
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
          {error || emptyError}
        </Paragraph>
      </Div>
    </Div>
  );
};
