import React from "react";

class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {startdate: "",
            enddate: ""
        };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
        const value = event.target.value;
        this.setState(
            {...this.state, [event.target.name]: value },
            );
    }

    handleSubmit(event) {
        console.log('Date range ' + this.state.startdate + ' - ' + this.state.enddate);
        event.preventDefault();
      }
  
    render() {
      return (
        <div className="form-box">
            <form onSubmit={this.handleSubmit}>
                <label>
                    Start date:
                    <input type="date" name="startdate" value={this.state.startdate} onChange={this.handleChange}/>
                </label>
                <label>
                    End date:
                    <input type="date" name="enddate" value={this.state.enddate} onChange={this.handleChange}/>
                </label>
                <input type="submit" id="submitBtn" value="Show statistics" />
            </form>
        </div>
      );
    }
}

export default Form;