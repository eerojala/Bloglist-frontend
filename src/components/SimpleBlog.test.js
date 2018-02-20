import React from 'react'
import { shallow } from 'enzyme'
import SimpleBlog from './SimpleBlog'

describe.only('<SimpleBlog />', () => {
    it('renders content', () => {
        const blog = {
            title: 'Component testing with jest and enzyme',
            author: 'Matti Luukkainen',
            likes: 7
        }

        const simpleBlogComponent = shallow(<SimpleBlog blog={blog} />)
        const headerDiv = simpleBlogComponent.find('.header')
        const likesDiv = simpleBlogComponent.find('.likes')

        expect(headerDiv.text()).toContain(blog.title)
        expect(headerDiv.text()).toContain(blog.author)
        expect(likesDiv.text()).toContain(blog.likes)
    })
})