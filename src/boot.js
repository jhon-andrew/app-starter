import React from 'react'
import Store from './store'
import { AppLoading } from 'expo'
import { AsyncStorage } from 'react-native'

class Boot extends React.Component {
  constructor (props) {
    super(props)
    this.initializeBootup()
  }

  // Bootup Logic
  async initializeBootup () {
    const { navigation, store } = this.props

    // Restore previously persisted states to the current app state
    const persistedStates = await AsyncStorage.getAllKeys()

    if (persistedStates.length > 0) {
      const states = await AsyncStorage.multiGet(persistedStates)
      states.forEach(pair => {
        store.set(pair[0])(JSON.parse(pair[1]))
      })
    }

    // Simulate loading for 3 seconds
    setTimeout(() => {
      navigation.navigate('home')
    }, 3000)
  }

  render () {
    return (<AppLoading autoHideSplash={false} />)
  }
}

export default Store.withStore(Boot)
