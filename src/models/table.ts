import { DataObjTs } from './data'

export interface TableTs {
    queryData: DataObjTs[],
    title: string
}

export interface RowComponentTs {
    data: any,
    type?: string
}

export interface TbodyTs{
    data: DataObjTs[]
}