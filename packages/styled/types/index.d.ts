// Definitions by: Junyoung Clare Jang <https://github.com/Ailrun>
// TypeScript Version: 3.2

import { Theme as EmotionTheme } from '@emotion/react'
import { CreateStyled as BaseCreateStyled, CreateStyledComponent } from './base'

export {
  ArrayInterpolation,
  ComponentSelector,
  CSSObject,
  FunctionInterpolation,
  Interpolation,
  StyledComponent,
  StyledOptions,
  CreateStyledComponent
} from './base'

export type StyledTags<Theme = EmotionTheme> = {
  [Tag in keyof JSX.IntrinsicElements]: CreateStyledComponent<
    {
      theme?: Theme
      as?: React.ElementType
    },
    JSX.IntrinsicElements[Tag]
  >
}

export interface CreateStyled<Theme = EmotionTheme>
  extends BaseCreateStyled<Theme>,
    StyledTags<Theme> {}

declare const styled: CreateStyled
export default styled
