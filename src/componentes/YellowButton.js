import {StyleSheet, View, TouchableOpacity } from 'react-native';

export default function YButton(){
    return(
    <TouchableOpacity>
          <View style={styles.yellow}></View>
    </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    yellow: {
        borderRadius: 150,
        backgroundColor: 'yellow',
        height: 150,
        width: 150,
        margin: 2.5,
      },
})
