import React from "react";
import Form from "./Form";
import Getdata from "./Getdata";

 
const Stats = () => {
    return (
      <div>
        <h2>Bitcoin's statistics</h2>
        <h4>Select date range:</h4>

        <div id="form">
          <Form />
        </div>

      </div>
    );
  }
 
export default Stats;