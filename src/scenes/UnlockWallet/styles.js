import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "500"
  },
  card: {
    backgroundColor: "#121212",
    color: "#e6e6e6",
    alignItems: "center",
    flex: 0,
    marginTop: 10
  },
  container: {
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center'
  },
  h1: {
    color: '#e6e6e6',
    fontSize: 22,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10
  },
  h3: {
    color: '#949494',
    fontSize: 16,
    marginLeft: 20,
    marginRight: 20,
  },
  hrLine: {
    height: 1,
    backgroundColor: '#949494',
    opacity: 0.6,
    margin: 20
  },
  button: {
    marginLeft: 40,
    marginRight: 40,
    marginTop: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#949494',
    marginLeft: 40,
    marginRight: 10,
    marginTop: 10,
    color: '#fff',
    height: 40,
    flex: 1
  },
  anchorButton: {
    color: '#2f8be6',
    textDecorationLine: 'underline',
  }
});


export default styles;
