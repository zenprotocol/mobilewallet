import { AsyncStorage } from "react-native";

class _AsyncStorageUtils {
  retrieveDataValue;

  // Save
  storeData = async (key, item) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(item));
    } catch (error) {
      // Error saving data
      console.log(error);
    }
  };

  retrieveData = (key) => {
    this._retrieveData(key).then(res => {
      this.retrieveDataValue = res;
    })
    return this.retrieveDataValue;
  }
  
  // Retrieve
  _retrieveData = async key => {
    try {
      const item = await AsyncStorage.getItem(key);
      return item;
    } catch (error) {
      console.log(error);
    }
  };

  // Delete
  delete = async () => {
    try {
      await AsyncStorage.removeItem("userId");
    } catch (error) {
      // Error retrieving data
      console.log(error);
    }
  };
}

const asyncStorageUtils = new _AsyncStorageUtils();

export default asyncStorageUtils;
