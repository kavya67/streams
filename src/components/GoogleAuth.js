import React from "react";

class GoogleAuth extends React.Component {
  state = {
    isSignedIn: null,
  };
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "614727568404-i6oicsuf3m3am13fcqh5etgs965pff60.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = () => {
    this.setState({isSignedIn: this.auth.isSignedIn.get()})
  }
  renderAuthButton() {
    if(this.state.isSignedIn === null){
        return null
    }else if(this.state.isSignedIn){
        return <button className="ui red google button">
            <i className="google icon"></i>
            Sign Out
        </button>
    }else {
        return <button className="ui red google button">
        <i className="google icon"></i>
        Sign In with Google
    </button>
    }
}

  render() {

    return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;
