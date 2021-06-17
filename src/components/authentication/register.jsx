/* eslint-disable default-case */
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

class Register extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { errors } = this.props;
    
    return (
      <div
        className="bg-orange-200 pt-8 md:pt-24 lg:pt-24 xl:pt-24 pb-40 px-4 md:px-0 lg:px-0 xl:px-0">
        <div className="w-full m-auto max-w-sm ">
          <form
            className="bg-white shadow-md rounded px-12 pt-6 pb-8 mb-4"
           
          >
            <div className="mb-6 font-bold text-center text-blue-800 ">
             Create An Account
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm mb-2"
                htmlFor="email"
              >
                First Name
              </label>
              <div className="relative">
                <input
                  name="first_name"
                  className="border rounded w-full py-2 pl-10 pr-3 text-black leading-tight shadow"
                  id="name"
                  type="Name"
                  placeholder=""
                
                />
                <div className="absolute top-0 left-0 bg-gray-200 py-2 px-3 rounded-l  text-gray-500">
                  {' '}
                  <i className="fa fa-user" aria-hidden="true"></i>
                </div>
              </div>
             
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm mb-2"
                htmlFor="email"
              >
                Last Name
              </label>
              <div className="relative">
                <input
                  name="last_name"
                  className="border rounded w-full py-2 pl-10 pr-3 text-black leading-tight shadow"
                  id="Name"
                  type="Last Name"
                  placeholder=""
                  onChange={this.onChange}
                />
                <div className="absolute top-0 left-0 bg-gray-200 py-2 px-3 rounded-l  text-gray-500">
                  {' '}
                  <i className="fa fa-user" aria-hidden="true"></i>
                </div>
              </div>
              
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm mb-2"
                htmlFor="phonenumber"
              >
                Phone Number*
              </label>
              <div className="relative">
                <input
                  className="border rounded w-full py-2 pl-10 pr-3 text-black leading-tight shadow"
                  id="phonenumber"
                  type="number"
                  placeholder=""
                  name="phone"
                  onChange={this.onChange}
                />
                <div className="absolute top-0 left-0 bg-gray-200 py-2 px-3 rounded-l  text-gray-500">
                  {' '}
                  <i className="fa fa-unlock-alt" aria-hidden="true"></i>
                </div>
              </div>
              
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <div className="relative">
                <input
                  name="email"
                  className="border rounded w-full py-2 pl-10 pr-3 text-black leading-tight shadow"
                  id="email"
                  type="email"
                  placeholder=""
                  onChange={this.onChange}
                />
                <div className="absolute top-0 left-0 bg-gray-200 py-2 px-3 rounded-l  text-gray-500">
                  {' '}
                  <i className="fa fa-user" aria-hidden="true"></i>
                </div>
              </div>
              
            </div>

            <div className="mb-2">
              <label
                className="block text-gray-700 text-sm mb-2"
                htmlFor="password"
              >
                Password*
              </label>
              <div className="relative">
                <input
                  name="password"
                  id="signup-password"
                  className="shadow appearance-none border pl-10 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  type="password"
                
                />
                <div className="absolute top-0 left 0 py-2 px-3 bg-gray-200 text-gray-500 rounded-l">
                  <i className="fa fa-unlock-alt" aria-hidden="true"></i>
                </div>
              </div>
             
            
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm mb-2"
                htmlFor="password"
              >
                Confirm Password*
              </label>
              <div className="relative">
                <input
                  name="confirm-password"
                  className="shadow appearance-none border pl-10 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                 
                />
                <div className="absolute top-0 left 0 py-2 px-3 bg-gray-200 text-gray-500 rounded-l">
                  <i className="fa fa-unlock-alt" aria-hidden="true"></i>
                </div>
              </div>
              
            </div>

            <button
              className="bg-blue-700 text-white w-full py-2 rounded" >
              Create Account
            </button>
            <div className="py-4 text-center text-gray-600 text-sm">
              <span>
                <Link to="/Login" className="font-semibold">
                  {' '}
                  <i
                    className="fa fa-angle-double-right"
                    aria-hidden="true"
                  ></i>
                  Back to Login
                </Link>
              </span>
            </div>
          </form>
        </div>
        
      </div>
    )  
  };

}

export default Register;
