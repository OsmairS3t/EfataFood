import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';
import theme from './src/global/styles/theme';
import {
  useFonts,
  Dosis_200ExtraLight,
  Dosis_400Regular,
  Dosis_500Medium,
  Dosis_700Bold
} from '@expo-google-fonts/dosis';

import { Home } from './src/screens/Home'
import { Produtos } from './src/screens/Produtos'

export default function App() {
  const [fontsLoaded] = useFonts({
    Dosis_200ExtraLight,
    Dosis_400Regular,
    Dosis_500Medium,
    Dosis_700Bold
  })
  
  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="dark" backgroundColor="transparent" />
        <Produtos />
    </ThemeProvider>
  );
}
