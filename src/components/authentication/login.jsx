import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
    
  }

  render() {
    const {} = this.props;
    const { } = this.state;
    return(
      <div
        className="pt-24 pb-40 bg-orange-200 px-4 md:px-0 lg:px-0 xl:px-0 min-h-screen"  
      >
        <div className="w-full m-auto max-w-sm ">
            <form className="bg-white shadow-md rounded px-8 pt-8 pb-6" >
              <div className="mb-6 text-center font-bold  text-lg text-blue-800">
                WELCOME!
              </div>
              <p className="text-center">Use Your Credentials To Access</p>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <div className="relative">
                  <input
                    className="border rounded w-full py-2 pl-10 pr-3 text-black leading-tight shadow"
                    id="email"
                    type="email"
                    name="email"
                    onChange={this.onChange}
                  />
                  <div className="absolute top-0 left-0 bg-gray-200 py-2 px-3 rounded-l  text-gray-500">
                    {' '}
                    <i className="fa fa-user" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
              <div>
                <label
                  className="block text-gray-700 text-sm mb-2"
                  htmlFor="password"
                >
                  Password*
                </label>
                <div className="relative">
                  <input
                    className="shadow appearance-none border pl-10 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    name="password"
                    onChange={this.onChange}
                  />
                  <div className="absolute top-0 left 0 py-2 px-3 bg-gray-200 text-gray-500 rounded-l">
                    <i className="fa fa-unlock-alt" aria-hidden="true"></i>
                  </div>
                </div>
                <div className="text-center">
                <button className="bg-blue-700 text-white w-full py-2 rounded mb-4">
                  Login
                </button>
                </div>
                
               
              </div>
             
              <div className=" text-gray-600 mb-4">
                <div className=" text-center">
                  <div className="text-sm cursor-pointer">
                    Forgot your Password? <span>
                  <Link to="" className="font-bold">
                    Reset Here
                  </Link>
                </span>
                  </div>
                </div>
              </div>

             
            </form>

            <div className="py-4 mt-4 bg-white rounded text-center text-gray-600 text-sm">
                <span>Dont Have Any Account?</span>{' '}
                <span>
                  <Link to="/register" className="font-semibold">
                    Create Account
                  </Link>
                </span>
              </div>
        </div>
      </div>
    );
  }
}



export default Login;
