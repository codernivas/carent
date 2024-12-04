"use client"
import React from 'react';
import styled from 'styled-components';

// Define the props type for the Box component
interface CustomBoxProps {
  bgColor?: string; 
  padding?: string; 
  borderRadius?: string; 
  boxShadow?: string; 
}

// Create a styled div with default styles and dynamic props
const StyledBox = styled.div<CustomBoxProps>`
  background-color: ${(props) => props.bgColor || 'transparent'};
  padding: ${(props) => props.padding || '16px'};
  border-radius: ${(props) => props.borderRadius || '8px'};
  box-shadow: ${(props) => props.boxShadow || '0px 4px 6px rgba(0, 0, 0, 0.1)'};
  
`;

const CustomBox: React.FC<CustomBoxProps & React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  bgColor,
  padding,
  borderRadius,
  boxShadow,
  ...rest
}) => {
  return (
    <StyledBox
      bgColor={bgColor}
      padding={padding}
      borderRadius={borderRadius}
      boxShadow={boxShadow}
      {...rest}
    >
      {children}
    </StyledBox>
  );
};

export default CustomBox;
