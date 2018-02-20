import React from 'react'

class Togglable extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false
        }
    }

    toggleVisibility = () => {
        this.setState({ visible: !this.state.visible })
    }

    render() {
        if (this.props.hideToggle) {
            return null
        }

        const hideWhenVisible = { display: this.state.visible ? 'none' : '' }
        const showWhenVisible = { display: this.state.visible ? '' : 'none' }

        return (
            <div>
                <div style={hideWhenVisible}>
                    <button onClick={this.toggleVisibility}>{this.props.buttonLabel}</button>
                </div>
                <div style={showWhenVisible}>
                    {this.props.children}
                    <button onClick={this.toggleVisibility}>Cancel</button>
                </div>
            </div>
        )
    }
}

Togglable.propTypes = {
    buttonLabel: PropTypes.string.isRequired
}

export default Togglable