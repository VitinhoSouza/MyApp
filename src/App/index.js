import {
  InputAccessoryView,
  SafeAreaView,
  StatusBar,
  View,
} from "react-native";

import { Button } from "../componentes/Button";
import { Input } from "../componentes/Input";
import { styles } from "./styles";

function App() {
  return (
    <SafeAreaView style={styles.wrapper}>
      <StatusBar barStyle="dark-content" animated />
      <View style={styles.container}>
        <Input placeholder="Nome" inputAccessoryViewID="name" />

        <InputAccessoryView nativeID="name">
          <Button>Accessory do Nome</Button>
        </InputAccessoryView>
      </View>
    </SafeAreaView>
  );
}

export default App;
