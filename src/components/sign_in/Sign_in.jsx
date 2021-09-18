import axios from 'axios';
import React, { Component } from 'react'

export default class Sign_in extends Component {
    state={
        apiMessage:""
    }

    users={
        first_name:"",
        last_name:"",
        email:"",
        password:"",
        age:""
    }

    getData=(e)=>{

        this.users[e.target.name]= e.target.value;

    }

    sendData= async (e)=>{

        e.preventDefault();
        let {data} = await axios.post("https://route-egypt-api.herokuapp.com/signup",this.users);
        if (data.message=="success")
            {this.props.history.replace("/Home");}
        else
            this.setState({apiMessage:data.message});
        


    }

    render() {
        return (
            <>
            <div className="container-fluid bg-light text-dark p-5 ">
                <h2 className="w-75 mx-auto py-5">Registeration Form</h2>
                <form className="" onSubmit={this.sendData}>
                    <div className="w-75 m-auto">
                    <div className="form-group">
                            <label for="inputFirstname">Firstname</label>
                            <input type="text" onChange={this.getData} className="form-control " id="inputFirstname" name="first_name"/>
                        </div>
                        <div className="form-group">
                            <label for="inputLastname">Lastname</label>
                            <input type="text" onChange={this.getData}  className="form-control " id="inputLastname" name="last_name"/>
                        </div>
                        <div className="form-group">
                            <label for="inputAge">Age</label>
                            <input type="text" onChange={this.getData}  className="form-control " id="inputAge" name="age "/>
                        </div>
                        <div className="form-group">
                            <label for="inputEmail">Email</label>
                            <input type="text" onChange={this.getData}  className="form-control " id="inputEmail" name="email"/>
                        </div>
                        <div className="form-group">
                            <label for="inputPassword">Password</label>
                            <input type="Password" onChange={this.getData}  className="form-control " id="inputPassword" name="password"/>
                        </div>
                        <p className="text-danger">{this.state.apiMessage}</p>
                        <button type="submit" className="btn btn-secondary px-4 py-2 mt-3">Sign in</button>
                    </div>
                </form>

            </div>
        </>
        )
    }
}
