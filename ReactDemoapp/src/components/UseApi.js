import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch,useHistory
  } from "react-router-dom";

class UseApi extends Component {    
    constructor(){
        super();
        this.state = {
            error: null,
            isLoaded: false,
            items: []
          };
    }
    componentDidMount(){
        debugger;
        const apiData=fetch('http://dummy.restapiexample.com/api/v1/employees')
        .then(res=>res.json())
        .then(
            (result)=>{
                this.setState({
                    isLoaded:true,
                    items:result.data
                });
            },(error)=>{
                this.setState({
                    isLoaded:true,
                    error:error
                });
            }
        )
        console.log(apiData);
    }
    render() {
        const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        // <table>
        //   {items.map(item => (
        //     <tr>
        //         <td>{item.id}</td>
        //     <td>{item.id}</td>
        //     <td>{item.id}</td>
        //     <td>{item.id}</td>
        //     <td>{item.id}</td>
        //     <td>{item.id}</td>
        //     </tr>
        //   ))}
        // </table>
        <div>
            <div>
                {/* <button style={{marginTop:"10px",marginLeft:"10px"}} className="btn btn-primary">Create Record</button> */}
                
                <Link to="/UseApi/Create" style={{marginTop:"10px",marginLeft:"10px"}} className="btn btn-primary">Emp Create</Link>
            </div>
            {
                items.map(item=>{
                   return <Person data={item}></Person>
                })
            }
        </div>
      );
    }
    }
}
export class Person extends React.Component{
    constructor(){
        super(); 
    }
    render(){
        const props=this.props.data;
        console.log(props)
        return(
            <div className='person'>
            <div><img width={300} height={200} src={props.profile_image==""?"/Images/3.jpg":""} alt='No Image'></img></div>
            <div>Employee ID: <label>{props.id}</label></div>
            <div>Name: <label>{props.employee_name}</label></div>
            <div>Salary: <label>{props.employee_salary}</label></div>
            <div>Age: <label>{props.employee_age}</label></div>
            <div><button className="btn btn-warning">Edit</button><button style={{marginLeft:"20px"}} className="btn btn-danger">Delete</button></div>            
          </div>
        );
    }
}
export class EmployeeCreate extends Component{
    constructor(){
        super();
        this.state={
            status:"",
            data:""
        }
    }
    createRecord=()=>{
        let data={
            "name":this.refs.name.value,
            "salary":this.refs.salary.value,
            "age":this.refs.age.value
        }
        fetch('http://dummy.restapiexample.com/api/v1/create',{
            method: "POST",
            body: JSON.stringify(data),
            headers: {
            "Content-Type": "application/json"
            }
        }).then(res=>res.json())
        .then(
            (result)=>{
                this.setState({
                    status:result.status,
                    data:result.data
                })
            },
            (err)=>{
                this.setState({
                    status:err
                })
            }
        )
    }
    render(){
        return(
            <div>
                <h1>Employee Create Screen</h1>
                <div>
                    <div className="row">
                        <div className="col-md-3">Name : <input type="text" className="form-control" ref="name"></input>
                        </div>
                    <div className="col-md-3">Salary : <input type="text" className="form-control" ref="salary"></input></div>
                    <div className="col-md-3">Age : <input type="text" className="form-control" ref="age"></input></div></div>
                   
                   <div style={{marginTop:"10px"}}>
                        <button onClick={this.createRecord} className="btn btn-success">Create</button>
                    
                        <Link to="/UseApi/" style={{marginLeft:"20px"}} className="btn btn-primary">Back</Link>
                        <div>{this.state.status}
                        </div>
                        <div>
                            <ul>
                                <li>{this.state.data.id}</li>
                                <li>{this.state.data.name}</li>
                                <li>{this.state.data.salary}</li>
                                <li>{this.state.data.age}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default UseApi;