import Store from './store'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import Boot from './boot'
import Home from './screens/Home'

const router = createSwitchNavigator(
  // Routes
  {
    // Bootup Screen
    boot: Boot,
    // Home Screen
    home: Home
  },
  // SwitchNavigator Config
  {
    initialRouteName: 'boot',
    defaultNavigationOptions: {
      header: null
    }
  }
)

export default Store.withStore(createAppContainer(router))
