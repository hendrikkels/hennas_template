import React, { ReactNode, useMemo, useState } from 'react';
import { useTheme } from 'styled-components';
import { Div, Button, ButtonProps, Paragraph } from '../library';

export interface SolidButtonProps extends ButtonProps {
  label?: string;
  animateHover?: boolean;
  animatePress?: boolean;
}

export const SolidButton: React.FC<SolidButtonProps> = (props) => {
  const {
    label,
    animateHover = false,
    animatePress = true,
    children,
    ...rest
  } = props;
  const theme = useTheme();

  const [hovering, setHovering] = useState(false);
  const [pressing, setPressing] = useState(false);

  return (
    <Div position={'relative'} width={props.width} height={props.height}>
      <Button
        borderWidth={theme.buttonBorderWidth}
        borderRadius={theme.buttonBorderRadius}
        borderColor={theme.colors.buttonBorder}
        backgroundColor={theme.colors.buttonBackground}
        color={theme.colors.buttonForeground}
        height={theme.buttonHeight}
        paddingX={theme.buttonPaddingX}
        paddingY={theme.buttonPaddingY}
        onPointerEnter={() => setHovering(true)}
        onPointerLeave={() => setHovering(false)}
        onPointerDown={() => setPressing(true)}
        onPointerUp={() => setPressing(false)}
        {...rest}
      >
        <Paragraph
          color={theme.colors.buttonForeground}
          fontFamily={theme.buttonLabelFontFamily}
          fontSize={theme.buttonLabelFontSize}
          lineHeight={theme.buttonLabelLineHeight}
        >
          {label}
        </Paragraph>
      </Button>
      {animatePress && pressing && (
        <Div
          style={{ pointerEvents: 'none' }}
          position={'absolute'}
          backgroundColor={theme.colors.buttonHoverMask}
          borderRadius={theme.buttonBorderRadius}
          top={0}
          bottom={0}
          left={0}
          right={0}
          width={'100%'}
          height={'100%'}
        />
      )}
      {animateHover && hovering && (
        <Div
          style={{ pointerEvents: 'none' }}
          position={'absolute'}
          backgroundColor={theme.colors.buttonHoverMask}
          borderRadius={theme.buttonBorderRadius}
          top={0}
          bottom={0}
          left={0}
          right={0}
          width={'100%'}
          height={'100%'}
        />
      )}
    </Div>
  );
};
