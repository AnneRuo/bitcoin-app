import React, { useState } from "react";
import { Getdata } from "./Getdata";

const Form = ({setData}) => {
    const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");
    
    const handleSubmit = async (event) => {
        if (fromDate === "" || toDate === "") {
            alert("Select date range");
        }
        event.preventDefault();
        let timestampStart = (new Date(fromDate).getTime())/1000;
        let timestampEnd = (new Date(toDate).getTime() + (1*60*60*1000))/1000;
        if (timestampStart >= timestampEnd) {
            alert("Check date range, end date can't be earlier than start date");
        }
        
        const fetchData = await Getdata(timestampStart, timestampEnd);
        
        /* Data granularity is automatic (cannot be adjusted)
        1 day from query time = 5 minute interval data -> every 12*24=288th value;
        1 - 90 days from query time = hourly data -> every 24th value
        above 90 days from query time = daily data (00:00 UTC) */

        const diffInMs = new Date(toDate) - new Date(fromDate);
        const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
        console.log(diffInDays);

        /* if (diffInDays < 1) {
            setData();
        } else if (diffInDays === 1) {
            
        } else if (diffInDays <= 90) {

        } else {
            setData(fetchData);
        } */

        setData(fetchData);
    }    

    return (
        <div className="form-box">
            <form onSubmit={handleSubmit}>
                <label>
                    Start date:
                    <input type="date" name="fromdate" value={fromDate} onChange={(e) => setFromDate(e.target.value)} />
                </label>
                <label>
                    End date:
                    <input type="date" name="todate" value={toDate} onChange={(e) => setToDate(e.target.value)} />
                </label>
                <button type="submit" id="submitBtn">Show statistics</button>
            </form>
        </div>
    );
}

export default Form;