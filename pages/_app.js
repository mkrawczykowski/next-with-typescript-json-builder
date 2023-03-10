import "../styles/reset.scss";
import "../styles/globals.scss";
import Layout from '../components/Layout/Layout';

export default function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}        