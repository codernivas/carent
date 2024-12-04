"use client"
import React from 'react';
import styled from 'styled-components';

// Define props type for the FlexBox component
interface FlexBoxProps {
  flexdirection?: 'row' | 'column'; // Direction of flex items
  justifycontent?: 
    | 'flex-start' 
    | 'flex-end' 
    | 'center' 
    | 'space-between' 
    | 'space-around' 
    | 'space-evenly'; // Alignment of flex items
  alignitems?: 
    | 'flex-start' 
    | 'flex-end' 
    | 'center' 
    | 'space-between' 
    | 'space-around' 
    | 'space-evenly'; // Alignment of flex items
  width?: string; // Width of the container
}

// Create a styled div with dynamic flex properties
const StyledFlexBox = styled.div<FlexBoxProps>`
  display: flex;
  flex-direction: ${(props) => props.flexdirection || 'row'};
  align-item: ${(props) => props.alignitems || 'center'};
  justify-content: ${(props) => props.justifycontent || 'flex-start'};
  width: ${(props) => props.width || '100%'};
`;

// Reusable FlexBox component
const FlexBox: React.FC<FlexBoxProps & React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  flexdirection,
  justifycontent,
  width,
  alignitems,
  ...rest
}) => {
  return (
    <StyledFlexBox
      flexdirection={flexdirection}
      justifycontent={justifycontent}
      alignitems={alignitems}
      width={width}
      {...rest}
    >
      {children}
    </StyledFlexBox>
  );
};

export default FlexBox;
