import { StyleSheet,Dimensions} from "react-native";
import { themas } from "../../global/themes";


export const style = StyleSheet.create({
  Boxinput: {
        width:'100%',
        height:40,
        borderWidth:1,
        borderRadius:40,
        borderColor:themas.colors.AzulEscuro,
        backgroundColor:themas.colors.bgScreen,
        marginTop:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
  },
    input:{
        // backgroundColor:'red',
        height:'100%',
        width:'100%',
        borderRadius:40,
        // paddingHorizontal:20
    },
    titleInput:{
        fontWeight: '300',
        color:themas.colors.AzulEscuro,
        fontSize: 16,
        marginTop: 22,   // Afastamento do header azul
        marginBottom: 5, // Afastamento até o input
        
    },
    label: { // <-- Label padrão para qualquer texto acima do input
        marginLeft:5,
        marginTop:10,
        

  },
    
})