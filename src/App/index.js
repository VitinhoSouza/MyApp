import {
  StatusBar,
  SafeAreaView,
  View,
  Text,
  RefreshControl,
  ActivityIndicator,
  SectionList,
} from "react-native";

import { styles } from "./styles";

function App() {
  const posts = Array.from({ length: 50 }, (value, index) => ({
    id: Math.random(),
    title: `Post ${index + 1}`,
  }));

  function Separator() {
    return <Text>Separator</Text>;
  }

  return (
    <SafeAreaView style={styles.wrapper}>
      <ActivityIndicator
        animating={false}
        hidesWhenStopped={false} // ios only
        color={"red"}
        size={"large"} // If Number only android
      />
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <SectionList
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
          keyExtractor={(post) => post.id}
          renderItem={({ item: post }) => (
            <View key={post.id} style={styles.postContainer}>
              <Text style={styles.postTitle}>{post.title}</Text>
            </View>
          )}
          contentContainerStyle={{ gap: 16 }}
          ItemSeparatorComponent={Separator}
          getItemLayout={(data, index) => ({
            index,
            length: 64 + 16,
            offset: index * (64 + 16),
          })} // ++ perf
          ListHeaderComponent={<Text>Header</Text>}
          // stickyHeaderIndices={[0, 5]} // Não funciona
          ListFooterComponent={<Text>Footer</Text>}
          ListEmptyComponent={<Text>Empty</Text>}
          sections={[
            {
              title: "Primeira seção",
              data: posts.slice(0, 5),
              renderItem: ({ item: post }) => (
                <View key={post.id} style={styles.postContainer}>
                  <Text style={styles.postTitle}>{post.title} - Section 1</Text>
                </View>
              ),
            },
            {
              data: posts.slice(5, 50),
            },
          ]}
          renderSectionHeader={({ section: { title } }) => (
            <View>
              <Text>Section Header - {title}</Text>
            </View>
          )}
          stickySectionHeadersEnabled={false} //iOS only
          stickyHeaderHiddenOnScroll //iOS only
        />
      </View>
    </SafeAreaView>
  );
}

export default App;
