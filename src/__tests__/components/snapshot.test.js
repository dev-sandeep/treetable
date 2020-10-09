import React from 'react'
import renderer from 'react-test-renderer'
import TreeTable from '../../components/TreeTable'
import Row from '../../components/Row'
import {jsonData} from './../../data'

it('snapshot test for table-body when no data', () => {
const tree = renderer
    .create(<TreeTable queryData={[]} title="Main table" />)
    .toJSON();
    expect(tree).toMatchSnapshot();
});

it('snapshot test for Row', () => {
const tree = renderer
    .create(<Row data={jsonData[0].data} />)
    .toJSON();
    expect(tree).toMatchSnapshot();
});