import { push } from 'connected-react-router'
import { brainnAPI } from '../../../services'


const reset = () => (dispatch, getState) => {
    const { location } = getState().router

    if (location.pathname && location.pathname !== '/') dispatch(push('/'))

    return dispatch({
        type: 'INIT',
        username: '',
        error: '',
        isLoading: false,
    })
}


const getUserRepos = (username) => {
    if (!username) return false

    return (dispatch, getState) => {
        dispatch({
            type: 'FETCH_REPOS',
            username,
        })

        const { location } = getState().router

        if (location.pathname && location.pathname !== '/') dispatch(push('/'))

        return brainnAPI.getUserRepos(username)
            .then((repos) => {
                dispatch(push(`/repos/${username}`))
                return dispatch({
                    type: 'FETCH_REPOS_SUCCESS',
                    username,
                    repos,
                })
            })
            .catch(error => dispatch({
                type: 'FETCH_REPOS_ERROR',
                error,
            }))
    }
}

const listRepos = (username, repos) => ({
    type: 'LIST_REPOS',
    repos,
    username,
})


export default {
    getUserRepos,
    reset,
    listRepos,
}
