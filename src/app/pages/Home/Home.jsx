import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { User as UserAction } from './actions'

import UserBox from './components/UserBox'
import Loader from './components/Loader'

class Home extends React.Component {
    static propTypes = {
        username: PropTypes.string,
        isLoading: PropTypes.bool,
        error: PropTypes.string,
        dispatch: PropTypes.func.isRequired,
    }

    static defaultProps = {
        isLoading: false,
        error: '',
        username: '',
    }

    componentDidMount() {
        const { username, dispatch } = this.props

        if (!username) dispatch(UserAction.reset())
        else dispatch(UserAction.getUserRepos(username))
    }

    render() {
        const {
            username,
            error,
            isLoading,
            dispatch,
        } = this.props


        if (isLoading) {
            return (<Loader />)
        }

        return (
            <UserBox
                onChange={(u) => { this.username = u || username }}
                onSubmit={() => dispatch(UserAction.getUserRepos(this.username))}
                errorMsg={error ? error.message : ''}
            />
        )
    }
}

const mapStateToProps = (state) => {
    const {
        username,
        error,
        isLoading,
    } = (state)

    return {
        username,
        error,
        isLoading,
    }
}

export default connect(mapStateToProps)(Home)
