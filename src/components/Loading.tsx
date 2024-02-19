
import { SIZES } from "../enums/sizes.enum"
import { LOADING } from "../enums/loading.enum"

export interface IProps{
  type: LOADING;
  size: SIZES;
}

export const Loading = ({
  type,
  size
}: IProps ) => {
  return(
    <span class={`loading loading-${type} loading-${size}`}></span>
  )
}
