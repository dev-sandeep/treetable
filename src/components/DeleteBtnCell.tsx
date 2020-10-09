import React from 'react'
import {TdWrapper, CursorDiv} from './TableBody'
import { DELETE_ICON } from './../common/constants'

/**
 * responsible for deleting a row
 */
interface clickHandlerTs {
    clickHandler: () => void
}

const DeleteBtnCell = ({ clickHandler }: clickHandlerTs):JSX.Element => {
    return (
        <TdWrapper align="center" onClick={clickHandler}>
            <CursorDiv dangerouslySetInnerHTML={{ __html: DELETE_ICON }}></CursorDiv>
        </TdWrapper>);
}

export default DeleteBtnCell;