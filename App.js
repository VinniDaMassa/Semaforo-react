import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import RButton from './src/componentes/RedButton';
import YButton from './src/componentes/YellowButton';
import GButton from './src/componentes/GreenButton';

export default function App() {

  return (
    <View style={styles.container}>
      <Text style={styles.Text}>Semáforo</Text>
      <View style={styles.contorno}>
        <RButton></RButton>
        <YButton></YButton>
        <GButton></GButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 412,
    height: 915,
    backgroundColor: '',
    backgroundColor: '#ECF0F1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contorno: {
    backgroundColor: '#000',
    borderRadius: 20,
    width: 300,
    height: 700,
    alignItems: 'center',
    justifyContent: 'center',
  },
})