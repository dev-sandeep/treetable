/**
 * A central utility function for all the common usage
 */

import { TEMP_REF } from '../common/constants';
import { DataObjTs, UnknownSingleChildObjTs } from './../models/data'

/**
 * responsible for return the first proprty of an object
 * @param obj any object
 */
const firstObjectOf = (obj: UnknownSingleChildObjTs): string =>
    Object.keys(obj).length > 0 ? Object.keys(obj)[0] : '';

/**
 * responsible for distributing temporary ids for tracking the data in a consistent manner
 * @param (Array) main data set
 */
export const addIdentificationNum = (data: DataObjTs[]): DataObjTs[] => {
    let ctr = 1;
    const loop = (data: DataObjTs[]): DataObjTs[] => {
        return data.reduce((aggregator: any, current) => {
            return [
                ...aggregator,
                {
                    ...current,
                    data: {
                        ...current.data,
                        [TEMP_REF]: ctr++
                    },
                    kids: Object.keys(current['kids']).length > 0 ?
                        ({
                            ...current.kids,
                            [firstObjectOf(current.kids)]: {
                                ...current.kids[firstObjectOf(current.kids)],
                                records: loop(current.kids[firstObjectOf(current.kids)].records)
                            }
                        }) : {}
                }
            ]
        }, []);
    }

    return loop(data);
}

/**
 * if there is no item in kid's => record then make kids={}
 * @param (Array) main data set
 */
const manageKidsValue = (data: DataObjTs[]) => {
    const recursion = (data: DataObjTs[]) => {
        data.forEach(el => {
            if (Object.keys(el.kids).length > 0) {
                Object.keys(el.kids).forEach((key) => {
                    //going one level deep and checking if there is any records available
                    if (el.kids[key].records.length === 0) {
                        el.kids = {};
                    } else {
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
 * @param data (Array) main data set
 * @param remId (number) id of the row which needs to be deleted
 */
export const removeData = (data: DataObjTs[], remId: number) => {
    const loop = (data: DataObjTs[]) => {
        return data.filter((current) => {
            current.kids = Object.keys(current['kids']).length > 0 ?
                ({
                    ...current.kids,
                    [firstObjectOf(current.kids)]: {
                        ...current.kids[firstObjectOf(current.kids)],
                        records: loop(current.kids[firstObjectOf(current.kids)].records)
                    }
                }) : {}

            if (current.data[TEMP_REF] !== remId) {
                return true;
            } else {
                return false;
            }

        })
    }
    return manageKidsValue(loop(data));
}

