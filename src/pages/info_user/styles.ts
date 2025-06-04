import { StyleSheet,Dimensions } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({

  container: {
    backgroundColor: 'white',
    padding: 20,
  },
  header: {
    width: '100%',
    height: Dimensions.get('window').height / 6,
    justifyContent: 'flex-end',
    //justifyContent: 'center'
  },
  titulo: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 400
  },
  label: { // <-- Label padrão para qualquer texto acima do input
    fontSize: 16,
    marginTop: 40,   // Afastamento do header azul
    marginBottom: 5, // Afastamento até o input
  },
  Boxinput: {
      minHeight: 50,
    maxHeight: 150,
    borderWidth: 1,
    borderColor: '#000',
    paddingHorizontal: 15,
    borderRadius: 40,
    fontSize: 16,
  },
boxBottom: {
    height: Dimensions.get('window').height / 3,
    width: '100%',
    //backgroundColor: themas.colors.lightGray,
    alignItems: 'center',
    justifyContent: 'flex-end', // <-- Joga para baixo
    paddingBottom: 150,          // <-- Afastamento do rodapé
},

});

