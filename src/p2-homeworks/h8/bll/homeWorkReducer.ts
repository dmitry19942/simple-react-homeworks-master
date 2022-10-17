import {UserType} from "../HW8";

type ActionsType =
    | ReturnType<typeof sortAC>
    | ReturnType<typeof checkAC>

export const homeWorkReducer = (state: UserType[], action: ActionsType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            if (action.payload === 'up') {
                return [...state].sort((a, b) => a.name < b.name ? -1 : 1)
            } else if (action.payload === 'down') {
                return [...state].sort((a, b) => a.name < b.name ? 1 : -1)
            } else {
                return state
            }
        }
        case 'check': {
            return state.filter((s) => s.age >= action.payload)
        }
        default:
            return state
    }
}

const sortAC = (payload: 'up' | 'down') => ({type: 'sort', payload} as const)
const checkAC = (payload: number) => ({type: 'check', payload} as const)