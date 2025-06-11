import { ScrollView, Text, StatusBar, SafeAreaView } from "react-native";
import { styles } from "./styles";

function App() {
  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView style={styles.scrollView}>
        <StatusBar
          hidden={false}
          backgroundColor="red"
          barStyle="dark-content"
          animated
          translucent={false}
        />
        <Text style={styles.text}>
          JSTACK - O melhor curso de React e JavaScript x
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
