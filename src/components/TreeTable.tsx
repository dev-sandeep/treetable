import React from 'react';
import { DataObjTs } from './../models/data'
import { TableTs } from './../models/table'
import Row from './Row'
import styled from 'styled-components'
import TableBody from './TableBody'

const StyledTableWrapper = styled.table.attrs(() => ({ cellSpacing: "0" }))`
    width: 100%;
    padding: 10px;
`;

export const TrWrapper = styled.tr`
    border: 0.1px solid gray;
    width: auto;
    padding: 10px;
`;

export const ThWrapper = styled.th`
    border: 0.1px solid gray;
    width: auto;
    padding: 10px;
    background: gainsboro;
`;

const TableHeaderH3 = styled.h3`
    padding-left: 10px;
    margin-bottom: 0px;
`;

/**
 * responsible for loading the header row
 */
interface TableHeaderTs {
    data: DataObjTs[];
}

const TableHeader = ({ data }: TableHeaderTs) => {
    if (data.length === 0)
        return null;

    const headerData = data[0];
    return (<thead>
        <TrWrapper>
            {/* empty header for expand/collapse btn */}
            <ThWrapper></ThWrapper>
            <Row type="header" data={headerData.data} />
            {/* empty header for delete btn */}
            <ThWrapper></ThWrapper>
        </TrWrapper>
    </thead>)
}

const NoData = () => (
    <>
        <h2>No Data- :(</h2>
        <h5>You must have deleted everything, refresh the page!</h5>
    </>
);

const TreeTable = ({ queryData, title }: TableTs):JSX.Element => {
    return (
        <>
            {queryData.length === 0 ? (<NoData />) : (
                <>
                    <TableHeaderH3>{title || 'Main Table'}</TableHeaderH3>
                    <StyledTableWrapper>
                        <TableHeader data={queryData} />
                        <TableBody data={queryData} />
                    </StyledTableWrapper>
                </>
            )}
        </>
    );
}

export default TreeTable;