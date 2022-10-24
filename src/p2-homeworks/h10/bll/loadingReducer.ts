const initState = {
    status: false as boolean
}

export type initialStateType = typeof initState

export type LoadingActionTypes = ReturnType<typeof loadingAC>

export const loadingReducer = (state = initState, action: LoadingActionTypes): initialStateType => { // fix any
    switch (action.type) {
        case 'SET_LOADING': {
            return {...state, status: action.status}
        }
        default: return state
    }
}

export const loadingAC = (status: boolean) => ({type: 'SET_LOADING', status} as const) // fix any