import Router from "next/router";
import NProgress from "nprogress"; //nprogress module
import "../styles/nprogress.css";

import "../styles/globals.css";
import ReactGA from "react-ga";
ReactGA.initialize("G-XJKS1PTP6Y");
if (typeof window !== "undefined") {
  console.log(window.location.pathname + window.location.search);
  ReactGA.pageview(window.location.pathname + window.location.search);
}
import { useReducer } from "react";
import { UserContext } from "../src/context/userContext";
import { AuthReducer, initialState } from "../src/context/reducer";

//Binding events.
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  const [user, dispatch] = useReducer(AuthReducer, initialState);
  return (
    <div>
      <UserContext.Provider value={{ user: user, dispatch: dispatch }}>
        <Component {...pageProps} />;
      </UserContext.Provider>
    </div>
  );
}

export default MyApp;
