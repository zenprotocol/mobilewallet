import { AsyncStorage } from "react-native";

class _AsyncStorageUtils {
  retrieveDataValue;

  // Save
  storeData = (key, item) => {
    console.log("storeData", key, item);
    try {
      AsyncStorage.setItem(key, JSON.stringify(item));
    } catch (error) {
      // Error saving data
      console.log(error);
    }
  };

  // Retrieve
  retrieveData = key => {
    try {
      AsyncStorage.getItem(key).then(val => {
        this.retrieveDataValue = val;
      })
    } catch (error) {
      console.log(error);
    }
    return this.retrieveDataValue;
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
