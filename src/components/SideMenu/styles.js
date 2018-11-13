import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#181818",
    color: "#fff",
  },
  banner: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
  listItem: {
    borderBottomWidth: 0,
  },
  listItemText: {
    fontSize: 18,
    color: '#949494',
  },
  info: {
    flex: 1,
    padding: 20,
    flexDirection: 'column',
    borderBottomWidth: 0,
  }
});

export default styles;
