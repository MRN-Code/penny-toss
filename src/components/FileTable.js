import React, { Component, PropTypes } from 'react';

/**
 * @{@link  https://github.com/AllenFang/react-bootstrap-table}
 */
import {
    BootstrapTable as Table,
    TableHeaderColumn
} from 'react-bootstrap-table';
import 'react-bootstrap-table/css/react-bootstrap-table.css';
import filesize from 'filesize';

const selectRowProp = {
    mode: 'checkbox',
    clickToSelect: true,
    bgColor: "rgba(240, 173, 78, .25)",
};

function sortBySize(a, b, order) {
    console.log(arguments);
    return order === 'desc' ? a.size - b.size : b.size - a.size;
}

export default class FileTable extends Component {
    render() {
        const { files } = this.props;
        const data = files.map(file => {
            file.humanReadableSize = filesize(file.size);
            return file;
        });

        return (
            <Table
                bordered={false}
                data={data}
                striped={true}
                selectRow={selectRowProp}
                search={true}>
                <TableHeaderColumn
                    dataField="name"
                    isKey={true}
                    dataSort={true}>Name</TableHeaderColumn>
                <TableHeaderColumn
                    dataField="humanReadableSize"
                    dataSort={true}
                    sortFunc={sortBySize}>Size</TableHeaderColumn>
            </Table>
        );
    }
}

FileTable.propTypes = {
    files: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            size: PropTypes.number.isRequired,
        })
    ).isRequired,
};
