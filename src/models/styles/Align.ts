export type AlignVerticalDirection = 'center' | 'top' | 'bottom';
export enum AlignVerticalDirectionEnum {
    center = 'center',
    top = 'flex-start',
    bottom = 'flex-end'
}

export type AlignHorizontalDirection = 'center' | 'left' | 'right' | 'between' | 'around' | 'evenly';
export enum AlignHorizontalDirectionEnum {
    center = 'center',
    right = 'flex-end',
    left = 'flex-start',
    around = 'space-around',
    evenly = 'space-evenly',
    between = 'space-between'
}

export type AlignFlexDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse';

interface Align {
    display: 'flex';
    flexDirection?: AlignFlexDirection;
    alignItems?: AlignVerticalDirectionEnum;
    justifyContent?: AlignHorizontalDirectionEnum;
}

export default Align;
