import Router from "next/router";
import NProgress from "nprogress"; //nprogress module
import "../styles/nprogress.css";

import "../styles/globals.css";
import { useState, useMemo } from "react";
import { AuthProvider } from "../src/context";
import { UserContext } from "../src/context/userContext";
import { getAuthInfoObj } from "../src/services/localStorage";

//Binding events.
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState(getAuthInfoObj());

  const value = useMemo(() => ({ user, setUser }), [user, setUser]);
  return (
    <div>
      <AuthProvider>
        <UserContext.Provider value={value}>
          <Component {...pageProps} />;
        </UserContext.Provider>
      </AuthProvider>
    </div>
  );
}

export default MyApp;
