//#region Imports

import Align, {
    AlignFlexDirection,
    AlignHorizontalDirection,
    AlignHorizontalDirectionEnum,
    AlignVerticalDirection,
    AlignVerticalDirectionEnum
} from 'models/styles/Align';

//#endregion

const ALIGN = (
    vertical: AlignVerticalDirection = 'center',
    horizontal: AlignHorizontalDirection = 'center',
    direction: AlignFlexDirection = 'row'
): Align => ({
    display: 'flex',
    flexDirection: direction,
    alignItems: AlignVerticalDirectionEnum[vertical],
    justifyContent: AlignHorizontalDirectionEnum[horizontal]
});

export default ALIGN;
