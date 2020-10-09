import {addIdentificationNum, removeData, manageKidsValue} from '../common/util';
import { jsonData } from '../data'
import { TEMP_REF } from './../common/constants'

describe('testing functions in utility',()=>{
    var tempData = {
        data: []
    }
    /**
     * testing the function to distribute temporary ids
     */
    it('testing addIdentificationNum function - ', ()=>{
        const outData = addIdentificationNum(jsonData);
        tempData.data = outData;
        expect(outData[0].data[TEMP_REF]).toEqual(1);
    })
    
    /**
     * testing the remove functionality 
     */
    it('testing the remove function - ', ()=>{
        const outData = removeData(tempData.data, 1);
        expect(outData[0].data[TEMP_REF]).not.toEqual(1);
    })
})