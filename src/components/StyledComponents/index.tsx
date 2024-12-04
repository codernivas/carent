"use client"

import styled from "styled-components"

export const StyledText = styled.span`
  color: inherit;
  font-size:  '16px';
  font-weight: 'normal';
  text-align:  'left';
`
export const StyledButton = styled.button`
   background-color:  #3563E9;
  color:  white;
  padding:  2px;
  border-radius:  4px;
  border: none;
  cursor: pointer;
  width: 120px;
  height:35px;
  font-size: 16px;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color:  #264BC8;
     }
`
export const SearchBar = styled.div`
  //  background-color:  #3563E9;
  color:  white;
  padding:  2px;
  border-radius:  4px;
  border: none;
  cursor: pointer;
 width:500px
  font-size: 16px;
  border-width:1px

  
`
