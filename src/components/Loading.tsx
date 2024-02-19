
export enum Sizes{
  ExtraSmall = 'xs',
  Small = 'sm',
  Medium = 'md',
  Large = 'lg'
}

export enum Types{
  Spinner = 'spinner',
  Dots = 'dots',
  Ball = 'ball',
  Bars = 'bars',
  Infinity = 'infinity'
}

export interface IProps{
  type: Types;
  size: Sizes;
}

export const Loading = ({
  type,
  size
}: IProps) => {
  return(
    <span class={`loading loading-${type} loading-${size}`}></span>
  )
}
