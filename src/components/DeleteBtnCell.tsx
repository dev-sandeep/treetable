import React from 'react'
import {TdWrapper, CursorDiv} from './TableBody'

/**
 * responsible for deleting a row
 */
interface clickHandlerTs {
    clickHandler: () => void
}

const DeleteBtnCell = ({ clickHandler }: clickHandlerTs) => {
    return (
        <TdWrapper align="center" onClick={clickHandler}>
            <CursorDiv>&otimes;</CursorDiv>
        </TdWrapper>);
}

export default DeleteBtnCell;