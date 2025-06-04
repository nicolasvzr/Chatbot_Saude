import React, { forwardRef, Fragment, Ref } from "react";
import { TextInput, View, TextInputProps, Text, TouchableOpacity,StyleProp,TextStyle} from 'react-native';
import { themas } from "../../global/themes";
import { style } from "./style";

type Props = TextInputProps & {
    title?: string,
     
}

export const Input = forwardRef((props: Props, ref: Ref<TextInput> | null) =>{

    const {title, ...rest} = props;

    return(
        <Fragment>
            <View style={style.label}>
                <Text style={style.titleInput}>
                    {title}
                </Text>
                    <View style={style.Boxinput}>
                        <TextInput
                        ref={ref}
                        style={style.input}
                        placeholderTextColor="#999"
                        
                        {...rest}
                        />
                    
                    </View>
            </View>
            
        </Fragment>

    )
})