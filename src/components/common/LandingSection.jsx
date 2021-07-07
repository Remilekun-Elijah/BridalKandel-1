import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';

class LandingSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHamburgerClick: false
    }
    this.onClickHamburger = this.onClickHamburger.bind(this);
  }

  onClickHamburger() {
    this.setState({ isHamburgerClick: !this.state.isHamburgerClick })
  }

  render() {
    return (
      <div style={{ background: "linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/assets/wedding-dress.jpg')", backgroundSize: "cover" }} className="px-4 md:px-12 lg:px-20 xl:px-20 pb-4 md:pb-10 lg:pb-32 xl:pb-20 no-repeat" >
        <div className="block lg:hidden -mb-12 pt-6">
          <button onClick={this.onClickHamburger} className="flex items-center px-3 py-2 rounded text-gray-500 bg-gray-200 ml-auto focus:outline-none focus:shadow-none">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
          </button>
        </div>
        <div className="pt-4 lg:hidden">
          <Link to="/" className="flex-initial">
            DAMMY'S CLOSET
          </Link>
        </div>

        <div className="flex items-center pt-6">
          <Link to="/" className="flex-initial hidden lg:block font-bold text-lg text-red-500">
          DAMMY'S CLOSET
          </Link>
          {this.state.isHamburgerClick ?
            <div className="flex-auto font-semibold md:mt-6 lg:mt-0 xl:mt-0 text-center md:text-center lg:text-right xl:text-right lg:items-center text-white text-xs mt-2 text-right">
              <NavLink to="/" activeClassName="active" exact={true} className="nav-link block mt-4 hover:text-white lg:inline-block lg:mt-0 lg:mr-6 xl:mr-6">
                HOME
          </NavLink>
              <NavLink to="/Login" activeClassName="active" className="nav-link block mt-4 hover:text-white lg:inline-block lg:mt-0 lg:mr-6 xl:mr-6">
                LOGIN
            </NavLink>
            <NavLink to="/cart" activeClassName="active" className="nav-link block mt-4 hover:text-white lg:inline-block lg:mt-0 lg:mr-6 xl:mr-6">
            <i class="fa fa-shopping-cart mr-2" aria-hidden="true"></i>
                CART
            </NavLink>
            <NavLink to="/my-account" activeClassName="active" className="nav-link block mt-4 hover:text-white lg:inline-block lg:mt-0 lg:mr-6 xl:mr-6">
                ACCOUNT
            </NavLink>
            </div> :
            window.screen.width > 1000 ?
              <div className="flex-auto font-semibold mt-6 md:mt-6 lg:mt-0 xl:mt-0 text-center md:text-center lg:text-right xl:text-right lg:items-center text-white text-xs mt-2 text-right px-4">
                <NavLink to="/" exact={true} activeClassName="active" className="nav-link block mt-4 hover:text-white lg:inline-block lg:mt-0 lg:mr-6 xl:mr-6">
                  HOME
          </NavLink>

          <NavLink to="/Login" activeClassName="active" className="nav-link block mt-4 hover:text-white lg:inline-block lg:mt-0 lg:mr-6 xl:mr-6">
                  LOG IN
            </NavLink>

            <NavLink to="/cart" activeClassName="active" className="nav-link block mt-4 hover:text-white lg:inline-block lg:mt-0 lg:mr-6 xl:mr-6">
            <i class="fa fa-shopping-cart mr-2" aria-hidden="true"></i>
                  CART
                 
            </NavLink>

                <NavLink to="/services" activeClassName="active" className="nav-link block mt-4 hover:text-white lg:inline-block lg:mt-0 lg:mr-6 xl:mr-6">
                  ACCOUNT
            </NavLink>


                <div className="ml-10 text-white text-xl inline-block">
                  <span className="mr-4 cursor-pointer"><i className="fa fa-facebook" aria-hidden="true"></i></span>
                  <span className="mr-4 cursor-pointer"><i className="fa fa-instagram" aria-hidden="true"></i></span>
                  <span className="cursor-pointer"><i className="fa fa-twitter" aria-hidden="true"></i></span>
                </div>
              </div> :
              null}
        </div>
        {
          !this.props.contentName ?
            <div className="block mt-4 pt-4">
              <ScrollAnimation
                animateIn='fadeIn'
                animateOut='fadeOut'
                duration={2}
              >
                <div className="text-white py-32">
                  <div className="mb-4 md:mb-0 lg:mb-0 xl:mb-0">
                    <p className="font-semibold text-2xl md:text-5xl text-center tracking-wider leading-none mt-4">WELCOME TO DAMMY'S CLOSET</p>
                  </div>
                  <div>
                    <p className="font-semibold text-center tracking-wider text-xs md:text-base">We are always ready to deliver to your door step everyday.</p>
                  </div>

                 
                 
                </div>

              </ScrollAnimation>
            </div> :
            <ScrollAnimation
            animateIn='fadeIn'
            animateOut='fadeOut'
            duration={2}
          >
          
            </ScrollAnimation>

        }
      </div>
    )
  }
}


export default LandingSection;