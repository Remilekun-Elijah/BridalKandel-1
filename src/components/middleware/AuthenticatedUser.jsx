import React, { Component } from 'react';
import Cookies from 'universal-cookie'; 
const cookies = new Cookies();

/**
 * @class AuthenticateUser
 *
 * @param  {object} ComposedComponent the store state
 *
 * @classdesc authenticate user component
 *
 */
export default function AuthenticateUser(ComposedComponent) {
/**
 * @class AuthenticateUser
 *
 * @classdesc authenticate user component
 *
 */
  class Authenticate extends Component {
  /**
     * @method componentWillMount
     *
     * @return {*} set user authentication status
     *
     */
    componentWillMount() {
      const token = cookies.get('token');
      if (!token) {
        this.props.history.push('/');
      }
    }

    /**
   * @description render - renders the class component
   *
   * @return {object} returns an object
   *
   */
    render() {
      return (
        <ComposedComponent {...this.props} />
      );
    }
  }



  return Authenticate;
}