import { useEffect, useState } from "react";
import "./App.css";
import QuoteBox from "./Component/QuoteBox";
import { compareAsc, format } from "date-fns";

format(new Date(2014, 1, 11), "yyyy-MM-dd");

function Time() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    let timeInt = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timeInt);
  });

  return (
    <>
      <p className="time">
        <strong>
          {` ${23 - time.getHours()}:${59 - time.getMinutes()}:${
            59 - time.getSeconds()
          } `}{" "}
        </strong>{" "}
        {` left for today`}
        <br />
      </p>
    </>
  );
}
function App() {
  return (
    <div className="app">
      <Time />
      <QuoteBox />
    </div>
  );
}

export default App;
