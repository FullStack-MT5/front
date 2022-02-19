import { FC } from 'react'

import { StyledSidebar } from './typescript/sidebar.styles'
import { IProps } from './typescript/sidebar.types'

export const Sidebar: FC<IProps> = (props) => {
  const { className } = props

  return (
    <StyledSidebar className={`${className || ''} p-4`}>
      <p>sidebar</p>
    </StyledSidebar>
  )
}
