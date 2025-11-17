import {
  Alert,
  ImageBackground,
  Modal,
  SafeAreaView,
  StatusBar,
  Text,
  View,
} from "react-native";

import { Button } from "../componentes/Button";

import imageDefault from "../images/default.jpg";

import { useState } from "react";
import { styles } from "./styles";

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

  return (
    <ImageBackground
      source={{
        uri: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?q=80&w=749&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      }}
      defaultSource={imageDefault}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={styles.wrapper}>
        <StatusBar barStyle="dark-content" animated />
        <View style={styles.container}>
          <Button onPress={() => setVisible(true)}>Abrir modal</Button>
          <Button onPress={handleShowAlert}>Mostrar alerta</Button>
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
    </ImageBackground>
  );
}

export default App;
