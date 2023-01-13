import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'
import { Container } from '@mui/system'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Container>
        <div className='content'>
          <Component {...pageProps} />
        </div>
      </Container>
    </>
  )
}
