"use client"
import React from 'react';
import styled from 'styled-components';

// Define the props type
interface DivWithPaddingProps {
  padding?: string; // Padding value
}

// Create a styled div with dynamic padding
const StyledDiv = styled.div<DivWithPaddingProps>`
  padding: ${(props) => props.padding || '5px'}; // Default to '0' if padding is not provided
`;

const DivWithPadding: React.FC<DivWithPaddingProps & React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  padding,
  ...rest
}) => {
  return (
    <StyledDiv padding={padding} {...rest}>
      {children}
    </StyledDiv>
  );
};

export default DivWithPadding;
