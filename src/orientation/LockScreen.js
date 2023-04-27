import * as ScreenOrientation from "expo-screen-orientation";
import CalculatorScreen from "../screens/CalculatorScreen"

import { useEffect, useState } from "react";
export default Comp => {
  //Este código fixa a tela do usuário
  const [orientation, setOrientation] = useState(1);
  useEffect(() => {
    lockOrientation();
  }, []);
  const lockOrientation = async () => {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.PORTRAIT_UP
    );
  const o = await ScreenOrientation.getOrientationAsync();
    setOrientation(o);
  };
  return(
       <CalculatorScreen orientation={orientation}/>
  )
}
