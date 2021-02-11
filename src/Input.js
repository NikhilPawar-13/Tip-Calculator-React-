import React from 'react'
import "./Input.css"

// using class component 
// this component receives values from parent component in props

class Input extends React.Component {

		initialState = {     //using this values to reset field
   			  amount :0,    //bill amount reset
   			  custName: '',  // customer name reset
   			  
  	}


  	state = this.initialState  // initialize state var

  	//this fuction calls parent fuction 
	sendAmount = (event) => {
         this.props.parentCallback1(event);  // using pros to set or call parent function
         this.setState({amount : event.target.value})  //change input field value
         console.log(event.target.value) 
    }

    //this function calls parent function
    sendService = (event) => {
         this.props.parentCallback2(event);  //// using pros to set or call parent function
         
    }

    // this function calls parent function
    sendName = (event) => {
    	this.props.parentCallback3(event); // using pros to set or call parent function
    	this.setState({custName : event.target.value}) // set field value
    }

    //this function call parent addcustomer function
    buttonClick = (event) => { 
    	this.props.parentCallback4(event); //// using pros to set or call parent function
    	this.setState(this.initialState) //reset all values to default

    	
    }

   

	render(){
		return(

			<div className = "Input">
				<h4>Enter Your Bill Amount</h4> 
				<input type="number"
					className = "textInput"
			        name="amout"
			        value={this.state.amount}
			        id="amount"
			        placeholder = "Enter amount"
			       	onChange = {this.sendAmount}
			        
			         />			       	

			    <hr />

			    <label htmlFor="service" id ="label">How was the service</label>
			    <span>   </span>
			    <select id="service" onChange= {this.sendService} >
			    	<option defaultValue="Choose" value='0'>Choose..</option>
    				<option value= '0.2'>Excellent</option>
    				<option value= '0.1'>Moderate</option>
    				<option value= '0.05'>Bad</option>
  				</select>
  				<span>   </span>
  				<input className = "textInput"
			        type="text"
			        name="name"
			        id="name"
			        value={this.state.custName}
			        placeholder = "Customer Name"
			        onChange = {this.sendName}
			     />
			     <span>   </span>
			     <input className = "button"
			        type="button"
			        id="button"
			        value = "Add Customer"
			        onClick = {this.buttonClick}
			     />

			     <br></br>
			     <p id = "p"></p>

			</div>
		)

	}
 }

 export default Input