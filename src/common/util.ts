/**
 * A central utility function for all the common usage
 */

import {TEMP_REF} from '../common/constants';
import {DataObjTs} from './../models/data'

/**
 * traversing the original JSON data and adding an identification number
 * @param {} data 
 */
export const addIdentificationNum = (data:DataObjTs[]) => {
    let id = 1;
    const recursion = (data:DataObjTs[]) => {
        data.forEach(el => {
            el.data[TEMP_REF] = id++;
            if (Object.keys(el.kids).length > 0) {
                Object.keys(el.kids).forEach((key) => {
                    recursion(el.kids[key].records);
                })
            }
        })
    }
    recursion(data);

    console.log(data);
    return data;
}

/**
 * if there is no item in kid's => record then make kids={}
 */
const manageKidsValue = (data:DataObjTs[])=>{
    const recursion = (data:DataObjTs[])=>{
        data.forEach(el => {
            if (Object.keys(el.kids).length > 0) {
                Object.keys(el.kids).forEach((key) => {
                    //going one level deep and checking if there is any records available
                    if(el.kids[key].records.length === 0){
                        el.kids = {};
                    }else{
                        recursion(el.kids[key].records);
                    }
                })
            }
        })
    }
    recursion(data);
    return data;
}

/**
 * responsible for removing a particular item with its children
 */
export const removeData = (data:DataObjTs[], remId:number)=>{
    const remove = (data:DataObjTs[], remId:number)=>{
        let deletedIndex = -1;
        //traversing and checking if the temp_ref matches the id requested to remove
        data.forEach((el, i)=>{
            if(remId === el.data[TEMP_REF]){
                //simply making its kids empty
                el.kids = {};
                //saving the index to delete it
                deletedIndex = i;
            }

            if(Object.keys(el.kids).length > 0){
                Object.keys(el.kids).forEach((key)=>{ 
                    //recursion 
                    remove(el.kids[key].records, remId);
                }); 
            }
        });

        if(deletedIndex !== -1){
            data.splice(deletedIndex,1);
        } 
    }

    remove(data, remId);
    //to maintain data consistency. assigning the kids with {} 
    //if no records left in kids after deletion
    manageKidsValue(data);
    return data;
}