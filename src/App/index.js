import { StatusBar, SafeAreaView, View, Text, ScrollView } from "react-native";

import { styles } from "./styles";

function App() {
  const posts = Array.from({ length: 11 }, (value, index) => ({
    id: Math.random(),
    title: `Post ${index + 1}`,
  }));

  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{
          gap: 16,
          alignItems: "stretch",
        }}
      >
        <StatusBar barStyle="dark-content" />
        {posts.map((post) => (
          <View key={post.id} style={styles.postContainer}>
            <Text style={styles.postTitle}>{post.title}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
