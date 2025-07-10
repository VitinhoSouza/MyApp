import { Pressable, Text, View } from "react-native";

import { styles } from "./styles";

/**
 * @param {import('react-native').PressableProps} props
 */

export function Button({ children, disabled, style, ...props }) {
  return (
    <View style={styles.buttonWrapper}>
      <Pressable
        android_ripple={{ color: "#444" }}
        disabled={disabled}
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonActive,
          disabled && styles.buttonDisabled,
          style,
        ]}
        {...props}
      >
        <Text
          style={[styles.buttonLabel, disabled && styles.buttonLabelDisabled]}
        >
          {children}
        </Text>
      </Pressable>
    </View>
  );
}
