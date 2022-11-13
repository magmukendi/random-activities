import { useEffect, useState } from "react";

let s = new Date();
function Loading(){
    return(
        <div>

            <div className="round-container">

                <div className="c round-1">
                </div>
                <div className="c round-2">
                </div>
                <div className="c round-3">
                </div>
            </div>
            
        </div>
    )
}
export default function QuoteBox() {
    let boredUrl = "https://www.boredapi.com/api/activity";
    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
    }
    const [activity, setActivity] = useState("Are you bored today?");
    const [loading, setLoading] = useState(false)
;

    function load(){
        update()
        setLoading(true);
        setTimeout(
            function(){
                setLoading(false) 
            }
        ,4000)
    }
    function update() {
      console.log(activity);
      fetch(boredUrl)
        .then(function (res) {
          return res.json();
        })
        .then((dat) => {
          setActivity(dat["activity"]);
        });
    }


    
    // let x = quotes[getRandomInt(0,quotes.length-1)]
    // console.table(x)
  
    //console.log(lovv[1]["hate"])
    //console.log(quotes[10])
    return (
      <>
      {loading ?
      <Loading/>
      :
      <div id="quote-box">
        <div id="content">
          {activity !== "Are you bored today?" && (
              <p id="author">How about...🤔🤔🤔 </p>
              )}
          {activity !== "Are you bored today?" ? (
              <p id="text">You {activity.toLowerCase()} ?!</p>
              ) : (
              <p id="text">{activity}</p>
              )}
              <div className="button-container">
          {activity !== "Are you bored today?" ? (
              <button onClick={update} id="new-quote">
              No, something else
            </button>
          ) : (
              <button onClick={load} id="new-quote">
              Yes!!!
            </button>
          )}
        </div>
        </div>
        
      </div>
        }
        </>
    );
  };