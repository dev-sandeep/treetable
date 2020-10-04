import React, { useState } from 'react';
import Row from './Row';
import Table from './TreeTable';
import ExpandCollapseCell from './ExpandCollapseCell';
import DeleteBtnCell from './DeleteBtnCell';
import { TEMP_REF } from './../common/constants'
import { useDispatch } from 'react-redux'
import { TbodyTs } from './../models/table'
import { DataObjTs } from './../models/data'
import styled from 'styled-components'

export const TdWrapper = styled.td`
    text-align:${({ align }) => align};
    border: 0.1px solid gray;
    width: auto;
    padding: 10px;
`;

const TrWrapper = styled.tr`
    border: 0.1px solid gray;
    &:hover{
        background-color:#e8f6db; 
    }
`;

const NoHoverTrWrapper = styled(TrWrapper)`
    &:hover{
        background-color:#fff; 
    }
`;

export const CursorDiv = styled.div`
    cursor: pointer;
`;

/**
 * responsible for loading the normal rows and also nested rows
 */
const TableBody = ({ data }: TbodyTs) => {
    const dispatch = useDispatch();
    const [isVisible, setIsVisible] = useState(false);
    const [selectedRowId, setSelectedRowId] = useState(0);

    //when user clicks on expand/collapse btn
    const onClick = (id: number) => {
        let newId = id;
        let prevId = selectedRowId;
        //if the ids are changing then simply set expansion to true
        if (newId !== prevId) {
            setIsVisible(true);
        } else {//else toggle
            setIsVisible(!isVisible);
        }
        console.log("ID; ", id);
        setSelectedRowId(id);
    }

    //responsible for handling the click to delete
    const onDeleteClick = (id: number) => {
        dispatch({ type: 'remove', id: id });
    }

    const baseId:string = "base-id-";
    /**
     * responsible for loading the children 
     * by calling Table component recursively
     */
    const childTable = (data: any, index: number) => {
        return Object.keys(data).length > 0 && Object.keys(data).map((key) => (
            // parsing the data object in key
            <NoHoverTrWrapper key={baseId + index} className={(isVisible && selectedRowId === index) ? '' : 'hide-child'}>
                <TdWrapper colSpan={12}>

                    {/* calling table recursively */}
                    <Table title={key} queryData={data[key].records} />
                </TdWrapper>
            </NoHoverTrWrapper>
        ))
    }

    return (
        <tbody>
            {data.map((val: DataObjTs, i: number) => (
                <React.Fragment key={val.data[TEMP_REF]}>
                    <TrWrapper>
                        {/* cell with expand/collapse icon */}
                        <ExpandCollapseCell
                            defaultExpansionState={isVisible && selectedRowId === val.data[TEMP_REF] ? true : false}
                            clickHandler={() => onClick(val.data[TEMP_REF])}
                            hasChild={Object.keys(val.kids).length > 0} />
                        {/* printing all the rows */}
                        <Row data={val.data} />
                        {/* cell with delete button */}
                        <DeleteBtnCell clickHandler={() => onDeleteClick(val.data[TEMP_REF])} />
                    </TrWrapper>

                    {/* parse through the kids and create the kids in the next row */}
                    {childTable(val.kids, val.data[TEMP_REF])}
                </React.Fragment>
            ))}
        </tbody>
    );
}

export default TableBody;