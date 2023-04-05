
import { View, Text, StyleSheet, Pressable } from "react-native";

const GoalItem= (props)=>{
    console.log(props);
    return(
        <View style={styles.itemContainer} key={props.description}>
        <Pressable onPress={props.deleteHandler.bind(this,props.description)}>
        
            <Text style={styles.textStyle}>{props.description}</Text>
        </Pressable>
        </View>

    )

}

const styles=StyleSheet.create({
    itemContainer:{
        width: '70%',
        height: 50,
        backgroundColor: '#5B85AA',
        margin: 5,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    textStyle:{
        margin: 5,
        fontSize: 20,
        color: '#fff',

    }
})

export default GoalItem;