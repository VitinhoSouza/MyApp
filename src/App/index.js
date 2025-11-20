import {
  DrawerLayoutAndroid,
  SafeAreaView,
  StatusBar,
  Text,
  View,
} from "react-native";

import { Button } from "../componentes/Button";

import { useRef } from "react";
import { styles } from "./styles";

function App() {
  const drawerRef = useRef(null);

  function handleOpenMenu() {
    drawerRef.current?.openDrawer();
  }

  function handleCloseMenu() {
    drawerRef.current?.closeDrawer();
  }

  return (
    <SafeAreaView style={styles.wrapper}>
      <DrawerLayoutAndroid
        ref={drawerRef}
        drawerPosition="right"
        drawerBackgroundColor="rgba(255, 0, 0, 0.5)"
        drawerWidth={200}
        drawerLockMode="locked-open"
        renderNavigationView={() => (
          <View>
            <Text>Oi meu chapa!</Text>
            <Button onPress={handleCloseMenu}>Fechar menu</Button>
          </View>
        )}
      >
        <StatusBar barStyle="dark-content" animated />
        <View style={styles.container}>
          <Button onPress={handleOpenMenu}>Abrir menu</Button>
        </View>
      </DrawerLayoutAndroid>
    </SafeAreaView>
  );
}

export default App;
