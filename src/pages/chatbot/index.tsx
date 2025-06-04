import React from "react"
import { Text, View, NativeSyntheticEvent, TextInputContentSizeChangeEventData, Alert, ActivityIndicator, KeyboardAvoidingView,ScrollView,TouchableWithoutFeedback, Platform,Keyboard } from "react-native";
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { style } from "./styles";
import { Input } from "../../components/Input";
import {useState} from "react";
import { TextInput } from "react-native-gesture-handler";
import { Button } from "../../components/Button";

export default function Chatbot (){
    const [text, onChangeText] = React.useState('');
    const [inputHeight, setInputHeight] = useState(45); // altura inicial
    const maxHeight = 150;

    const handleContentSizeChange = (event: NativeSyntheticEvent<TextInputContentSizeChangeEventData>) => {
        let height = event.nativeEvent.contentSize.height;
        if (height < 45) {
            height = 45; // altura mínima
        } else if (height > maxHeight) {
            height = maxHeight; // altura máxima
        }
        setInputHeight(height);
    };

    const navigation = useNavigation<NavigationProp<any>>();

    const getEnviar = () => {
        navigation.navigate('')
        console.log('Enviando pergunta para IA')

    };

    //criar comunicação do chatbot

    const [mensagem, setMensagem] = useState('');
    const [loading, setLoading] = useState(false);

    const enviarPergunta = async () => {
    if (mensagem.trim() === '') {
      Alert.alert('Aviso', 'Digite uma pergunta.');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('http:/192.168.15.9:8000/perguntar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ texto: mensagem }),
      });

      const data = await response.json();

      if (data.resposta) {
        Alert.alert('Resposta da IA', data.resposta);
      } else {
        Alert.alert('Erro', 'Não foi possível obter uma resposta.');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Erro na conexão com a API.');
    } finally {
      setLoading(false);
    }
  };

return (
    <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                keyboardShouldPersistTaps="handled"
            >
                <View style={{ flex: 1 }}>
                    <View style={style.boxTop}>
                        <Text style={style.TextPergunta}>
                            Gostaria de saber como você está se sentindo hoje
                        </Text>
                    </View>

                    <View style={style.boxMid}>
                        <TextInput
                            onChangeText={setMensagem}
                            value={mensagem}
                            style={[style.input, { height: inputHeight }]}
                            onContentSizeChange={handleContentSizeChange}
                            multiline={true}
                            placeholder="Digite sua mensagem aqui"
                            returnKeyType="send"
                            onSubmitEditing={enviarPergunta}
                        />
                    </View>

                    <View style={style.boxBottom}>
                        {loading ? (
                            <ActivityIndicator size="large" color="#007AFF" />
                        ) : (
                            <Button
                                text="Enviar"
                                onPress={enviarPergunta}
                            />
                        )}
                    </View>
                </View>
            </ScrollView>
        </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
);
}
