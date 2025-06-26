import { TextInput } from "react-native";
import { styles } from "./styles";
import { forwardRef, useState } from "react";

/**
 * @type {React.FC<import('react-native').TextInputProps>}
 */

export const Input = forwardRef((props, ref) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <TextInput
      ref={ref}
      style={[styles.input, isFocused && styles.inputFocused]}
      {...props}
      placeholderTextColor="#aaa"
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    />
  );
});
