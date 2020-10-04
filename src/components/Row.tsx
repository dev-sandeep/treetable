/**
 * responsible for rendering a single row of any given table
 * @author Sandeep G
 * @since 20201001
 */
import React from 'react';
import {TEMP_REF}  from './../common/constants'
import {RowComponentTs} from './../models/table'
import styled from 'styled-components'
import {ThWrapper} from './../components/TreeTable'

const TdWrapper = styled.td`
    padding: 10px;
    border: 0.1px solid gray;
    width: auto;
`;


const Row = ({ data, type }:RowComponentTs) => {
       
    return (
        <>
            {Object.keys(data).map((key, index) => (
                //in case TEMP_REF hide the cell
                <React.Fragment key={key+index}>
                    {type === "header" ? 
                        <ThWrapper className={key === TEMP_REF?'hidden':''}>{key}</ThWrapper> : 
                            <TdWrapper className={key === TEMP_REF?'hidden':''}>{data[key]}</TdWrapper>}
                </React.Fragment>
            ))}
        </>
    );
}

export default Row;
