import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Bai01 from './screens/Bai01';
import Bai03 from './screens/Bai03';

export default function App() {
  return (
    <View style={styles.container}>
      <Bai03 />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
