import { StatusBar, SafeAreaView, View, Modal, Text } from "react-native";

import { Button } from "../componentes/Button";

import { styles } from "./styles";
import { useState } from "react";

function App() {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <SafeAreaView style={styles.wrapper}>
        <StatusBar barStyle="dark-content" animated />
        <View style={styles.container}>
          <Button onPress={() => setVisible(true)}>Abrir modal</Button>
        </View>
      </SafeAreaView>
      <Modal visible={visible} animationType="fade" transparent>
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
