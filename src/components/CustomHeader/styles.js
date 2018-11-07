
import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get('window').width; //full width
const height = Dimensions.get('window').height; //full height

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#181818",
  },
  image: {
    width: 40,
    height: 20,
    padding: 5
  }
})

export default styles;
