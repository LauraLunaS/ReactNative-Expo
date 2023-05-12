import React, {Component} from "react";
import {View, Text, Image} from 'react-native';


export default class Filme extends Component{
    render(){
        return(
            <View>
                <Text>deu certo</Text>
                <Image></Image>
            </View>
        )
        // <Text style={styles.nomeFilme}>{this.props.data.nome}</Text>
        // <TouchableOpacity onPress={()=> alert(this.props.data.nome)}
        //  <Image source={{uri: this.props.data.foto}}></Image>
        // </TouchableOpacity>
    }
}

//const styles = StylesSheet.create({
//    container:{

//   },
//    nomeFilme:{sssss
//      color: 'white',
//      fontSize: 18,
//      fontWeight: 'bold',
//      justifyContent: 'center',
//      alignSelf: 'center',
//      marginTop: 30,
//      marginBottom: 20,
//  },
//  capaFilme:{
//      widht: 200,
//      height: 250,
//      alignSelf: 'center'
//  
//))