import { StyleSheet, Text, View, Button, TextInput, Modal } from 'react-native';
import React from 'react';

const AddModal = (props)=>{
    const [text,setText]=React.useState(null);
    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.container}>
            <TextInput style={styles.inputContainer} value={text} placeholder="What's in your mind!" onChangeText={(newText)=>setText(newText)} />
            <View style={styles.buttonContainer}>
            <View style={styles.buttonWrapper}>
            <Button title="Add" onPress={()=>{if(text) {setText(null);props.onAdd(text)}}} />
            </View>
            <View style={styles.buttonWrapper}>
            <Button title="Cancel" onPress={()=>{setText('');props.onCancel()}} />
            </View>
            </View>
            </View>
            </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
    },
    buttonContainer:{
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonWrapper:{
      width: 100,
      margin: 5,
      borderRadius: 5,
    },
    inputContainer:{
      borderWidth: 1,
      padding: 5,
      margin: 5,
      width: '80%',
    
    }
  });

  export default AddModal;