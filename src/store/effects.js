import { AsyncStorage } from 'react-native'

export default function (store) {
  // Persist a state on update
  store.onAll().subscribe(async ({ key, previousValue, value }) => {
    await AsyncStorage.setItem(key, JSON.stringify(value))
  })

  return store
}