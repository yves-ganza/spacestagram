import styles from '../styles/global.css'
import { AppProvider } from '@shopify/polaris'
import enTranslations from '@shopify/polaris/locales/en.json'

export default function App({Component, pageProps}){
  return(
    <AppProvider i18n={enTranslations}>
        <Component {...pageProps}/>
    </AppProvider>
  )
}