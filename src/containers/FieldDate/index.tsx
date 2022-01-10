//#region Imports

import FieldInput from 'containers/FieldInput';
import FieldDateProps from 'models/containers/FieldDate';
import moment from 'moment';
import React, { FC, Fragment, useCallback, useState } from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import useFormContext from 'storages/form';
import dateMask from 'utils/validators/masks/date';

//#endregion

const FieldDate: FC<FieldDateProps> = ({ name, label, inputProps, dateTimePickerProps }) => {
    const [date, setDate] = useState<Date>(new Date());
    const [visible, setVisible] = useState<boolean>(false);

    const { setValue } = useFormContext();

    const handleChange = useCallback((date: Date) => {
        setVisible(false);

        setDate(date);
        setValue(name, moment(date).format('DD/MM/YYYY'));
    }, []);

    return (
        <Fragment>
            <FieldInput
                name={name}
                label={label}
                mask={dateMask}
                onFocus={() => setVisible(true)}
                onPressOut={() => setVisible(true)}
                {...inputProps}
            />

            <DateTimePickerModal
                mode='date'
                date={date}
                locale='pt-br'
                isVisible={visible}
                onCancel={() => setVisible(false)}
                onConfirm={(date: Date) => handleChange(date)}
                {...dateTimePickerProps}
            />
        </Fragment>
    );
};

export default FieldDate;
