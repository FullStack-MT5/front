import { IStandardProps } from '../../../shared/helpers/types'
import {
  Colors,
  FontFamilies,
  FontSizes,
  FontWeights,
} from '../../../shared/style/constants'

export type IProps = IPoppinsProps | IInterProps

interface IGenericProps extends IStandardProps {
  color?: Colors
}

interface IPoppinsProps extends IGenericProps {
  font: FontFamilies.POPPINS
  size?: FontSizes.LARGE | FontSizes.BASE
  weight?: FontWeights.BOLD
}

interface IInterProps extends IGenericProps {
  font?: FontFamilies.INTER
  size?: FontSizes.SMALL | FontSizes.BASE
  weight?: FontWeights.MEDIUM | FontWeights.SEMI
}
