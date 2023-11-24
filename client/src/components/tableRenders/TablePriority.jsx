import React from 'react'
import { PriorityIcon } from '../ui/PriorityIcon'
import { Flex } from 'antd'

export const TablePriority = ({priority}) => (
  <Flex
    align="center"
    gap={6}>
    <PriorityIcon status={priority} />
    <p>{priority}</p>
  </Flex>
)
