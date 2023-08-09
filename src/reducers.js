import { CHANGE_SEARCH_FIELD } from "./constants"

const intialState = {
    searchField: ''
}

export const searchRobots = (state=intialState,action={}) => {
    // eslint-disable-next-line default-case
    switch(action.type) {
        case CHANGE_SEARCH_FIELD:
        return Object.assign({}, state,{searchField:action.payload})
        default:
            return state;
    }
}