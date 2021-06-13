import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2';
import { bindActionCreators } from 'redux';
import 'react-phone-input-2/lib/style.css';
import { registeUserAction, loginAction } from '../../actions/authAction';
import { validateInputFields, returnBackendError } from '../../helper';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

class Index extends Component {

  constructor(props) {
    super(props);
    this.state = {
      login: true,
      register: false,
      userData: {
        name: '',
        email: '',
        password: '',
        cpassword: '',
        phone: ''
      },
      loginData: {
        email: '',
        password: ''
      },
      errorResponse: {},
      redirectUser: false,
    }
    this.onSwitch = this.onSwitch.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onChangeLogin = this.onChangeLogin.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this)
  }

  onSwitch(eventName) {
    if (eventName === 'login') {
      this.setState({
        login: true,
        register: false
      })
    }
    else if (eventName === 'register') {
      this.setState({
        login: false,
        register: true
      })
    }
  }

  onChange(event) {
    const userData = this.state.userData;
    userData[event.target.name] = event.target.value
    this.setState(() => ({
      userData
    }))
  }
  onChangeLogin(event) {
    const loginData = this.state.loginData;
    loginData[event.target.name] = event.target.value
    this.setState(() => ({
      loginData
    }))
  }

  onChangePhone(phone) {
    let userData = this.state.userData;
    userData['phone'] = phone
    this.setState(() => ({ userData }));
  }


  componentDidMount() {
    if (cookies.get('token')) {
      this.props.history.push('/dashboard');
    }
  }


  /**
* @description - handles the register sign up form
*
* @param  {object} event the event for the content field
*
* @return {void} no return or void
*/
  handleRegisterSubmit(event) {
    event.preventDefault();
    const validationRes = validateInputFields(this.state.userData);
    if (Object.keys(validationRes).length !== 0) {
      this.setState(() => ({ errorResponse: validationRes }))
      return
    }
    this.setState(() => ({
      disableBtn: true,
      loading: true
    }))
    this.state.userData.phone = `+${this.state.userData.phone}`
    this.props.actions.registeUserAction(this.state.userData)
      .then((res) => {
        this.setState(() => ({
          disableBtn: false,
          loading: false
        }))
        if (res === 'success') {
          this.setState(() => ({ successResponse: 'You have successfully registered' }))
          setTimeout(() => {
            this.setState(() => ({
              login: true,
              register: false
            }));
          }, 3000);
        } else {
          if (Object.keys(this.props.signupError).length !== 0) {
            const errorResponse = returnBackendError(this.props.signupError)
            this.setState(() => ({ errorResponse }))
          } else {
            this.setState(() => ({ signupError: this.props.signupError }))
          }
        }
      })
  }

  handleLoginSubmit(event) {
    event.preventDefault();
    const validationRes = validateInputFields(this.state.loginData);
    if (Object.keys(validationRes).length !== 0) {
      this.setState(() => ({ errorResponse: validationRes }))
      return
    }
    this.setState(() => ({
      disableBtn: true,
      loading: true,
    }))
    this.props.actions.loginAction(this.state.loginData)
      .then((res) => {
        this.setState(() => ({
          disableBtn: false,
          loading: false
        }))
        if (res === 'success') {
          this.setState(() => ({ successResponse: 'You have successfully login' }))
          setTimeout(() => {
            this.setState(() => ({
              redirectUser: true
            }));
          }, 3000);
        } else {
          if (Object.keys(this.props.loginError).length !== 0) {
            const errorResponse = returnBackendError(this.props.loginError)
            this.setState(() => ({ errorResponse }))
          } else {
            this.setState(() => ({ loginError: this.props.loginError }))
          }
        }
      })
  }

  onFocus(event) {
    let errorResponse = this.state.errorResponse;
    errorResponse[event.target.name] = ''
    switch (event.target.name) {
      case 'name':
        this.setState(() => ({ errorResponse }));
        break;
      case 'email':
        this.setState(() => ({ errorResponse }));
        break;
      case 'phone':
        this.setState(() => ({ errorResponse }));
        break;
      case 'password':
        this.setState(() => ({ passwordError: '', errorResponse }));
        break;
      case 'cpassword':
        this.setState(() => ({ passwordConfirmError: '', errorResponse }));
    }
  }

  /**
   * @description - handles the onBlur event
   *
   * @param  {object} event the event for the content field
   *
   * @return {void} no return or void
   *
   */
  onBlur(event) {
    const pass = this.state.userData.password;
    switch (event.target.name) {
      case 'password':
        if (event.target.value.length < 6 || !event.target.value) {
          this.setState(() => ({
            passwordError: 'Provide a valid password with minimum of 6 characters',
          }));
          return false;
        } else {
          this.setState(() => ({ passwordError: '' }));
          return true;
        }
      case 'cpassword':
        if (event.target.value !== pass) {
          this.setState(() => ({
            passwordConfirmError: 'Password does not match'
          }));
        } else {
          this.setState(() => ({ passwordConfirmError: '' }));
        }
    }
  }

  render() {
    const {
      login,
      register,
      userData,
      errorResponse,
      disableBtn,
      loading,
      successResponse,
      signupError,
      loginData,
      loginError,
      passwordConfirmError,
      passwordError,
      redirectUser } = this.state
    return (
      redirectUser ? <Redirect to="/dashboard" /> :
        <div className="">
          <div className="flex bg-primary-blue">
            <div className="flex-initial w-3/12">
              <div style={{ background: "linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/assets/carclean.png')", backgroundSize: "cover" }} className="h-screen" >
                <Link to='/'>
                  <div className="pt-8 md:px-12 px-2">
                    <img className="inline-block" src="/assets/kaklin.png" width="40" alt="logo" />
                    {/* <div className="hidden md:inline-block font-semibold ml-2 text-xs xl:text-base text-white"> SPORTYWASH </div> */}
                  </div>
                </Link>
              </div>
            </div>
            <div className="flex-auto m-auto">
              <div className="w-10/12 md:w-6/12 xl:w-4/12 m-auto">
                <p className="text-white text-2xl font-semibold leading-none">Detailing Services <br /> with a Personal Touch</p>
                <p className="mt-2 text-white">Access to the most affordable car wash services in the entire world.</p>
                <div className="mt-6">
                  <div className="flex">
                    <div className="flex-initial" onClick={() => this.onSwitch('login')}>
                      <button className="focus:outline-none font-semibold text-white">Login</button>
                      {login ? <div className="border-b-4 border-white pt-2"></div> : null}
                    </div>
                    <div className="flex-initial ml-4" onClick={() => this.onSwitch('register')}>
                      <button className="focus:outline-none font-semibold text-primary-gray">Register</button>
                      {register ? <div className="border-b-4 border-white pt-2"></div> : null}
                    </div>
                  </div>
                  {
                    login ?
                      <div className="w-full ">
                        <form onSubmit={this.handleLoginSubmit} className="rounded pt-6">
                          <div className="">
                            <input
                              className="shadow rounded-lg appearance-none rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none"
                              id="username"
                              type="text"
                              placeholder="Email Address"
                              onChange={this.onChangeLogin}
                              defaultValue={loginData && loginData.email}
                              name='email'
                              onFocus={this.onFocus}
                            />
                          </div>
                          {errorResponse.email ? <p className="text-red-500 text-sm text-left italic my-2">{errorResponse.email}</p> : null}
                          <div className="mt-2">
                            <input
                              className="shadow rounded-lg appearance-none rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none"
                              id="password"
                              type="password"
                              placeholder="Password"
                              defaultValue={loginData && loginData.password}
                              name='password'
                              onChange={this.onChangeLogin}
                              onFocus={this.onFocus}
                            />
                          </div>
                          {errorResponse.password ? <p className="text-red-500 text-sm text-left italic my-2">{errorResponse.password}</p> : null}
                          <p className="text-white text-sm italic my-2">{successResponse}</p>
                          <p className="text-red-500 text-sm italic my-2">{loginError}</p>
                          <div className="flex mt-4 items-center">
                            <div className="flex-initial mr-4">
                              <button
                                className={`bg-white text-primary-blue py-2 px-6 rounded-lg focus:outline-none ${disableBtn && 'opacity-50 cursor-not-allowed'}`}
                                type="submit">
                                {loading ? <i className="fa fa-spinner fa-pulse"></i> : 'Login'}
                              </button>
                            </div>
                            <div className="flex-initial">
                              <Link to='/reset-password'>
                                <a className="text-white focus:outline-none" href="/forgot-password">Forgot Password?</a>
                              </Link>
                            </div>
                          </div>
                        </form>
                        {/* <div className="mt-4">
                          <p className="inline-block text-xs md:text-sm focus:outline-none text-white">Or login with</p>
                          <p className="inline-block text-xs md:text-sm focus:outline-none cursor-pointer font-semibold text-white ml-8">Facebook</p>
                          <p className="inline-block text-xs md:text-sm focus:outline-none cursor-pointer font-semibold text-white ml-2">Google</p>
                          <p className="inline-block text-xs md:text-sm focus:outline-none cursor-pointer font-semibold text-white ml-2">Linkedin</p>
                        </div> */}
                      </div> :
                      register ?
                        <div className="w-full ">
                          <form
                            className="rounded pt-6"
                            onSubmit={this.handleRegisterSubmit}
                          >
                            <div className="">
                              <input
                                className="shadow rounded-lg appearance-none rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none"
                                id="username"
                                type="text"
                                placeholder="name"
                                onChange={this.onChange}
                                onFocus={this.onFocus}
                                name="name"
                                defaultValue={userData && userData.name}
                              />
                            </div>
                            {errorResponse.name ? <p className="text-red-500 text-sm text-left italic my-2">{errorResponse.name}</p> : null}
                            <div className="mt-2">
                              <input
                                className="shadow rounded-lg appearance-none rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none"
                                id="email"
                                type="email"
                                placeholder="email"
                                onChange={this.onChange}
                                onFocus={this.onFocus}
                                name="email"
                                defaultValue={userData && userData.email}
                              />
                            </div>
                            {errorResponse.email ? <p className="text-red-500 text-sm text-left italic my-2">{errorResponse.email}</p> : null}
                            <div className="mt-2">
                              <input
                                className="shadow rounded-lg appearance-none rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none"
                                id="password"
                                type="password"
                                placeholder="Password"
                                onChange={this.onChange}
                                onFocus={this.onFocus}
                                onBlur={this.onBlur}
                                name="password"
                                defaultValue={userData && userData.password}
                              />
                            </div>
                            {errorResponse.password ? <p className="text-red-500 text-sm text-left italic my-2">{errorResponse.password}</p> : null}
                            <p className="text-red-500 text-sm text-left italic my-2">{passwordError}</p>
                            <div className="mt-2">
                              <input
                                className="shadow rounded-lg appearance-none rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none"
                                id="cpassword"
                                type="password"
                                placeholder="confirm password"
                                onChange={this.onChange}
                                onFocus={this.onFocus}
                                onBlur={this.onBlur}
                                name="cpassword"
                                defaultValue={userData && userData.cpassword}
                              />
                            </div>
                            {errorResponse.cpassword ? <p className="text-red-500 text-sm text-left italic my-2">{errorResponse.cpassword}</p> : null}
                            <p className="text-red-500 text-sm text-left italic my-2">{passwordConfirmError}</p>
                            <div className="mt-2">
                              <PhoneInput
                                country={'ng'}
                                value={userData && userData.phone}
                                onChange={phone => this.onChangePhone(phone)}
                                inputClass="shadow rounded-lg appearance-none rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none"
                              />
                            </div>
                            {errorResponse.phone ? <p className="text-red-500 text-sm text-left italic my-2">{errorResponse.phone}</p> : null}
                            <p className="text-white text-sm italic my-2">{successResponse}</p>
                            <p className="text-red-500 text-sm italic my-2">{signupError}</p>
                            <div className="flex mt-4 items-center">
                              <div className="flex-initial mr-4">
                                <button
                                  className={`bg-white text-primary-blue py-2 px-6 rounded-lg focus:outline-none ${disableBtn && 'opacity-50 cursor-not-allowed'}`}
                                  type="submit">
                                  {loading ? <i className="fa fa-spinner fa-pulse"></i> : 'Register'}
                                </button>
                              </div>
                            </div>
                          </form>
                        </div> : null}
                </div>
              </div>
              <div>

              </div>

            </div>
          </div>
        </div>
    )
  }
}


/**
 * @description mapStateToProps - maps state value to props
 *
 * @param  {object} state the store state
 *
 * @return {Object} returns state object
 *
 */
function mapStateToProps(state) {
  return {
    signupError: state.auth.signupErrorResponse,
    loginError: state.auth.loginError
  };
}

/**
 * @description mapDispatchToProps - maps dispatch to props value
 *
 * @param  {Function} dispatch dispatchs function
 *
 * @return {Object} returns an Object
 *
 */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      registeUserAction,
      loginAction
    }, dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Index);