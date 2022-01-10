//#region Imports

import { DateTimePickerProps } from 'react-native-modal-datetime-picker';
import FieldInputProps from './FieldInput';

//#endregion

type InputDateTimePickerProps = Omit<FieldInputProps, 'name' | 'label' | 'onFocus' | 'onPressOut'>;
type DateTimePickerModalProps = Omit<DateTimePickerProps, 'date' | 'isVisible' | 'onConfirm' | 'onCancel'>;

interface FieldDateProps {
    name: string;
    label: string;
    inputProps?: InputDateTimePickerProps;
    dateTimePickerProps?: DateTimePickerModalProps;
}

export default FieldDateProps;
