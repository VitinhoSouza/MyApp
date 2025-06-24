import { StatusBar, SafeAreaView, TextInput, View } from "react-native";

import { styles } from "./styles";
import { Button } from "../componentes/Button";
import { Input } from "../componentes/Input";

function App() {
  const disabled = true;
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />

        <Input placeholder="E-mail" autoFocus />

        <Input placeholder="Senha" secureTextEntry />

        <Button disabled={!disabled} onPress={() => alert("Button")}>
          Oi botão!
        </Button>
      </View>
    </SafeAreaView>
  );
}

export default App;
