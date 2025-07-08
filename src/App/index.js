import {
  StatusBar,
  SafeAreaView,
  View,
  Text,
  FlatList,
  RefreshControl,
  ActivityIndicator,
} from "react-native";

import { styles } from "./styles";

function App() {
  const posts = Array.from({ length: 100 }, (value, index) => ({
    id: Math.random(),
    title: `Post ${index + 1}`,
  }));

  return (
    <SafeAreaView style={styles.wrapper}>
      <ActivityIndicator
        animating={true}
        hidesWhenStopped={false} // ios only
        color={"red"}
        size={"large"} // If Number only android
      />
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <FlatList
          refreshControl={
            <RefreshControl
              onRefresh={() => console.log("Atualizando...")}
              refreshing={false}
              //iOS only
              tintColor="red"
              title="Carregando..."
              titleColor="red"
              //Android only
              colors={["red"]}
              progressBackgroundColor={"gray"}
              size={"large"}
            />
          }
          data={posts}
          keyExtractor={(post) => post.id}
          renderItem={({ item: post }) => (
            <View key={post.id} style={styles.postContainer}>
              <Text style={styles.postTitle}>{post.title}</Text>
            </View>
          )}
          // contentContainerStyle={{ gap: 16 }}
          ItemSeparatorComponent={<Text>Separator</Text>}
          getItemLayout={(data, index) => ({
            index,
            length: 64 + 16,
            offset: index * (64 + 16),
          })} // ++ FlatList perf
          ListHeaderComponent={<Text>Header</Text>}
          stickyHeaderIndices={[0, 5]}
          ListFooterComponent={<Text>Footer</Text>}
          ListEmptyComponent={<Text>Empty</Text>}
        />
      </View>
    </SafeAreaView>
  );
}

export default App;
