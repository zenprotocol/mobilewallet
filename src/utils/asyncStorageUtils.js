import { AsyncStorage } from "react-native";

class _AsyncStorageUtils {

  // Save
  storeData = (key, item) => {
    console.log("storeData", key, item);
    try {
      AsyncStorage.setItem(key, JSON.stringify(item));
    } catch (error) {
      // Error saving data
      console.log(error);
    }
  }

  // Retrieve
  retrieveData = (key) => {
    console.log("retrieveData");
    let value;
    try {
      value = AsyncStorage.getItem(key);
     } catch (error) {
       console.log(error);
     }
  }

  // Delete
  delete = async () => {
    try {
      await AsyncStorage.removeItem('userId');
    } catch (error) {
      // Error retrieving data
      console.log(error);
    }
  }

}

const asyncStorageUtils = new _AsyncStorageUtils()

export default asyncStorageUtils;
