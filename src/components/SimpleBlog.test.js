import React from 'react'
import { shallow } from 'enzyme'
import SimpleBlog from './SimpleBlog'

describe.only('<SimpleBlog />', () => {
    const blog = {
        title: 'Component testing with jest and enzyme',
        author: 'Matti Luukkainen',
        likes: 7
    }

    it('renders content', () => {
        const simpleBlogComponent = shallow(<SimpleBlog blog={blog} />)
        const headerDiv = simpleBlogComponent.find('.header')
        const likesDiv = simpleBlogComponent.find('.likes')

        expect(headerDiv.text()).toContain(blog.title)
        expect(headerDiv.text()).toContain(blog.author)
        expect(likesDiv.text()).toContain(blog.likes)
    })

    it('event handler is called twice if the like button is pressed twice', () => {
        const mockHandler = jest.fn()

        const simpleBlogComponent = shallow(
            <SimpleBlog 
                blog={blog}
                onClick={mockHandler}
            />
        )

        const button = simpleBlogComponent.find('button')
        button.simulate('click')
        button.simulate('click')

        expect(mockHandler.mock.calls.length).toBe(2)
    })
})