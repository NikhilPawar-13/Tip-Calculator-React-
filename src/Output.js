import React from 'react'
import './Output.css'


// using class component
class Output extends React.Component{

	constructor(props){
		super(props);
		this.state ={
			data : this.props.data,   // initialize state variable tousing props 
		}
	}


    // calling parent function
	caluculateTip = (event) => {
		this.props.parentCallback5(event);
	}

	render(){
		return (
           
			<div className = "Output">	

                <div className = "firstDiv">
        
                    <h3>Customer List</h3>

                    
        			<ul className = "ul"> 
        				{this.props.data.map((item, index) => (
                           
                            <li key={index}><strong>{item.name} offered a tip of {item.perc} ₹.</strong> </li>

                        ))}

                        </ul>
                </div>


           
            <button  className="button1" onClick ={this.caluculateTip}>Calculate Tip and Customer</button>


            <div className = "secondDiv">	
                    <table>
                            <thead>
                                <tr>
                                    <th>Total Number of customers</th>
                                    <th>Total Tip</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{this.props.totalCust}</td>
                                    <td>{this.props.totalTip}</td>
                                </tr>
                            </tbody>
                        </table>
                </div>

			</div>

		)
	}

}

export default Output