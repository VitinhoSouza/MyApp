import { StatusBar, SafeAreaView, View } from "react-native";

import { styles } from "./styles";
import { Button } from "../componentes/Button";
import { Input } from "../componentes/Input";
import { useRef, useState } from "react";

function App() {
  const passwordInputRef = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit() {
    console.log({ email, password });
  }

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />

        <Input
          placeholder="E-mail"
          autoFocus
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          autoComplete="email"
          onSubmitEditing={() => passwordInputRef.current.focus()}
          returnKeyType="next"
          value={email}
          onChangeText={setEmail}
        />

        <Input
          ref={passwordInputRef}
          placeholder="Senha"
          keyboardType="numeric"
          secureTextEntry
          returnKeyType="done"
          onSubmitEditing={handleSubmit}
          value={password}
          onChangeText={setPassword}
        />

        <Button onPress={handleSubmit}>Enviar</Button>
      </View>
    </SafeAreaView>
  );
}

export default App;
