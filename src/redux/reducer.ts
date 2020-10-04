import { data } from '../data'
import { addIdentificationNum, removeData } from '../common/util'

interface ActionTs {
    type: string,
    id: number,
}

const defaultStore = {
    data: addIdentificationNum(data)
}

function Reducer(state = defaultStore, action: ActionTs) {
    switch (action.type) {
        case 'remove': {
            return {
                ...state,
                data: removeData(data, action.id)
            }
        }
        default:
            return state
    }
}

export default Reducer;