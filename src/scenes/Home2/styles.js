import {
  StyleSheet,
  Dimensions,
} from 'react-native';
const { width } = Dimensions.get('window');
export default styles = StyleSheet.create({
  container: {
    backgroundColor: '#131313',
    flex: 1,
  },
  headerText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10
  },
  subHeaderText: {
    color: '#949494',
    fontSize: 12,
    marginLeft: 10,
    marginRight: 10
  },
  bulletText: {
    color: '#6c6c6c',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 7,
    marginRight: 20
  },
  headerView: {
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#171717',
    marginTop: 20
  },
  headerLogoImage: {
    width: 215,
  },
  contentView: {
    flex: 1
  },
  hrLine: {
    height: 1,
    width: width,
    backgroundColor: '#777',
    opacity: 0.5,
    marginTop: 5,
    marginBottom: 5,
  },
  bulletView: {
    flexDirection: 'row',
    marginBottom: 5,
    marginRight: 10
  },
  buttetTextView: {
    width: 10,
    height: 10,
    backgroundColor: '#2e8be6',
    borderRadius: 5,
    margin: 10
  },
  nextButtonView: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 10
  },
  nextButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  touchableButton: {
    width: 120,
    height: 36,
    borderWidth: 1,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  blockChainImageView: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10
  },
  blockChainImage: {
    width: 190,
    height: 150
  },
  backButton: {
    backgroundColor: '#333'
  },
  nextButton: {
    backgroundColor: '#2e8be6'
  },
});
