import React, { Component } from 'react'
import {Link} from "react-router-dom"
import axios from "axios"

export default class Login extends Component {

    state={
        apiMessage:""
    }

    users={

        email:"",
        password:""
    }

    getData=(e)=>{

        this.users[e.target.name]= e.target.value;

    }

    sendData= async (e)=>{

        e.preventDefault();
        let {data} = await axios.post("https://route-egypt-api.herokuapp.com/signin",this.users);
        if (data.message=="success")
            {
                localStorage.setItem("token",data.token);
                this.props.history.replace("/Home");
            }

      
        
    }

    render() {
      console.log(this.props)
        // localStorage.clear();
        return (
            <>
                <div className="container-fluid bg-light text-dark p-5 vh-100">
                    <h2 className="w-75 mx-auto py-5">Login</h2>
                    <form className="" onSubmit={this.sendData}>
                        <div className="w-75 m-auto">
                            <div className="form-group">
                                <label for="inputEmail">Email</label>
                                <input onChange={this.getData} type="text" className="form-control " id="inputEmail" name="email"/>
                            </div>
                            <div className="form-group">
                                <label for="inputPassword">Password</label>
                                <input onChange={this.getData} type="Password" className="form-control " id="inputPassword" name="password"/>
                            </div>
                            <p className="text-danger">{this.state.apiMessage}</p>
                            <p>Don't have account ? <Link to="/Sign_in">Sign in</Link></p>
                            
                            <button type="submit" className="btn btn-secondary text-white px-3 mt-3">Login</button>
                        </div>
                    </form>
                </div>
            </>
        )
        }
}
