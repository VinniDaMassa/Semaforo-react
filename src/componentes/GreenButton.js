import { StyleSheet, View, TouchableOpacity } from "react-native";

export default function GButton(){
    return(
    <TouchableOpacity>
        <View style={styles.green}></View>
    </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    green: {
        borderRadius: 150,
        backgroundColor: 'green',
        height: 150,
        width: 150,
        margin: 2.5,
    },
})