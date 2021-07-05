import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { logoutAction } from '../../actions/authAction';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { returnBackendError } from '../../helper'
import { authenticatedUser } from '../../actions/authAction';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
      
    }

    handleLogout = () => {
        logoutAction()
    }

    componentDidMount() {
        this.setState(() => ({
            loading: true
        }))
        this.props.actions.authenticatedUser()
            .then(() => {
                this.setState(() => ({
                    loading: false
                }))
            })
    }

    // toggleModal = (event) => {
    //     let modal = document.querySelector('.verifyModal')
    //     modal.classList.toggle('opacity-0')
    //     modal.classList.toggle('pointer-events-none')
    // }

    // onChange(event) {
    //     let verifyData = this.state.verifyData
    //     verifyData[event.target.name] = event.target.value
    //     this.setState(() => ({ verifyData }))
    // }


    render() {
        const {
        } = this.state
        const { authenticatedUser } = this.props;
        return (
            <div>
                <div className="flex border-b py-2 px-4 md:px-8 xl:px-56">
                    <Link to="/" >
                        <div className="flex-1">
                            <img className="inline-block" src="/assets/Kaklin (1).png" width="70" alt="logo" />
                        </div>
                    </Link>
                    <div className="flex-auto">
                        <div className="text-right">
                            <button
                                className="text-gray-600 text-lg focus:outline-none cursor-pointer"
                                onClick={() => this.handleLogout()}
                            >Log out</button>
                        </div>
                    </div>

                </div>
                {/* {
                    loadingVerification ?
                        <div className="bg-red-600 text-white text-center rounded py-2 mb-2 shadow-lg">Sending otp to your phone...</div> :
                        <div>
                            {
                                authenticatedUser && !authenticatedUser.phone_verified_at ?
                                    <div className="bg-red-500 text-white text-center rounded py-2 mb-4 shadow-lg">Click <p className="font-semibold underline inline cursor-pointer" onClick={this.onSendVerificationCode}>here</p> to verify your phone number</div> : null
                            }
                        </div>
                } */}
                {/* <div className="z-50 verifyModal opacity-0 pointer-events-none fixed w-full h-full top-0 left-0 flex items-center justify-center">
                    <div onClick={(event) => this.toggleModal(event)} className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
                    <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded-lg shadow-lg z-50 overflow-y-auto">
                        <div className="modal-content text-left">
                            <div className="px-6 py-8">
                                <div className="text-xl text-center font-semibold mb-6">Verify OTP</div>
                                <form onSubmit={this.onVerifyPhone}>
                                    <div className="relative mb-3">
                                        <input
                                            name="otp"
                                            className="bg-white focus:outline-none border border-gray-300 rounded-lg py-2 px-2 block w-full appearance-none leading-normal"
                                            type="text"
                                            placeholder="Phone Verification Code"
                                            onChange={this.onChange}
                                            onFocus={this.onFocus}
                                        />
                                    </div>
                                   
                                </form>

                            </div>
                        </div>
                    </div>
                </div> */}
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
        authenticatedUserError: state.auth.authenticatedUserError,
        resendVerCodeError: state.auth.resendVerCodeError
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
            authenticatedUser
        }, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);