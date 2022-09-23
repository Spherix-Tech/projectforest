import Router from "next/router";
import NProgress from "nprogress"; //nprogress module
import "../styles/nprogress.css";

import "../styles/globals.css";
import ReactGA from "react-ga4";
ReactGA.initialize("G-XJKS1PTP6Y");
sendGoogleAnalytics();
const sendGoogleAnalytics = () => {
  if (typeof window !== "undefined") {
    console.log(window.location.pathname + window.location.search);
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname + window.location.search,
    });
  } else {
    console.log("Page Viewed");
    ReactGA.send({ hitType: "pageview" });
  }
};
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
