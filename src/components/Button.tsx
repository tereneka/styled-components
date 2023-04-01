import React from "react";
import styled, { css } from "styled-components";
import { colors, shapes } from "../variables";
import { BaseProps } from "../types";

interface Props extends BaseProps {
  shape?: "circle" | "round";
  outlined?: boolean;
  disabled?: boolean;
  onClick?: (
    e: React.MouseEvent<
      HTMLButtonElement,
      MouseEvent
    >
  ) => void;
}

const StyledButton = styled.button<Props>`
  border: none;
  border-radius: ${({ shape }) =>
    shape ? shapes[shape] : shapes.square};
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }

  ${({ size }) => {
    if (size === "s") {
      return css`
        height: 24px;
        min-width: 24px;
        font-size: 14px;
      `;
    } else if (size === "l") {
      return css`
        height: 40px;
        min-width: 40px;
        padding: 10px;
        font-size: 16px;
      `;
    } else {
      return css`
        height: 32px;
        min-width: 32px;
        padding: 4px 10px;
        font-size: 14px;
      `;
    }
  }}

  ${({ block }) =>
    block &&
    css`
      width: 100%;
    `}

  ${({ outlined, color, disabled }) => {
    if (outlined && disabled) {
      return css`
        background: transparent;
        border: 2px solid ${colors.disabled};
        color: ${colors.disabled};
      `;
    } else if (outlined && !disabled) {
      return css`
        background: transparent;
        border: 2px solid
          ${color ? colors[color] : colors.base};
        color: ${color
          ? colors[color]
          : colors.base};
      `;
    } else if (disabled) {
      return css`
        background: ${colors.disabled};
        color: ${colors.light};
      `;
    } else {
      return css`
        background: ${color
          ? colors[color]
          : colors.base};
        color: ${colors.light};
      `;
    }
  }}
`;

export default function Button(props: Props) {
  return <StyledButton {...props} />;
}
