import React from "react";
import {useState} from "react";
import { Text, View, TextInput, TextInputProps } from "react-native";
import { style } from "./styles";
import { Button } from "../../components/Button";
import {useNavigation, NavigationProp} from '@react-navigation/native';
import Chatbot from "../../routes/chatbot";
import { Input } from "../../components/Input";

export default function Info_user (){
     const [nome, setNome] = React.useState('');
     const [idade, setIdade] = React.useState('');
     const [sexo, setSexo] = React.useState('');
     const [genero, setGenero] = React.useState('');

    const navigation = useNavigation<NavigationProp<any>>();
    
    const getDados = () => {
        navigation.navigate('Chatbot');
        console.log('Informações capturadas');
    };

    return(
        <View style={style.container}>
            <View style={style.header}>
                <Text style={style.titulo}>
                    Informe seus dados
                </Text>  
            </View>
            <Input 
                value={nome}
                onChangeText={setNome}
                title="Nome:"
            />
            <Input 
                onChangeText={(text) => setIdade(text.replace(/[^0-9]/g, ''))}
                value={idade}
                title="Idade:"
            />
            <Input 
                value={sexo}
                onChangeText={setSexo}
                title="Sexo:"
            />
            <Input 
                value={genero}
                onChangeText={setGenero}
                title="Genero:"
            />
            <View style={style.boxBottom}>
                <Button 
                    text = "Continuar"
                    onPress={()=>getDados()}
                    
                />
            </View>
        </View>
    ) 
}
