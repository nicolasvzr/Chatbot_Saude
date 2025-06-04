import React from "react";
import {
    Text,
    View,
    Image,
    TouchableOpacity,
} from "react-native";

import { style } from "./styles";
import logo from '../../assets/logo.png';
import { Button } from "../../components/Button";
import { useNavigation, NavigationProp } from '@react-navigation/native';


export default function Login (){

    const navigation = useNavigation<NavigationProp<any>>();

    //const[email,setEmail] = useState('';)

    const getLogin = () => {
        navigation.navigate('BottomRoutes');
        console.log('Navegando para Informações do Usuário');
    };
    
    return (
            <View style={style.container}> 
                <View style={style.boxTop}>
                    <Image
                        source={logo}
                        style={style.logo}
                        resizeMode="contain"
                    /> 
                    <Text style={style.text}>  Bem vindo! </Text>
                </View>
                <View style={style.boxMid}>  
                    <Text style={style.boxMid}>Olá, esse é o CuidAiSaude, por favor clique em ‘Iniciar’ para começar seu atendimento</Text> 
                </View>
                <View style={style.boxBottom}>
                   <Button 
                        text = "INICIAR"
                        onPress={()=>getLogin()}
                   />
                </View>
            </View>
    );
}