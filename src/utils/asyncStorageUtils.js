import { AsyncStorage } from "react-native";

class _AsyncStorageUtils {
  retrieveDataValue;

  // Save
  storeData = async (key, item) => {
    try {
      await AsyncStorage.setItem(key, item);
    } catch (error) {
      // Error saving data
      console.log(error);
    }
  };

  getItemValue = key => {
    this.retrieveData(key).then( res => {
      console.log("asyncStorageUtils");
      console.log(res);
      return res;
    })
  }

  // Retrieve
  retrieveData = async key => {
    try {
      await AsyncStorage.getItem(key);
    } catch (error) {
      console.log(error);
    }
  };

  // Delete
  delete = async (key) => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      // Error retrieving data
      console.log(error);
    }
  };
}

const asyncStorageUtils = new _AsyncStorageUtils();

export default asyncStorageUtils;
