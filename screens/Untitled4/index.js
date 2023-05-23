import { Pressable } from "react-native";
import { ImageBackground } from "react-native";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled4 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <Pressable><ScrollView contentContainerStyle={{
        backgroundColor: '#f0f0f1',
        padding: 10,
        position: 'relative',
        flex: 1
      }}><Pressable><View style={styles.sdLRBULo}><Pressable><ImageBackground style={styles.bJeTAdnz} source={require("./project_20230522_1008408-01.png")} resizeMode="cover"></ImageBackground></Pressable></View></Pressable></ScrollView></Pressable>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  sdLRBULo: {
    height: 552,
    width: 338,
    backgroundColor: "#000000",
    borderRadius: 6,
    color: "#777777",
    flexDirection: "row",
    flex: 1
  },
  bJeTAdnz: {
    width: 335,
    height: 362,
    position: "absolute",
    left: 1.5,
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between"
  }
});
export default Untitled4;