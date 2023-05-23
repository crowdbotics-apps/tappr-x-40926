import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { ImageBackground } from "react-native";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled5 = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><Pressable onPress={() => {
        navigation.navigate("signup");
      }}><View style={styles.fgltWWHF}><ImageBackground style={styles.BtyfZrla} source={require("./project_20230522_1008408-01.png")} resizeMode="cover"></ImageBackground></View></Pressable></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  fgltWWHF: {
    height: 562,
    width: 346,
    backgroundColor: "#000000",
    borderRadius: 0,
    color: "#777777"
  },
  BtyfZrla: {
    width: 340,
    height: 345
  }
});
export default Untitled5;