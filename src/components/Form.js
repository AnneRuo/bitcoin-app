import React from "react";
import Getdata from "./Getdata";

class Form extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.state = {startdate: "",
            enddate: ""
        };
    }
  
    handleChange(event) {
        const value = event.target.value;
        event.preventDefault();
        this.setState(
            {...this.state, [event.target.name]: value },
            );
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log('Date range ' + this.state.startdate + ' - ' + this.state.enddate);
        let timestampStart = (new Date(this.state.startdate).getTime())/1000;
        let timestampEnd = (new Date(this.state.enddate).getTime() + (1*60*60*1000))/1000;
        Getdata(timestampStart, timestampEnd);
        //timestampStart, timestampEnd
    }    
  
    render() {
      return (
        <div className="form-box">
            <form onSubmit={this.handleSubmit}>
                <label>
                    Start date:
                    <input type="date" min='1970-01-01' name="startdate" value={this.state.startdate} onChange={this.handleChange}/>
                </label>
                <label>
                    End date:
                    <input type="date" min='1970-01-01' name="enddate" value={this.state.enddate} onChange={this.handleChange}/>
                </label>
                <input type="submit" id="submitBtn" value="Show statistics" />
            </form>
            {/* <Getdata startdate={this.state.startdate} enddate={this.state.enddate} /> */}
        </div>
      );
    }
}

export default Form;