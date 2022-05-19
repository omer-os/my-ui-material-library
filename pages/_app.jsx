import Layout from "../components/Layout";
import "../styles/globals.css";
import '../styles/componentstyle.css'
function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-slate-900">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;
