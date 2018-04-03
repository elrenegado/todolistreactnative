//import stuff

import React from 'react';
import {View, Text, TextInput, Button, TouchableOpacity} from 'react-native';


//create stuff
class App extends React.Component{
  state = {
    text: "",
    todo: []
  }

  addTodo = () => {
    var newTodo = this.state.text;
    var arr = this.state.todo;
    arr.push(newTodo);
    this.setState({todo: arr, text: ""});
  }

  deleteTodo = (t) => {
    var arr = this.state.todo;
    var pos = arr.indexOf(t);
    arr.splice(pos,1);
    this.setState({todo: arr});
  }
  renderTodos = () => {
    return this.state.todo.map(t => {
      return (
        <TouchableOpacity key={t}>
          <Text
          style = {styles.ToDo} 
          onPress={() => {this.deleteTodo(t)}}
          > {t} </Text>
        </TouchableOpacity>
      )
    })
  }
  render() {
    return (
      <View style = {styles.wholePage}>
      <View style = {styles.viewStyle}>
        <Text style = {styles.header}> ToDos App </Text>
        <TextInput 
          style = {styles.inputStyle}
          onChangeText = {(text) => this.setState({text})}
          value = {this.state.text}
        />
        <Button 
          title = "Add Todo"
          onPress = {this.addTodo}
          color="#1D2B64"
        />
        <View style={{marginTop:100}}/>
        {this.renderTodos()}
      </View> 
      </View> 
    )
  }
}

const styles = {
    wholePage: {
      backgroundColor: '#93F9B9',
      flex: 1
    }, 
    viewStyle: {
      marginTop: 30,
      alignItems: 'center', 
      justifyContent: 'center',
      margin: 10
    },
    inputStyle: {
      height: 40,
      borderColor: "#1abc9c",
      borderWidth: 1,
      margin: 40,
      width: 350,
      padding: 10 
    },
    header: {
      fontSize: 30,
      color: '#8E54E9',
      fontWeight: 'bold'
    },
    ToDo: {
      fontSize: 24,
      color: "#AA076B"
    }
}
//export stuff

export default App;