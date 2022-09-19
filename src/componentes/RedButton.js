import {StyleSheet, View, TouchableOpacity } from 'react-native';

export default function RButton(){
    return(

    <TouchableOpacity>
          <View style={styles.vermelho}></View>
    </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
    vermelho: {
        borderRadius: 150,
        backgroundColor: 'red',
        height: 150,
        width: 150,
        margin: 2.5,
    },
});