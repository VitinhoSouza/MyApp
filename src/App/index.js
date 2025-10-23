import {
  StatusBar,
  SafeAreaView,
  View,
  Modal,
  Text,
  Alert,
  ActionSheetIOS,
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

  function handleShowActionSheet() {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ["Cancel", "Normal", "Destructive", "Disabled"],
        destructiveButtonIndex: 2,
        cancelButtonIndex: 0,
        title: "Título do Action Sheet",
        message: "Mensagem do Action Sheet",
        disabledButtonIndices: [3],
        userInterfaceStyle: "dark",
        tintColor: "purple",
        cancelButtonTintColor: "#0f0", //BUG possible
      },
      (buttonIndex) => {
        console.log("Button index pressed:", buttonIndex);
      }
    );
  }

  function handleShowShareActionSheet() {
    ActionSheetIOS.showShareActionSheetWithOptions(
      {
        message: "Mensagem para compartilhar",
        url: "https://jstack.com.br",
        subject: "Assunto do compartilhamento",
        excludedActivityTypes: ["com.apple.UIKit.activity.PostToTwitter"],
      },
      (error) => console.log("Error sharing:", error),
      (success, method) => {
        if (success) {
          console.log("Shared via", method);
        }
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
          <Button onPress={handleShowPrompt}>Mostrar prompt</Button>
          <Button onPress={handleShowActionSheet}>Mostrar ActionSheet</Button>
          <Button onPress={handleShowShareActionSheet}>
            Mostrar share ActionSheet
          </Button>
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
