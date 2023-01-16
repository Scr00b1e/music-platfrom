import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'
import { Container } from '@mui/system'
import Player from '../components/Player'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Container>
        <div className='content'>
          <Component {...pageProps} />
        </div>
      </Container>
      <Player />
    </>
  )
}
