import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  mainContent: {
    backgroundColor: "#121212",
    alignItems: "center",
    justifyContent: "space-around",
    color: "#e6e6e6",
    margin: 20
  },
  header: {
    color: "#e6e6e6",
    fontSize: 20,
    fontWeight: "500"
  },
  detailText: {
    color: "#949494",
    fontSize: 13
  },
  cardText: {
    fontSize: 16,
    color: "#e6e6e6",
    fontWeight: "400",
    textAlign: 'center',
  },
  image: {
    height: 50,
    width: 'auto',
    flex: 1
  },
  card: {
    backgroundColor: "#191919",
    color: "#e6e6e6",
    alignItems: "center",
    flex: 0,
    marginTop: 10
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "500"
  },
  secondaryButton: {
    backgroundColor: "#333"
  }
});

export default styles;
