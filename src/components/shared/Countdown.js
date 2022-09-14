import React, { useState, useEffect } from "react";
import { COUNTDOWN_STORAGE_KEY } from "../../services/constants";
import {
  getCookies,
  removeCookies,
  setCookies,
} from "../../services/localStorage";

const Countdown = ({ initialSeconds = 0, callback }) => {
  const [time, setTime] = useState({
    minutes: 0,
    seconds: initialSeconds,
  });

  const [counterSecondsTime, setCounterSecondsTime] = useState(
    getCookies(COUNTDOWN_STORAGE_KEY)
      ? parseInt(getCookies(COUNTDOWN_STORAGE_KEY))
      : initialSeconds
  );

  useEffect(() => {
    // let timer = setInterval(() => {
    //   console.log(parseInt(getCookies(COUNTDOWN_STORAGE_KEY)));
    //   let tempCounterSeconds = getCookies(COUNTDOWN_STORAGE_KEY)
    //     ? parseInt(getCookies(COUNTDOWN_STORAGE_KEY))
    //     : counterSecondsTime;
    //   console.log("tempCounterSeconds", tempCounterSeconds);
    //   let minutes = parseInt(tempCounterSeconds / 60, 10);
    //   let seconds = parseInt(tempCounterSeconds);
    //   minutes = minutes < 10 ? "0" + minutes : minutes;
    //   seconds = seconds < 10 ? "0" + seconds : seconds;
    //   console.log(minutes, seconds);
    //   document.getElementById(
    //     "countdown"
    //   ).innerHTML = `${minutes} : ${seconds}`;
    //   // setTimeout(() => {
    //   //   setTime({ minutes, seconds });
    //   // }, 1000);
    //   tempCounterSeconds = seconds--;
    //   if (tempCounterSeconds > 0) {
    //     setCookies(COUNTDOWN_STORAGE_KEY, tempCounterSeconds);
    //     // setCounterSecondsTime(tempCounterSeconds);
    //   } else {
    //     removeCookies(COUNTDOWN_STORAGE_KEY);
    //     // setCounterSecondsTime(0);
    //     clearInterval(timer);
    //     callback();
    //   }
    // }, 1000);
  }, []);

  return (
    <>
      <div>{/* <h1 id="countdown" className="text-center"></h1> */}</div>
    </>
  );
};

export default Countdown;
