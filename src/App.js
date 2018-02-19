import React from 'react'
import BlogView from './components/BlogView'
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

    const loggedUserJson = window.localStorage.getItem('loggedBloglistUser')

    if (loggedUserJson) {
      const user = JSON.parse(loggedUserJson)
      this.setState({ user })
      blogService.setToken(user.token)
    }
  } 

  login = async (event) => {
    event.preventDefault()

    try {
      const user = await loginService.login({
        username: this.state.username,
        password: this.state.password
      })
      
      window.localStorage.setItem('loggedBloglistUser', JSON.stringify(user))
      blogService.setToken(user.token)

      this.setState({ 
        username: '', 
        password: '', 
        user
      })
    } catch (exception) {
      console.log('An error occurred during the login process')
    }
  }

  logout = () => {
    window.localStorage.removeItem('loggedBloglistUser')
    this.setState({ user: null })
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
        <BlogView 
          user={this.state.user} 
          blogs={this.state.blogs}
          logout={this.logout} 
        />
      </div>
    );
  }
}

export default App;
