import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  autocompleteContainer: {
    flex: 1,
    left: 0,
    right: 0,
    top: 0,
    zIndex: 1,
    borderWidth: 0,
  },
  inputContainerStyle: {
    borderWidth: 0,
    borderBottomWidth: 1,
  },
  input: {
    color: "#fff",
  },
  maxAmount: {
    color: "#fff",
    fontSize: 16,
  },

});

export default styles;
