import React from "react";
import styled, { css } from "styled-components";
import { base, light } from "../variables";

interface Props {
  children?: any;
  color?: string;
  shape?: string;
  outlined?: boolean;
}

const StyledButton = styled.button<Props>`
  height: 40px;
  min-width: 40px;
  padding: 10px;
  border: none;
  border-radius: ${({ shape }) => shape || "4px"};
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
  ${(props) =>
    props.outlined
      ? css`
          background: transparent;
          border: 2px solid ${props.color || base};
          color: ${props.color || base};
        `
      : css`
          background: ${props.color || base};
          color: ${light};
        `}
`;

export default function Button(props: Props) {
  return <StyledButton {...props} />;
}
