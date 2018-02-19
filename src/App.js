import React from 'react'
import BlogView from './components/BlogView'
import LoginForm from './components/LoginForm'
import BlogForm from './components/BlogForm'
import blogService from './services/blogs'
import loginService from './services/login'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      blogs: [],
      username: '',
      password: '',
      title: '',
      author: '',
      url: '',
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

  createBlog = async (event) => {
    event.preventDefault()

    try {
      const blogObject = {
        title: this.state.title,
        author: this.state.author,
        url: this.state.url
      }

      const newBlog = await blogService.create(blogObject)

      this.setState({
        blogs: this.state.blogs.concat(newBlog),
        title: '',
        author: '',
        url: ''
      })
    } catch (exception) {
      console.log(exception)
    }
  }
  
  handleFieldChange = (event) => {
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
          handleFieldChange = {this.handleFieldChange}
        />
        <BlogView 
          user={this.state.user} 
          blogs={this.state.blogs}
          logout={this.logout} 
        />
        <BlogForm 
          user={this.state.user}
          title={this.state.title}
          author={this.state.author}
          url={this.state.url}
          createBlog={this.createBlog}
          handleFieldChange={this.handleFieldChange}
        />
      </div>
    )
  }
}

export default App
