import React from 'react'
import styles from '../KeyboardStyle'
import {View, TouchableOpacity,Text} from 'react-native'

export default Comp =>{
    const buttons = ['LIMPAR','DEL','%','/',7,8,9,'x',4,5,6,'-',1,2,3,'+',0,'.','+/-','^','^ 3','^ 2','=',];

  return(
  <View style={styles.buttons}>
        {buttons.map((button) =>
          button === '=' ? ( // Mapeamento do botão =
            <TouchableOpacity
              onPress={() => Comp.action(button)}
              key={button}
              style={[styles.button, { backgroundColor: '#FC3AF3' }]}>
              <Text
                style={[styles.textButton, { color: 'white', fontSize: 30 }]}>
                {button}
              </Text>
            </TouchableOpacity>
          ) : (
            // Mapeamento dos outros botões
            <TouchableOpacity
              onPress={() => Comp.action(button)}
              key={button}
              style={styles.button}>
              <Text
                style={[
                  styles.textButton,
                  { color: typeof button === 'number' ? 'white' : '#FC3AF3' },
                ]}>
                {button}
              </Text>
            </TouchableOpacity>
          )
        )}
      </View>
  )
}