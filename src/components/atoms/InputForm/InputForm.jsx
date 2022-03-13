import React from "react";
import { TextField } from "@mui/material";

function InputForm({
  label,
  type,
  value,
  onChange,
  name,
  autoFocus,
  error,
  endAdornment,
  autoCapitalize,
}) {
  return (
    <TextField
      label={label}
      variant="filled"
      required
      value={value}
      onChange={onChange}
      type={type}
      name={name}
      autoFocus={autoFocus && true}
      error={error}
      helperText={error && "Las contraseñas deben coincidir"}
      InputProps={{
        endAdornment: endAdornment && endAdornment,
      }}
      autoCapitalize={autoCapitalize}
    />
  );
}

export default InputForm;
