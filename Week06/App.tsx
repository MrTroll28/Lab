import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Bai01 from './screens/Bai01';

export default function App() {
  return (
    <View style={styles.container}>
      <Bai01 />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
