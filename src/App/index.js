import { SafeAreaView, StatusBar, Text, View } from "react-native";

import { styles } from "./styles";

function App() {
  return (
    <SafeAreaView style={styles.wrapper}>
      <StatusBar barStyle="dark-content" animated />
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 24,
            fontFamily: "Danfo-Regular",
          }}
        >
          Hello, Jstack!
        </Text>
      </View>
    </SafeAreaView>
  );
}

export default App;
