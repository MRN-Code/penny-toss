/**
 * Wrapper for 3rd-party date picker component.
 * @{@link  https://github.com/quri/react-bootstrap-datetimepicker}
 */

import React, { Component, PropTypes } from 'react';
import DateTimeField from 'react-bootstrap-datetimepicker';
import 'react-bootstrap-datetimepicker/css/bootstrap-datetimepicker.css';
import moment from 'moment';

export default class InputDatePicker extends Component {
    getValue() {
        const { ref } = this.props;

        return this.refs[ref].getValue();
    }
    render() {
        const { handleChange, id, label, ref, startDate } = this.props;

        return (
            <div className="form-group">
                <label className="control-label" htmlFor={id}>{label}</label>
                <DateTimeField
                    dateTime={startDate}
                    inputProps={{ id }}
                    onChange={handleChange}
                    ref={ref} />
            </div>
        );
    }
}

InputDatePicker.defaultProps = {
    ref: 'input-date-picker',
    startDate: moment().format('x'),
};

InputDatePicker.propTypes = {
    handleChange: PropTypes.func,
    id: PropTypes.string,
    label: PropTypes.string.isRequired,
    ref: PropTypes.string,
    startDate: PropTypes.string,
};
