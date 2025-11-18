import {
  Alert,
  Image,
  Modal,
  PixelRatio,
  SafeAreaView,
  StatusBar,
  Text,
  View,
} from "react-native";

import { Button } from "../componentes/Button";

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
    <>
      <SafeAreaView style={styles.wrapper}>
        <StatusBar barStyle="dark-content" animated />
        <View style={styles.container}>
          <Button onPress={() => setVisible(true)}>Abrir modal</Button>
          <Button onPress={handleShowAlert}>Mostrar alerta</Button>
          <Text>Pixel Ratio: {PixelRatio.get()}</Text>
          <Image
            source={[
              {
                uri: "https://placehold.co/100x100.png",
                width: 100,
                height: 100,
              },
              {
                uri: "https://placehold.co/200x200.png",
                width: 200,
                height: 200,
              },
              {
                uri: "https://placehold.co/300x300.png",
                width: 300,
                height: 300,
              },
            ]}
            style={{
              width: 80,
              height: 80,
            }}
          />
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
