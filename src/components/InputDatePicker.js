/**
 * Wrapper for 3rd-party date picker component.
 * @{@link  https://github.com/quri/react-bootstrap-datetimepicker}
 */

import React, { Component, PropTypes } from 'react';
import DateTimeField from 'react-bootstrap-datetimepicker';
import 'react-bootstrap-datetimepicker/css/bootstrap-datetimepicker.css';
import moment from 'moment';

export default function InputDatePicker(props) {
    const { handleChange, id, label, startDate } = props;

    return (
        <div className="form-group">
            <label className="control-label" htmlFor={id}>{label}</label>
            <DateTimeField
                dateTime={startDate}
                inputProps={{ id }}
                onChange={handleChange} />
        </div>
    );
}

InputDatePicker.defaultProps = {
    startDate: moment().format('x'),
};

InputDatePicker.propTypes = {
    handleChange: PropTypes.func.isRequired,
    id: PropTypes.string,
    label: PropTypes.string.isRequired,
    startDate: PropTypes.string,
};
