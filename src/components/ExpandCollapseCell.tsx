import React from 'react'
import {TdWrapper, CursorDiv} from './TableBody'
/**
 * cell with expand/collapse button
 */
interface expandCollapseCellTs {
    hasChild: boolean,
    clickHandler: () => void,
    defaultExpansionState: boolean
}

const ExpandCollapseCell = ({ hasChild, clickHandler, defaultExpansionState }: expandCollapseCellTs) => {
    if (!hasChild)
        return <TdWrapper></TdWrapper>;

    return (<TdWrapper align="center" onClick={clickHandler}>
        <CursorDiv>
            {defaultExpansionState ? <>&#8710;</> : <>&#8711;</>}
        </CursorDiv>
    </TdWrapper>);
};

export default ExpandCollapseCell;