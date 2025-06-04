import { Button, Dimensions, StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({
    container:{
       flex:1, 
       alignItems:'center',
       justifyContent: 'center'
    },
     boxTop: {
        height:Dimensions.get('window').height/3,
        width: '100%',
        backgroundColor:themas.colors.lightGray,
        alignItems: 'center'

     },
     boxMid: {
        height:Dimensions.get('window').height/4,
        width: '100%',
        backgroundColor:themas.colors.lightGray,
        paddingHorizontal: 37,
        textAlign: 'center'

     },
     boxBottom: {
        height:Dimensions.get('window').height/3,
        width: '100%',
        backgroundColor:themas.colors.lightGray,
        alignItems: 'center'
     },
     logo:{
        width:500,
        height: 150
     },
     text:{
        fontWeight: 'bold',
        marginTop: 50,
        fontSize: 25
     },
     Button:{
      width: 250,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:themas.colors.primary,
      borderRadius:40,
      shadowColor: "#000",
      shadowOffset: {
	      width: 0,
	      height: 10,
      },
      shadowOpacity: 0.51,
      shadowRadius: 13.16,

elevation: 20,
     },
     textButton:{
      fontSize: 16,
      color: '#FFFF',
      fontWeight: 'bold'
     }

})