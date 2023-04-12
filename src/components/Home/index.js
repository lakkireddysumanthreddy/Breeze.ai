import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import './index.css'

class Home extends Component {
  onClickLogout = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken === undefined) {
      return <Redirect to="/login" />
    }

    return (
      <div className="main-container">
        <div className="card">
          <h1>Hello World</h1>
        </div>
        <button onClick={this.onClickLogout} className="button" type="button">
          Logout
        </button>
      </div>
    )
  }
}

export default Home
