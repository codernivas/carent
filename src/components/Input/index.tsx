
import React from 'react';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

interface InputProps {
  label?: string;
  type?: string;
  placeholder?: string;
  value: string | number;
  variant?: "outlined" | "filled"| "standard"
  onChange: (value: string) => void;
}
const BorderlessInput = styled(TextField)(({ theme }) => ({
    '& .MuiOutlinedInput-root': {
      border: 'none',
      '& fieldset': {
        border: 'none',
      },
    },
    '& .MuiInputBase-input': {
      padding: theme.spacing(1),
    },
  }));
const Input: React.FC<InputProps> = ({ placeholder,label, type = 'text', value, onChange , variant="outlined"}) => {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        onChange(newValue); // Ensure value is a string
      };

  return (
    <BorderlessInput
    label={label}
    type={type}
    value={value}
    onChange={handleInputChange}
    placeholder={placeholder}
      variant={variant}
      fullWidth
    />
  );
};

export default Input;
