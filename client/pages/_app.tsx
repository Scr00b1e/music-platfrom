import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'
import { Container } from '@mui/system'
import Player from '../components/Player'
import { wrapper } from '../store'

const WrappedApp = ({ Component, pageProps }: AppProps) => {
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

export default wrapper.withRedux(WrappedApp);