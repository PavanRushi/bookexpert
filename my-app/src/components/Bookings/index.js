import {Component} from "react"
import "./index.css"

class Booking extends Component{
    state = {name:""}

    onChangeInputName = event => {
        this.setState({name:event.target.value})  
    }

    submitForm = event => {
        event.preventDefault()
        console.log("Pavan")
    }

    render(){
        const {name} = this.state
        
        return(
            <form onSubmit={this.submitForm} className="form-container" >
                <div className="name-card">
                    <label htmlFor="name" className="name-input" >Name</label>
                    <input type="text" id="name" placeholder="Name" value={name} onChange={this.onChangeInputName} className="input" />
                </div>
                <div className="name-card">
                    <label htmlFor="emailid" className="name-input" >EmailId</label>
                    <input type="text" id="emailid" placeholder="EmailId" value={name} onChange={this.onChangeInputName} className="input" /> 
                </div>
                <div className="name-card">
                    <label htmlFor="number" className="name-input" >Phone Number</label>
                    <input type="text" id="number" placeholder="Phone number" value={name} onChange={this.onChangeInputName} className="input" /> 
                </div>
                <div className="name-card">
                    <label htmlFor="businessname" className="name-input" >Business Name</label>
                    <input type="text" id="businessname" placeholder="Business Name" value={name} onChange={this.onChangeInputName} className="input" /> 
                </div>
                <div className="name-card">
                    <label htmlFor="location" className="name-input" >Location</label>
                    <input type="text" id="location" placeholder="Location" value={name} onChange={this.onChangeInputName} className="input" /> 
                </div>
                <div className="name-card">
                    <label htmlFor="date" className="name-input">Book a Webinar</label>
                    <input type="text" id="location" placeholder="Location" value={name} onChange={this.onChangeInputName} className="input" />
                </div>
                <button type="submit" >Submit</button>
            </form>
        )  
    }

}


export default Booking