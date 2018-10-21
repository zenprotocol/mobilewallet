import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  mainContent: {
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'space-around',
    color: '#e6e6e6',
  },
  header: {
    color: '#e6e6e6',
    fontSize: 20,
    fontWeight: '500',
  },
  detailText: {
    color: '#949494',
    fontSize: 12,
  },
  cardText: {
    fontSize: 18,
    color: '#e6e6e6',
    fontWeight: '400',
  },
  image: {
    height: 63,
    width: 73,
    flex: 1,
  },
  card: {
    backgroundColor: '#191919',
    color: '#e6e6e6',
    alignItems: 'center',
    flex: 0,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
  },
  secondaryButton: {
    backgroundColor: '#333',
  },
});

export default styles;