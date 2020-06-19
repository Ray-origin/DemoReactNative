import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  
} from 'react-native';
import DScreen from './DScreen';
import ListScreen from './ListScreen';

export default class Result extends React.Component  {
    constructor(props){
        super(props);
        this.state={
            count:0,
        }
    }
//       componentDidMount(){
//     const counter= this.props.route.params.Acounter.count;
//     this.setState({
//       count:counter
//     });
//   }
    render(){
    const {navigation} = this.props;        
    const Dem = this.props.route.params.timeResult;
    const FinalResult= (Dem*0.45).toFixed(2);
        return(
            <View>
            <View style={style.banner}>
                <Image source={{uri: 'https://advantagetrophy.com/wp-content/uploads/2019/05/advantage-trophy-logo.png'}}
                style={{width:200, height:200}}/>
                <Text style={style.Text}>CONGRATULATION, YOU HAVE COMPLETED THE EXERCISE</Text>
                <View style={style.ButtonWarpper}>

                    <TouchableOpacity onPress={() => navigation.navigate('DScreen') } > 
                        <Text style={style.Text}>TRY AGAIN</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('HOME WORKOUT') } >
                        <Text style={style.Text}>ANOTHER EXERCISES</Text> 

                    </TouchableOpacity>
                </View>
                <Text style={{fontWeight:'bold', fontSize:30}}>YOU HAVE BURNED:</Text>
                
            </View>
                <View style={style.kcalContent}>
                <Text style={style.kcal}> {FinalResult} KCAL</Text>
                </View>
            </View>
        )
    }
}

const style = StyleSheet.create({
    banner:{
    padding:20,
    backgroundColor:'#81F7F3',
    elevation:10,
    marginBottom: 16,
    alignItems:'center',
    justifyContent:'center',
    height:400
    },
    Text:{
        fontSize:20,
        color:'white',
        textAlign:'center',
        textTransform:'uppercase',
        fontWeight:'bold'
    },
    ButtonWarpper:{
        flex:1,
        width:'100%',
        flexDirection:'row',
        justifyContent: 'space-around',
        alignItems:'center',
    },
    kcal:{
        fontWeight:'bold',
        fontSize:40,
        textAlign:'center'
    },
    kcalContent:{
        justifyContent:'center'
    },
    // Button:{
    //     color:'#81F7F3',
    // }

});