import { ExpansionPanel } from 'components/ExpansionPanel'
import { FC } from 'react'
import { CardRequestHeader } from './subcomponent/CardRequestHeader'
import { IProps } from './core/cardRequest.types'
import { Card } from 'components/Card'

export const CardRequest: FC<IProps> = (props) => {
  return (
    <Card>
      <ExpansionPanel>
        <ExpansionPanel.Header>
          <CardRequestHeader {...props} />
        </ExpansionPanel.Header>
        <ExpansionPanel.Content>
          <p>test</p>
        </ExpansionPanel.Content>
      </ExpansionPanel>
    </Card>
  )
}
