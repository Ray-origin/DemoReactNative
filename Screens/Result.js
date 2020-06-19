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
    const {Dem} = this.state.count;
        return(
            <View style={style.banner}>
                <Image source={{uri: 'https://advantagetrophy.com/wp-content/uploads/2019/05/advantage-trophy-logo.png'}}
                style={{width:200, height:200}}/>
                <Text style={style.Text}>Chúc mừng, bạn đã hoàn thành bài tập</Text>
                <View style={style.ButtonWarpper}>

                    <TouchableOpacity onPress={() => navigation.navigate('DScreen') } > 
                        <Text style={style.Text}>làm lại</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('HOME WORKOUT') } >
                        <Text style={style.Text}>Chọn bài tập khác</Text> 

                    </TouchableOpacity>
                </View>
                <Text>{Dem}</Text>
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
    // Button:{
    //     color:'#81F7F3',
    // }

});