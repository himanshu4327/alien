import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Flex } from '@pancakeswap/uikit'
import downArrow from '../../../../public/images/alien/arrow.svg'

function DownArrow() {
  return (
    <Flex>
      <img src={downArrow} alt="downarrow" />
    </Flex>
  )
}

export default DownArrow
