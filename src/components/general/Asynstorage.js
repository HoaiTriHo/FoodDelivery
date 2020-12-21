import AsyncStorage from '@react-native-async-storage/async-storage';
 //Store local data
 const storeData = async (name, value) => {
    try {
        await AsyncStorage.setItem(name, value);
    } catch (e) {
        // saving error
        console.log(e.message);
    }
 }
export const getData = async (name)=>{
    try {
        const value = await AsyncStorage.getItem(name);
        if (value !== null) {
            // value previously stored
            return value;
        }
        else{
            return null
        }
    } catch (e) {
        // error reading value
    }
}

export default storeData;