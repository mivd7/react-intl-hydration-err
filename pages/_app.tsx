import { IntlProvider } from 'react-intl'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
const { locale, defaultLocale } = useRouter();

return (
  <IntlProvider locale={locale as string} defaultLocale={defaultLocale} messages={pageProps.intlMessages}>
    <Component {...pageProps} />
  </IntlProvider>)
}