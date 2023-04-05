import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import AddModal from './components/Addmodal';
import GoalItem from './components/GoalItem';
import React from 'react';


export default function App() {

  const [showModal,setShowModal] = React.useState(false);
  const [goals,setGoals]=React.useState([]);

  function addGoalHandler(goal){
    setGoals(goals=>[...goals,{key:goal,description:goal}]);
    setShowModal(false);
  }

  function onCancelHandler(){
    setShowModal(false);
  }
  function onShowHandler(){
    setShowModal(true);
  }

  function deleteHandler(g){
    setGoals(goals.filter((goal)=>goal.description!==g));
  }

  return (
    <View style={styles.container}>
      <AddModal visible={showModal} onCancel={onCancelHandler} onAdd={addGoalHandler} />
      { !showModal && (
      <><View style={styles.upperSection}>
          <Text style={{ fontSize: 20, fontWeight: 300, marginBottom: 20, marginTop: 20 }}>Goal Gives our life a meaning</Text>
          <View style={styles.buttonContainer}>
            <Button title="Add Goals" onPress={onShowHandler} />
          </View>
        </View><View style={styles.lowerSection}>
          {goals.map(goal=>(<GoalItem deleteHandler={deleteHandler} description={goal.description} />))}
          </View></>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  upperSection: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 2,
    margin: 5,
  },
  lowerSection: {
    flex: 4,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
  },
  buttonContainer:{
    borderRadius: 20,
  }
});
