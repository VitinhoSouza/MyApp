import { TextInput } from "react-native";
import { styles } from "./styles";
import { forwardRef, useState } from "react";

/**
 * @type {React.FC<import('react-native').TextInputProps>}
 */

export const Textarea = forwardRef((props, ref) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <TextInput
      ref={ref}
      style={[styles.textarea, isFocused && styles.textareaFocused]}
      placeholderTextColor="#aaa"
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      textAlignVertical="top" // * Android only
      {...props}
      multiline
      onContentSizeChange={(event) => {
        console.log(event.nativeEvent.contentSize);
      }}
    />
  );
});
