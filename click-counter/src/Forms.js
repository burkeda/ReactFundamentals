import react, { Component } from 'react';


class Identity extends React.Component {

    state = {
        firstName: "",
        lastName: ""
    }

    onFieldChange = (event) => {
        this.setState({
            // ie. firstName textbox name="firstName"
            [event.target.name]: event.target.value
        }); 
    }

    render() {
        return <div>
            <form>
              <input type="text" name="firstName" value={this.state.firstName} placeholder="First name" onChange={this.onFieldChange} />
              <input type="text" name="lastName" value={this.state.lastName} placeholder="Last name" onChange={this.onFieldChange} />
              {/*<input type="text" value="" /> // Having these values set to empty string result in readonly form that cant be edited */}
              {/*<input type="text" value="" /> // fields must be bound to state objects */}
            </form>
          </div>;    
    }
}


ReactDOM.render(<Identity></Identity>,
    document.getElementById('root'));