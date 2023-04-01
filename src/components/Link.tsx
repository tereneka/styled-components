import React from "react";
import styled from "styled-components";
import { BaseProps } from "../types";

interface Props extends BaseProps {}

const StyledLink = styled.a<Props>``;

export default function Link(props: Props) {
  return <StyledLink {...props} />;
}
