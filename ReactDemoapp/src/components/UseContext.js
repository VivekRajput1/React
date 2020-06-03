import React, { Component } from 'react';

const empContext=React.createContext();
class UseContext extends Component {
    constructor(){
        super();
        this.state={
            ID:1001,
            Name:"Vivek",
            Salary:50000,
            Age:24,
            UpdateEmployee:this.updateFromChild
        }
    }
    updateFromChild=()=>{
        this.setState({
            ID:1002,
            Name:"Someone",
            Salary:500000,
            Age:26
        });
    }
    ChangeSalary=()=>{
        this.setState({
            Salary:this.state.Salary+1000
        })
    }
    componentDidMount(){

    }
    render() {
        return (
            <div>
                <div>=================Root Component===========</div>
                <div>Employee Id : {this.state.ID}</div>
                <div>Employee Name : {this.state.Name}</div>
                <div>Employee Salary : {this.state.Salary}</div>
                <div>Employee Age : {this.state.Age}</div>
                <empContext.Provider value={this.state}>
                    <Employee/>
                </empContext.Provider>
                <button onClick={this.ChangeSalary}>Change Salary</button>
            </div>
        );
    }
}
class Employee extends Component{
    constructor(){
        super();
        console.log(empContext);
    }
    static context=empContext._currentValue;
    render(){
        const props=empContext._currentValue;
        // const props=this.props.props;
        return(
            <div>
                 <div>=================Employee Component===========</div>
                <div>Employee Id : {props.ID}</div>
                <div>Employee Name : {props.Name}</div>

                <div>Employee Age : {props.Age}</div>
                <Salary></Salary>
            </div>
        );
    }
}
class Salary extends Component{
    
    render(){
        const props=empContext._currentValue;
        return(
        <div>
            <div>=================Salary Component===========</div>
            <div>Employee Salary : {props.Salary}</div>
            <button onClick={props.UpdateEmployee}>Update Employee From Child</button>
        </div>
        );
    }
}

export default UseContext;