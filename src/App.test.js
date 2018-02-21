import React from 'react'
import { mount } from 'enzyme'
import App from './App'
import Togglable from './components/Togglable'
jest.mock('./services/blogs')
import blogService from './services/blogs'

describe('<App />', () => {
    let app
    
    beforeAll(() => {
        app = mount(<App />)
    })

    it('renders only the login form if user is not logged in', () => {
        app.update()

        const appText = app.text()

        expect(appText).toContain("Log in to application")
        expect(appText).toContain("Username:")
        expect(appText).toContain("Password:")
        expect(appText).not.toContain("Create new")
        expect(appText).not.toContain("Blogs")
        expect(appText).not.toContain("Logged in as")
    })
})