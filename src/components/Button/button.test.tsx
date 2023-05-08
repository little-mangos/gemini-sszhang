import React from 'react'
import {render} from '@testing-library/react'
import Button from './button'

test('our fist',()=>{
    const wrapper=render(<Button>NICE</Button>)
    const element=wrapper.queryByText('NICE')
    expect(element).toBeTruthy()
})
