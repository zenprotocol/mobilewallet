import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  mainContent: {
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  image: {
    flex:1,
    alignSelf: 'center',
    height: 150,
    width: 150,
    marginBottom: 16,
  },
  item: {
    flexDirection: 'row',
    padding: 10,
  },
  bullet: {
    color: '#2f8be6',
    fontSize: 12,
  },
  text: {
    color: '#777777',
    fontSize: 16,
    paddingLeft: 5,
  },
  title: {
    fontSize: 22,
    color: '#e6e6e6',
    backgroundColor: 'transparent',
    textAlign: 'center',
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#2f8be6',
  },
});
export default styles;
