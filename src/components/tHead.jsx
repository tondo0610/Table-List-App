import React from 'react';
import PropTypes from 'prop-types';
import { Button, Badge, Table } from 'react-bootstrap';
tHead.propTypes = {
    theaddata: PropTypes.array
};
tHead.defaultProps = {
    theaddata: []
}
function tHead(props) {
    const { theaddata } = props;

    const capitalizeFirst = str => {

        return str.charAt(0).toUpperCase() + str.slice(1);

    };
    const getWord = arr => {
        const temp = [];
        for (const word of arr) {
            temp.push(capitalizeFirst(word))
        }
        return temp;
    }


    return (
        <thead>
            <tr>
                {getWord(theaddata).map((heading) => {
                    return <th key={heading}>{heading}</th>
                })}
            </tr>
        </thead>

    );
}

export default tHead;