import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Images from '@dplus/images'
import { travel } from './data/travel';
export default function App() {
  return (
    <SafeAreaView  style={styles.container}>
      <Text>Images</Text>
      <Images data={travel.map(item => item.thumbnail)} imageContainerStyle={{ backgroundColor: 'green',height: 100}} />
      <StatusBar style="auto" />
    </SafeAreaView>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
