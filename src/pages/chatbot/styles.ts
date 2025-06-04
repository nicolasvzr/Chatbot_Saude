import { StyleSheet,Dimensions } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({

    // container: {
    //     flex:1, 
    //     alignItems:'center',
    //     justifyContent: 'center'
    //  },
    boxTop: {
        height:Dimensions.get('window').height/3,
        width: '100%',
        //backgroundColor:'red',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    TextPergunta: {
        fontWeight: '300',
        fontSize: 20,
        textAlign: 'center'

    },
    boxMid: {
        height:Dimensions.get('window').height/3,
        width: '100%',
        justifyContent: 'center', 
        alignItems: 'center'
        //backgroundColor: 'blue'
    },
    boxBottom: {
        height:Dimensions.get('window').height/3,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 150, 
        //backgroundColor: 'green'
    },
    input:{
        height: 50,
        width: '80%',
        margin: 12,
        borderWidth: 2,
        borderRadius: 40,
        padding: 10,
        
    }

})