import {StyleSheet} from 'react-native'
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes'
export default StyleSheet.create({
    fontegrande:{
        fontSize:48,
        //backgroundColor:'#333333',
        color:'#4F4F4F',
        flexGrow:12,
        justifyContent:"center",
        alignItems:"center",
        padding:20,
    },

    ajuda:{
        backgroundColor:'#1C1C1C',
        width:50,
        height:50,
        padding:0,
        alignItems:'center',
        textAlign:'center',
        borderRadius:50,
        marginLeft:300,
    },

    container:{
        paddingTop:23,
        alignItems:'center',
        backgroundColor:'#363636',
        borderRadius:20,
        height:500,
    },

    Text:{
        marginTop:20,
        fontFamily:'serif'
    },
    Text2:{
        marginTop:0,
        fontFamily:'serif',
        borderRadius:699, 
    },

    input:{
        margin:15,
        height:40,
        width:30,
        borderColor:'#a020f0',
        borderWidth:1,
        textAlign:'center',
    },
  
    submitButton:{
        backgroundColor:'#ffaA23',
        padding:10,
        margin:15,
        height:40,
        width:250,
        borderRadius:100,
        marginTop:191,
        },

    submitButtonText:{
            color:'white',
            alignItems:'center',
            textAlign:'center',
            fontFamily:'serif',
            fontStyle: 'italic',
        },


switchstilo:{
        flex: 12,
      alignItems: "center",
      justifyContent: "center"
    }
  
})