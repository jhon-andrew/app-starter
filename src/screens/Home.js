import React from 'react'
import Store from '../store'
import { SplashScreen, Constants } from 'expo'
import { Container, Header, Body, Title, Content, View, Text } from 'native-base'
import { StyleSheet, Dimensions } from 'react-native'
import theme from 'native-base/src/theme/variables/platform'

const styles = StyleSheet.create({
  verticalCenter: {
    flexDirection: 'column',
    justifyContent: 'center',
    minHeight: Dimensions.get('window').height - theme.toolbarHeight - Constants.statusBarHeight - 20
  },
  centerText: {
    textAlign: 'center'
  }
})

class Home extends React.Component {
  constructor (props) {
    super(props)
  }

  componentDidMount () {
    SplashScreen.hide()
  }

  render () {
    return (
      <Container>
        <Header>
          <Body>
            <Title>App Starter</Title>
          </Body>
        </Header>
        <Content padder>
          <View style={styles.verticalCenter}>
            <Text style={styles.centerText}>Refer to README file for more information.</Text>
          </View>
        </Content>
      </Container>
    )
  }
}

export default Store.withStore(Home)
