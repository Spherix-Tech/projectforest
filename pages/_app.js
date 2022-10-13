import Router from "next/router";
import NProgress from "nprogress"; //nprogress module
import "../styles/nprogress.css";

import "../styles/globals.css";
import ReactGA from "react-ga4";
const sendGoogleAnalytics = () => {
  if (typeof window !== "undefined") {
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname + window.location.search,
    });
  } else {
    ReactGA.send({ hitType: "pageview" });
  }
};
ReactGA.initialize("G-XJKS1PTP6Y");
sendGoogleAnalytics();
import { useReducer } from "react";
import { UserContext } from "../src/context/userContext";
import { AuthReducer, initialState } from "../src/context/reducer";
import { QueryProvider } from "../src/hooks/react-query";

//Binding events.
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => {
  sendGoogleAnalytics();
  return NProgress.done();
});
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  const [state, dispatch] = useReducer(AuthReducer, initialState);
  return (
    <div>
      <QueryProvider>
        <UserContext.Provider value={{ state, dispatch }}>
          <Component {...pageProps} />;
        </UserContext.Provider>
      </QueryProvider>
    </div>
  );
}

export default MyApp;
