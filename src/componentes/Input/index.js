import { TextInput } from "react-native";
import { styles } from "./styles";
import { useState } from "react";

export function Input(props) {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <TextInput
      style={[styles.input, isFocused && styles.inputFocused]}
      {...props}
      placeholderTextColor="#aaa"
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      autoFocus
    />
  );
}
