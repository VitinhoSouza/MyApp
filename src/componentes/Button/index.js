import { Pressable, Text, View } from "react-native";

import { styles } from "./styles";

/**
 * @param {import('react-native').PressableProps} props
 */

export function Button({ children, disabled, ...props }) {
  return (
    <View style={styles.buttonWrapper}>
      <Pressable
        android_ripple={{ color: "#444" }}
        disabled={disabled}
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonActive,
          disabled && styles.buttonDisabled,
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
