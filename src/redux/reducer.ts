import { jsonData } from '../data'
import { addIdentificationNum, removeData } from '../common/util'
import { DataObjTs } from '../models/data'

interface ActionTs {
    type: string,
    id: number,
}

interface defaultStoreTs {
    data: DataObjTs[]
} 

const defaultStore:defaultStoreTs = {
    data: addIdentificationNum(jsonData)
}

function Reducer(state = defaultStore, action: ActionTs) {
    let data:DataObjTs[] = state.data;
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