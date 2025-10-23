import {
  StatusBar,
  SafeAreaView,
  View,
  Modal,
  Text,
  Alert,
} from "react-native";

import { Button } from "../componentes/Button";

import { styles } from "./styles";
import { useState } from "react";

function App() {
  const [visible, setVisible] = useState(false);

  function handleShowAlert() {
    Alert.alert(
      "Atenção!",
      "Bloquear o usuário fará com que ele perca acesso ao sistema",
      [
        {
          text: "Cancelar",
          isPreferred: true, //iOS only
          onPress: () => console.log("Bloquear usuário"),
          style: "cancel",
        },
        {
          text: "Bloquear",
          onPress: () => console.log("Bloquear usuário"),
          style: "destructive", //iOS only
        },
        {
          text: "Depois",
          onPress: () => console.log("Bloquear usuário"),
        },
      ],
      {
        cancelable: true, // Android only
        onDismiss: () => console.log("Alert dimissed"), // Android only
        userInterfaceStyle: "light", // iOS only
      }
    );
  }

  function handleShowPrompt() {
    // iOS only
    Alert.prompt(
      "Responda:",
      "Qual o melhor curso de interwebs?",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Enviar",
          onPress: (value) => console.log("Valor enviado:", value),
          isPreferred: true,
        },
      ],
      "login-password",
      "Valor default",
      "email-address",
      {
        userInterfaceStyle: "dark",
      }
    );
  }

  return (
    <>
      <SafeAreaView style={styles.wrapper}>
        <StatusBar barStyle="dark-content" animated />
        <View style={styles.container}>
          <Button onPress={() => setVisible(true)}>Abrir modal</Button>
          <Button onPress={handleShowAlert}>Mostrar alerta</Button>
          {} <Button onPress={handleShowPrompt}>Mostrar prompt</Button>
        </View>
      </SafeAreaView>
      <Modal
        visible={visible}
        animationType="slide"
        // transparent
        presentationStyle="pageSheet" //iOS only
        onRequestClose={() => setVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text
              style={{
                marginBottom: 16,
              }}
            >
              Conteúdo do meu modal
            </Text>
            <Button
              style={{
                paddingHorizontal: 20,
              }}
              onPress={() => setVisible(false)}
            >
              Fechar
            </Button>
          </View>
        </View>
      </Modal>
    </>
  );
}

export default App;
