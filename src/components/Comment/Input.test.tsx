import React from 'react'
import {render} from '@testing-library/react'
import Comment from './comment'

test('our fist',()=>{
    const wrapper=render(<Comment>NICE</Comment>)
    const element=wrapper.queryByText('NICE')
    expect(element).toBeTruthy()
})
