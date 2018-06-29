const initialState = { username: '' }

export const reducer = (state = initialState, action) => {
    switch (action.type) {
    case 'INIT':
        return {
            isLoading: false,
            error: '',
        }
    case 'FETCH_REPOS':
        return {
            isLoading: true,
            username: action.username,
        }
    case 'FETCH_REPOS_SUCCESS':
        return {
            isLoading: false,
            repos: action.repos,
            error: null,
        }
    case 'FETCH_REPOS_ERROR':
        return {
            isLoading: false,
            error: action.error,
        }

    case 'LIST_REPOS':
        return {
            username: action.username,
            repos: action.repos,
        }

    default:
        return state
    }
}
