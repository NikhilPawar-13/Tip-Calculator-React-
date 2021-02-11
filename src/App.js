import React from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './Input.js'
import Output from './Output.js'
import Hotel from "./video/hotel.mp4"


// using class component
class App extends React.Component {
  // constructor
	constructor(props){
    super(props);     // calling parent class constructor
      this.state = {  // state  
        billAmount :0, // user's bill amount
        service :'',  // how was the service
        custName :'', // customer name
        totalTip: 0, // total tip var
        totalCust : 0, // total customer var
        listCust : [] // array of objects 
    }

  }

	
	//call back function to retrive value of bill amount and store it to var
	getBillAmount = (event) => {
		this.setState({billAmount: event.target.value});
	}

  //call back function to retrive value of service and store it to var
	getService = (event) => {
		this.setState({service: event.target.value})		
	}

 //call back function to retrive value of customer name and store it to var
	getCustomerName = (event) => {
		this.setState({custName: event.target.value})	
		console.log("In Name");	
	}

  // first I used callback function to change the default behaviour of setState fun
  // from Async to sync flow But abhishek sir told me that dont make it complicated
  // so using different logic
	/* callback = () =>{
      var tempArray =  this.state.listCust.map((item,index) =>(`${item.name} offered a tip of ${item.perc} RUPEES`))

      console.log(tempArray);
     
        this.setState({listArray : tempArray})
       console.log(this.state.listArray);
    }*/

    // this function gets called when user press add customer button
     addCustomer =  (event) => {
        console.log(this.state.billAmount);
        console.log(this.state.service);
        console.log(this.state.custName); 


        // checking if user enters all values or not 
        if(this.state.billAmount == 0 || this.state.custName == "" || this.state.service == 0){
            alert("Please enter below values"); // if not shows alert
            this.setState({billAmount : 0}) // set back to defalut value
            this.setState({custName : ""})  // set back to defalut value
            this.setState({service : 0})    // set back to defalut value
        }
        else { // if user enters all value start the function
     
             var result = this.state.billAmount * this.state.service ; // calculating percentage
             result = result.toFixed(2); // only allow 2 digit after decimal like 10.22
             result = parseFloat(result); // converting back to float
             console.log(result);

             //storing customer name and tip amount into the array 
            this.setState({listCust : [...this.state.listCust,{name:this.state.custName,perc:result}]});
            
            this.setState({billAmount : 0}) // set back to defalut value
            this.setState({custName : ""})  // set back to defalut value           

            }
    }


    // this function will get called after pressing calculate tip button
    caluculateTip = () => {

      
      let tipTotal = 0 // var for storing result
        this.state.listCust.forEach((item,index) => { // using foreach to iterate all 
            tipTotal += item.perc;   // adding all tip amount
            console.log(tipTotal,"tipTotal");
            console.log(item.perc, "perc");
        })

        tipTotal = tipTotal.toFixed(2); // only allow 2 digit after decimal like 10.22
        tipTotal = parseFloat(tipTotal); // converting to float

        this.setState({ totalTip: tipTotal }) // setting value to main variable

        this.setState({totalCust : this.state.listCust.length}) //setting length of array to var
    }


	render(){		
      
  		return(

        <div className="App"> 
             
              <div className="video-container">

                <div className="color-overlay"> 

                </div>
               
              
                <video autoPlay="autoplay" loop="loop" muted  className = "video"> 
                    <source src={Hotel} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

              </div> 


            	<div className="subContent"> 

              		<div className = "Header">
            				<h1>Tip Calculator</h1>  
            				<h6>Build in React</h6>
        			     </div>


              		<Input  parentCallback1 = {this.getBillAmount} parentCallback2 = {this.getService} parentCallback3 = {this.getCustomerName} parentCallback4 = {this.addCustomer} /> 
              		


              		<Output data = {this.state.listCust} totalTip = {this.state.totalTip} totalCust = {this.state.totalCust} parentCallback5 = {this.caluculateTip}/> 


                  <footer><small>@2020 TIP-CALCULATOR</small></footer> 

            	</div>

          </div>


  	);

  }
}

export default App;
