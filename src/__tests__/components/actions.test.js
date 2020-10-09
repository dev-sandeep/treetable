import React from 'react'
import {mount} from 'enzyme'
import ExpandCollapseCell from './../../components/ExpandCollapseCell'

describe('testing elements with enzyme', ()=>{
    it('testing if expansion icons are proper', ()=>{
        const cellUp = mount(<ExpandCollapseCell hasChild={true} clickHandler={()=>false} defaultExpansionState={false} />);
        expect(cellUp.text()).toBe("∇");      

        const cellDown = mount(<ExpandCollapseCell hasChild={true} clickHandler={()=>false} defaultExpansionState={true} />);
        expect(cellDown.text()).toBe("∆");   
    })
})