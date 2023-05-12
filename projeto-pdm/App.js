import React, {Component} from "react";
import { SafeAreaView, StyleSheet, Text, FlatList } from 'react-native';
//import api
import Filme from './src/Pages/Filmes/index'

export default class App extends Component{

  //constructor(props){
    //super(props);
    //this.state = {
      //filmes: []
    //}
  //}

  //async componentDidMount(){
    //const response = await api.get(/filmes)
    //this.setState({
      //filmes: response.data
    //});
  //}



  render(){
    return(
      <SafeAreaView style={styles.container}>
        <Text>Olá Mundo</Text>
        < Filme />
      </SafeAreaView>
    )
    //<SafeAreaView style={styles.container}>
    //<FlatList
    //data={this.state.filmes}
    //keyEctractor={{item} => <Filme data={item} />}
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
