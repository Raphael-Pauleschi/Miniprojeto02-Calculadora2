import React from 'react'
import styles from '../KeyboardStyle'
import {View, TouchableOpacity,Text} from 'react-native'

export default Comp =>{
    const buttons = ['SIN','COS','TG'];
  return(
  <View style={styles.buttons}>
        {buttons.map((button) =>
          (
            // Mapeamento dos outros botões
            <TouchableOpacity
              onPress={() => Comp.action(button)}
              key={button}
              style={styles.buttonOther}>
              <Text
                style={[
                  styles.textButton,
                  { color: typeof button === 'number' ? 'white' : '#2E2EFE' },
                ]}>
                {button}
              </Text>
            </TouchableOpacity>
          )
        )}
      </View>
  )
}