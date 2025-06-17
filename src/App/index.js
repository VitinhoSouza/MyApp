import {
  ScrollView,
  StatusBar,
  SafeAreaView,
  View,
  Button,
  TouchableOpacity,
  Text,
  TouchableHighlight,
  TouchableWithoutFeedback,
  TouchableNativeFeedback,
  Pressable,
} from "react-native";

import { styles } from "./styles";

function App() {
  const disabled = true;
  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView style={styles.scrollView} scrollEnabled={false}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.buttonsContainer}>
          <Button
            title="Button"
            color="#000"
            onPress={() => alert("Button pressionado")}
            touchSoundDisabled // * Android Only
            disabled={disabled}
          />

          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => alert("TouchableOpacity pressionado")}
            style={[styles.button, disabled && styles.buttonDisabled]} // Estilos
            disabled={disabled} //Impede ação
          >
            <Text style={styles.buttonLabel}>TouchableOpacity</Text>
          </TouchableOpacity>

          <TouchableHighlight
            onPress={() => alert("TouchableHighlight pressionado")}
            style={styles.button}
            underlayColor="#f00"
            activeOpacity={0.5}
          >
            <View>
              <Text style={styles.buttonLabel}>TouchableHighlight</Text>
              <Text style={styles.buttonLabel}>TouchableHighlight</Text>
            </View>
          </TouchableHighlight>

          <TouchableWithoutFeedback
            onPress={() => alert("TouchableWithoutFeedback pressionado")}
          >
            <View style={styles.button}>
              <Text style={styles.buttonLabel}>TouchableWithoutFeedback</Text>
              <Text style={styles.buttonLabel}>TouchableWithoutFeedback</Text>
            </View>
          </TouchableWithoutFeedback>

          {/* * Android only --> Ripple Effect */}
          <View
            style={{
              overflow: "hidden",
              borderRadius: 8,
            }}
          >
            <TouchableNativeFeedback
              onPress={() => alert("TouchableNativeFeedback pressionado")}
              background={TouchableNativeFeedback.Ripple("#f00")}
            >
              <View style={styles.button}>
                <Text style={styles.buttonLabel}>TouchableNativeFeedback</Text>
                <Text style={styles.buttonLabel}>TouchableNativeFeedback</Text>
              </View>
            </TouchableNativeFeedback>
          </View>

          <TouchableOpacity
            style={{
              backgroundColor: "red",
              alignSelf: "flex-start",
              width: 100,
              height: 30,
            }}
            onPress={() => alert("Ver mais")}
            hitSlop={{
              bottom: 15,
              left: 15,
              right: 15,
              top: 15,
            }}
            pressRetentionOffset={16}
          >
            <Text>Ver mais</Text>
          </TouchableOpacity>

          <Pressable
            style={({ pressed }) => [
              styles.button,
              pressed && {
                opacity: 0.8,
                backgroundColor: "gray",
                transform: "scale(0.97)",
              },
            ]}
            android_ripple={{ color: "red" }}
            android_disableSound
            onPress={() => alert("Pressable")}
          >
            {({ pressed }) => (
              <>
                <Text
                  style={[
                    styles.buttonLabel,
                    pressed && {
                      opacity: 0.5,
                    },
                  ]}
                >
                  Pressable
                </Text>
                <Text style={styles.buttonLabel}>Pressable</Text>
              </>
            )}
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
