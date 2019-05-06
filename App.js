import React from 'react'
import { Font, Constants } from 'expo'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { setCustomText, setCustomTextInput } from 'react-native-global-props'
import { Root } from 'native-base'
// import getTheme from './native-base-theme/components'
// import customTheme from './native-base-theme/variables/custom-theme'
import Store from './src/store'
import Router from './src/router'

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      initialAssetsLoaded: false
    }
  }

  async componentDidMount () {
    // Load custom fonts
    await Font.loadAsync({
      // Required by NativeBase
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      ...MaterialCommunityIcons.font,
      // Add custom fonts here
    })

    // Set global props & styles
    setCustomText({ style: {
      fontFamily: 'Roboto'
    } })
    setCustomTextInput({ style: {
      fontFamily: 'Roboto'
    } })

    this.setState({ initialAssetsLoaded: true })
  }

  render () {
    const { initialAssetsLoaded } = this.state

    if (initialAssetsLoaded) {
      return (
        <Root style={{ paddingTop: Constants.statusBarHeight }}>
          <Store.Container>
            {/* <StyleProvider style={getTheme(customTheme)}> */}
              <Router />
            {/* </StyleProvider> */}
          </Store.Container>
        </Root>
      )
    }

    return null
  }
}
