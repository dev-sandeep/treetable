import React from 'react'
import {DOWN_ARROW, UP_ARROW} from './../common/constants'
import {TdWrapper, CursorDiv} from './TableBody'
/**
 * cell with expand/collapse button
 */
interface expandCollapseCellTs {
    hasChild: boolean,
    clickHandler: () => void,
    defaultExpansionState: boolean
}

const ExpandCollapseCell = ({ hasChild, clickHandler, defaultExpansionState }: expandCollapseCellTs):JSX.Element => {
    if (!hasChild)
        return <TdWrapper></TdWrapper>;

    return (<TdWrapper align="center" onClick={clickHandler}>
        <CursorDiv>
        {defaultExpansionState ? 
            <div dangerouslySetInnerHTML={{ __html: DOWN_ARROW }}></div> : 
                <div dangerouslySetInnerHTML={{ __html: UP_ARROW }}></div>}
        </CursorDiv>
    </TdWrapper>);
};

export default ExpandCollapseCell;