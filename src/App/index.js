import { SafeAreaView, StatusBar, View } from "react-native";

import { AppText } from "../componentes/AppText";
import { styles } from "./styles";

function App() {
  return (
    <SafeAreaView style={styles.wrapper}>
      <StatusBar barStyle="dark-content" animated />
      <View style={styles.container}>
        <AppText
          style={{
            fontSize: 24,
          }}
        >
          Hello, Jstack!
        </AppText>
      </View>
    </SafeAreaView>
  );
}

export default App;
