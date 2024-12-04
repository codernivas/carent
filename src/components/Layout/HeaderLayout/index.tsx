"use client"
import CustomBox from "@/components/Container/CustomBox"
import FlexBox from "@/components/Container/FlexBox"
import { SearchBar, StyledText } from "@/components/StyledComponents"
import React, { useState } from "react"
import Input from "@/components/Input"
const Header = () => {
  const [inputValue, setInputValue] = useState<string>("")

  const handleInputChange = (value: string) => {
    setInputValue(value)
    console.log("Entered value:", value)
  }
  return (
    <CustomBox>
      <FlexBox justifycontent="space-between" flexdirection="row" width="100%">
        <FlexBox
          justifycontent="flex-start"
          flexdirection="row"
          width="50%"
          alignitems="center"
        >
          <StyledText
            style={{
              paddingRight: "100px",
              padding: "10px",
              fontSize: "20px",
              fontWeight: "700",
              color: "#264BC8",
            }}
          >
            CARENT
          </StyledText>
          <SearchBar>
          <Input value={inputValue} onChange={handleInputChange} />

          </SearchBar>
        </FlexBox>

        <FlexBox flexdirection="row" width="20%" justifycontent="flex-end">
          <h1>h 2</h1>
          <h1>h 2</h1>
          <h1>h 2</h1>
          <h1>h 2</h1>
        </FlexBox>
      </FlexBox>
    </CustomBox>
  )
}

export default Header
