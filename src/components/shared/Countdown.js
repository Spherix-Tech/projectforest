import { useState, useEffect } from "react";
import { COUNTDOWN_STORAGE_KEY } from "../../services/constants";
import {
  getCookies,
  removeCookies,
  setCookies,
} from "../../services/localStorage";

const Countdown = ({ callback }) => {
  const [time, setTime] = useState({
    minutes: 0,
    seconds: 0,
  });

  const updateTimeValuesInDom = (minutes, seconds) => {
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    setTime({ minutes, seconds });
  };

  useEffect(() => {
    let interval = setInterval(function () {
      let counterTempSeconds = getCookies(COUNTDOWN_STORAGE_KEY)
        ? parseInt(getCookies(COUNTDOWN_STORAGE_KEY), 10)
        : 0;
      if (counterTempSeconds > 0) {
        let minutes = parseInt(counterTempSeconds / 60, 10);
        let seconds = parseInt(counterTempSeconds, 10);
        updateTimeValuesInDom(minutes, parseInt(seconds % 60, 10));
        setCookies(COUNTDOWN_STORAGE_KEY, counterTempSeconds - 1);
      } else {
        removeCookies(COUNTDOWN_STORAGE_KEY);
        clearInterval(interval);
        callback();
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div>
        {time.seconds > 0 && (
          <h1 id="countdown" className="text-center text-[15px]">
            You can resend after {time.minutes} : {time.seconds}
          </h1>
        )}
      </div>
    </>
  );
};

export default Countdown;
