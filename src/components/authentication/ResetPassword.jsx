import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import 'react-phone-input-2/lib/style.css';
import { sendPasswordResetLink, resetPasswordAction } from '../../actions/authAction';
import { validateInputFields, returnBackendError } from '../../helper';
import Cookies from 'universal-cookie'
const cookies = new Cookies()

class ResetPassword extends Component {

    constructor(props) {
        super(props);
        this.state = {
            forget: true,
            reset: false,
            forgetPasswordData: {
                email: ''
            },
            resetPasswordData: {
                email: '',
                token: '',
                password: '',
                password_confirmation: ''
            },
            errorResponse: {}

        }

        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeReset = this.onChangeReset.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.handleForgetPassword = this.handleForgetPassword.bind(this);
        this.handleResetPassword = this.handleResetPassword.bind(this);
        this.onResend = this.onResend.bind(this);
        this.onBlur = this.onBlur.bind(this)
    }

    componentDidMount() {
        const email = cookies.get('email');
        if (email) {
            let resetPasswordData = this.state.resetPasswordData
            resetPasswordData['email'] = email.email.email
            this.setState(() => ({
                resetPasswordData,
                reset: true,
                forget: false
            }));
        }
    }

    onChangeEmail(event) {
        const forgetPasswordData = this.state.forgetPasswordData;
        forgetPasswordData[event.target.name] = event.target.value
        this.setState(() => ({
            forgetPasswordData
        }))
    }

    onChangeReset(event) {
        const resetPasswordData = this.state.resetPasswordData;
        resetPasswordData[event.target.name] = event.target.value
        this.setState(() => ({
            resetPasswordData
        }))
    }


    handleForgetPassword(event) {
        event.preventDefault();
        const validationRes = validateInputFields(this.state.forgetPasswordData);
        if (Object.keys(validationRes).length !== 0) {
            this.setState(() => ({ errorResponse: validationRes }))
            return
        }
        this.setState(() => ({
            disableBtn: true,
            loading: true,
        }))
        this.props.actions.sendPasswordResetLink(this.state.forgetPasswordData)
            .then((res) => {
                this.setState(() => ({
                    disableBtn: false,
                    loading: false
                }))
                if (res === 'success') {
                    this.setState(() => ({ successResponse: 'We have mailed your reset code' }))
                    setTimeout(() => {
                        this.setState(() => ({
                            reset: true,
                            forget: false,
                            successResponse: ''
                        }));
                    }, 3000);
                } else {
                    if (Object.keys(this.props.resetLinkError).length !== 0) {
                        const errorResponse = returnBackendError(this.props.resetLinkError)
                        this.setState(() => ({ errorResponse }))
                    } else {
                        this.setState(() => ({ resetLinkError: this.props.resetLinkError }))
                    }
                }
            })
    }

    onResend() {
        this.setState(() => ({
            resending: true,
            disableLink: true
        }))
        this.props.actions.sendPasswordResetLink(cookies.get('email').email)
            .then((res) => {
                this.setState(() => ({
                    resending: false,
                    disableLink: false
                }))
                if (res === 'success') {
                    this.setState(() => ({ successResponse: 'We have mailed your reset code' }))
                    setTimeout(() => {
                        this.setState(() => ({
                            resending: false,
                            disableLink: false,
                            successResponse: ''
                        }));
                    }, 3000);
                } else {
                    if (Object.keys(this.props.resetLinkError).length !== 0) {
                        const errorResponse = returnBackendError(this.props.resetLinkError)
                        this.setState(() => ({ errorResponse }))
                    } else {
                        this.setState(() => ({ resetLinkError: this.props.resetLinkError }))
                    }
                }
            })
    }

    handleResetPassword(event) {
        event.preventDefault();
        const validationRes = validateInputFields(this.state.resetPasswordData);
        if (Object.keys(validationRes).length !== 0) {
            this.setState(() => ({ errorResponse: validationRes }))
            return
        }
        this.setState(() => ({
            disableBtn: true,
            loading: true
        }))
        this.props.actions.resetPasswordAction(this.state.resetPasswordData)
            .then((res) => {
                this.setState(() => ({
                    disableBtn: false,
                    loading: false
                }))
                if (res === 'success') {
                    this.setState(() => ({ successResponse: 'You have successfully Reset your Password' }))
                    setTimeout(() => {
                        this.setState(() => ({
                            reset: true,
                            forget: false,
                            successResponse: '',
                            redirectUser: true
                        }));
                    }, 3000);
                } else {
                    if (Object.keys(this.props.resetPasswordError).length !== 0) {
                        const errorResponse = returnBackendError(this.props.resetPasswordError)
                        this.setState(() => ({ errorResponse }))
                    } else {
                        this.setState(() => ({ resetPasswordError: this.props.resetPasswordError }))
                    }
                }
            })
    }


    onFocus(event) {
        let errorResponse = this.state.errorResponse;
        errorResponse[event.target.name] = ''
        switch (event.target.name) {
            case 'email':
                this.setState(() => ({ errorResponse }));
                break;
            case 'token':
                this.setState(() => ({ errorResponse }));
                break;
            case 'password':
                this.setState(() => ({ passwordError: '', errorResponse }));
                break;
            case 'password_confirmation':
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
        const pass = this.state.resetPasswordData.password;
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
            case 'password_confirmation':
                if (event.target.value !== pass) {
                    this.setState(() => ({
                        resetPasswordError: 'Password does not match'
                    }));
                } else {
                    this.setState(() => ({ resetPasswordError: '' }));
                }
        }
    }


    render() {
        const {
            forget,
            reset,
            errorResponse,
            successResponse,
            resetLinkError,
            loading,
            disableBtn,
            resetPasswordData,
            resetPasswordError,
            redirectUser,
            resending,
            disableLink
        } = this.state
        return (
            redirectUser ? <Redirect to="/authentication" /> :
                <div className="">
                    <div className="flex bg-primary-blue">
                        <div className="flex-initial w-3/12">
                            <div style={{ background: "linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/assets/carclean.png')", backgroundSize: "cover" }} className="h-screen" >
                                <Link to='/'>
                                    <div className="pt-8 md:px-12 px-2">
                                        <img className="inline-block w-10" src="/assets/kaklin.png" width="40" alt="logo" />
                                        {/* <div className="hidden md:inline-block font-semibold ml-2 text-xs xl:text-base text-white"> SPORTYWASH </div> */}
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="flex-auto m-auto">
                            <div className="w-10/12 md:w-6/12 xl:w-4/12 m-auto">
                                <div className="flex">
                                    <div className="flex-initial w-56">
                                        <p className="text-white text-xl mb-6 font-semibold leading-none">Reset Password</p>
                                    </div>

                                    <Link to="/authentication" className="flex-auto text-right">
                                        <button className="text-white text-sm focus:outline-none font-semibold">
                                            <i className="fa fa-arrow-left mr-2" aria-hidden="true"></i>Back to Login</button>
                                    </Link>

                                </div>
                                {
                                    forget ?
                                        <div>
                                            <form
                                                onSubmit={this.handleForgetPassword}
                                                className="">
                                                <div className="">
                                                    <input
                                                        className="shadow rounded-lg appearance-none rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none"
                                                        id="email"
                                                        type="email"
                                                        placeholder="Email Address"
                                                        name='email'
                                                        onFocus={this.onFocus}
                                                        onChange={this.onChangeEmail}

                                                    />
                                                </div>
                                                {errorResponse.email ? <p className="text-red-500 text-sm text-left italic my-2">{errorResponse.email}</p> : null}
                                                <p className="text-white text-sm italic my-2">{successResponse}</p>
                                                <p className="text-red-500 text-sm italic my-2">{resetLinkError}</p>
                                                <div className="mt-4">
                                                    <button
                                                        className={`bg-white text-primary-blue py-2 px-6 rounded-lg focus:outline-none ${disableBtn && 'opacity-50 cursor-not-allowed'}`}
                                                        type="submit">
                                                        {loading ? <i className="fa fa-spinner fa-pulse"></i> : 'Reset'}
                                                    </button>
                                                </div>
                                            </form>
                                        </div> :
                                        reset ?
                                            <div>
                                                <form className="" onSubmit={this.handleResetPassword}>
                                                    <div className="">
                                                        <input
                                                            className="shadow rounded-lg appearance-none rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none"
                                                            id="email"
                                                            type="email"
                                                            placeholder="Email"
                                                            name='email'
                                                            defaultValue={resetPasswordData && resetPasswordData.email}
                                                            onChange={this.onChangeReset}
                                                            onFocus={this.onFocus}
                                                            readOnly
                                                        />
                                                    </div>
                                                    {errorResponse.email ? <p className="text-red-500 text-sm text-left italic my-2">{errorResponse.email}</p> : null}
                                                    <div className="mt-2">
                                                        <input
                                                            className="shadow rounded-lg appearance-none rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none"
                                                            id="token"
                                                            type="text"
                                                            placeholder="Received Code"
                                                            name='token'
                                                            defaultValue={resetPasswordData && resetPasswordData.token}
                                                            onChange={this.onChangeReset}
                                                            onFocus={this.onFocus}
                                                        />
                                                    </div>
                                                    {errorResponse.token ? <p className="text-red-500 text-sm text-left italic my-2">{errorResponse.token}</p> : null}
                                                    <div className="mt-2">
                                                        <input
                                                            className="shadow rounded-lg appearance-none rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none"
                                                            id="pasword"
                                                            type="password"
                                                            placeholder="Password"
                                                            name='password'
                                                            onBlur={this.onBlur}
                                                            defaultValue={resetPasswordData && resetPasswordData.password}
                                                            onChange={this.onChangeReset}
                                                            onFocus={this.onFocus}
                                                        />
                                                    </div>
                                                    {errorResponse.password ? <p className="text-red-500 text-sm text-left italic my-2">{errorResponse.password}</p> : null}
                                                    <div className="mt-2">
                                                        <input
                                                            className="shadow rounded-lg appearance-none rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none"
                                                            id="password"
                                                            type="password"
                                                            placeholder="Confirm Password"
                                                            name='password_confirmation'
                                                            onBlur={this.onBlur}
                                                            defaultValue={resetPasswordData && resetPasswordData.password_confirmation}
                                                            onChange={this.onChangeReset}
                                                            onFocus={this.onFocus}
                                                        />
                                                    </div>
                                                    {errorResponse.password_confirmation ? <p className="text-red-500 text-sm text-left italic my-2">{errorResponse.password_confirmation}</p> : null}
                                                    <p className="text-white text-sm italic my-2">{successResponse}</p>
                                                    <p className="text-red-500 text-sm italic my-2">{resetPasswordError}</p>
                                                    <div className="text-right">
                                                        <button className="text-sm mt-2 text-white focus:outline-none" onClick={this.onResend}>
                                                            <em className="mr-1">Didn't receive reset code?</em>
                                                            <span className={`font-semibold text-black ${disableLink && 'opacity-50 cursor-not-allowed'}`}>{resending ? 'resending...' : 'Resend!'}</span>
                                                        </button>
                                                    </div>
                                                    <div className="mt-4">
                                                        <button
                                                            className={`bg-white text-primary-blue py-1 px-4 rounded-lg focus:outline-none ${disableBtn && 'opacity-50 cursor-not-allowed'}`}
                                                            type="submit">
                                                            {loading ? <i className="fa fa-spinner fa-pulse"></i> : 'Reset Password'}
                                                        </button>
                                                    </div>
                                                </form>
                                            </div> : null
                                }


                                <div>

                                </div>
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
        resetLink: state.auth.resetLink,
        resetLinkError: state.auth.resetLinkError,
        resetPassword: state.auth.resetPassword,
        resetPasswordError: state.auth.resetPasswordError
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
            sendPasswordResetLink,
            resetPasswordAction
        }, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);