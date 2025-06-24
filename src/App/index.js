import { ScrollView, StatusBar, SafeAreaView } from "react-native";

import { styles } from "./styles";
import { Button } from "../componentes/Button";

function App() {
  const disabled = true;
  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView style={styles.scrollView}>
        <StatusBar barStyle="dark-content" />
        <Button disabled={!disabled} onPress={() => alert("Button")}>
          Oi botão!
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
