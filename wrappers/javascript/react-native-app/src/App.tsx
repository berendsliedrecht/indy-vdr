import { IndyVdrReactNative } from 'indy-vdr-react-native'
import { StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Indy Vdr version: {new IndyVdrReactnative().version()}</Text>
    </View>
  )
}
