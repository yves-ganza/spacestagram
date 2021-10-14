import '../styles/globals.css'
import { AppProvider } from '@shopify/polaris'

export default function App({Component, pageProps}){
  return(
    <AppProvider>
        <Component {...pageProps}/>
    </AppProvider>
  )
}