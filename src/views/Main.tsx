/**
 * The main and the single view which is responsible for loading the main table
 * @author Sandeep G
 * @since 20201001
 */

import React,{FC} from 'react';
import Table from './../components/TreeTable'
import { useSelector } from 'react-redux'

const Main:FC = () => {
    const reduxData:any = useSelector(state=>state)

    return (
        <section id="main-table">
            <Table title={"Main Table"} queryData={reduxData.data} />
        </section>
    )
}

export default Main;