import React from 'react'
import Blogs from './components/Blogs'
import LoginForm from './components/LoginForm'
import blogService from './services/blogs'
import loginService from './services/login'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      blogs: [],
      username: '',
      password: '',
      user: null
    }
  }

  componentDidMount() {
    blogService.getAll().then(blogs =>
      this.setState({ blogs })
    )
  } 

  login = async (event) => {
    event.preventDefault()
    try {
      const user = await loginService.login({
        username: this.state.username,
        password: this.state.password
      })
      
      this.setState({ 
        username: '', 
        password: '', 
        user
      })
    } catch (exception) {
      console.log('An error occurred during the login process')
    }
  }
  
  handleLoginFieldChange= (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    return (
      <div>     
        <LoginForm
          user={this.state.user} 
          username={this.state.username}
          password={this.state.password}
          login = {this.login}
          handleLoginFieldChange = {this.handleLoginFieldChange}
        />
        <Blogs user={this.state.user} blogs={this.state.blogs} />
      </div>
    );
  }
}

export default App;
