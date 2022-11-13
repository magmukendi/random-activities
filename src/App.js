import { useEffect, useState } from 'react';
import './App.css';
import QuoteBox from './Component/QuoteBox';

function Time(){
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    let timeInt = setInterval(() => setTime(new Date()), 1000)
    console.log("Love")
    return ()=> clearInterval(timeInt)
})

return(

  <>
    <p className="time"> <strong>{`${23 - time.getHours()}:${59 - time.getMinutes()}:${59 - time.getSeconds()}`}</strong> {`left until the end of the day`}</p>
  </>
    )

}
function App() {
  return (
    <div className="app">
      <Time/>
      <QuoteBox/>
    </div>
  );
}

export default App;
