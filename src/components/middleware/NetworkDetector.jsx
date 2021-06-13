import React, { Component } from 'react';

export default function (ComposedComponent) {
  class NetworkDetector extends Component {
    state = {
      isDisconnected: false,
      loading: false
    }

    componentDidMount() {
      this.setState({ loading: true });
      this.handleConnectionChange();
      window.addEventListener('online', this.handleConnectionChange);
      window.addEventListener('offline', this.handleConnectionChange);
    }

    componentWillUnmount() {
      window.removeEventListener('online', this.handleConnectionChange);
      window.removeEventListener('offline', this.handleConnectionChange);
    }


    handleConnectionChange = () => {
      const condition = navigator.onLine ? 'online' : 'offline';
      if (condition === 'online') {
        const webPing = setInterval(
          () => {
            fetch('//google.com', {
              mode: 'no-cors',
            })
              .then(() => {
                this.setState({ isDisconnected: false }, () => {
                  return clearInterval(webPing)
                });
              }).catch(() => this.setState({ isDisconnected: true, loading: false }))
          }, 2000);
        return;
      }
      return this.setState({ isDisconnected: true, loading: false });
    }

    render() {
      const { isDisconnected, loading } = this.state;
      return (
        <div>
          {
            !loading && isDisconnected && (
            <div className="internet py-32">
              <img className="m-auto w-1/4" src="/assets/interneterrorimg.png" alt="error" />
              <div className="text-center">
                <p className="text-xl text-primary-deep-gray">Internet connection Lost! try again.</p>
              </div>
            </div>
          )
          }
          {!isDisconnected && <ComposedComponent {...this.props} /> }
        </div>
      );
    }
  }

  return NetworkDetector;
}