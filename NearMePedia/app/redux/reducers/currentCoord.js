export const currentCoordReducer = (state=[], action) => {
    switch(action.type){
        case 'ASSIGN_CURRENT_LOCATION':
            return action.payload
        default:
            return state
    }
}