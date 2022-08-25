import "../styles/globals.css";
import ReactGA from "react-ga";
ReactGA.initialize("G-XJKS1PTP6Y");
if (typeof window !== "undefined") {
  console.log(window.location.pathname + window.location.search);
  ReactGA.pageview(window.location.pathname + window.location.search);
}
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
