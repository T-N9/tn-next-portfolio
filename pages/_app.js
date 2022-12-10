import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return <section className='main_content'>
    <Component {...pageProps} />
  </section>
}

export default MyApp
