import React, { useState } from 'react';
import PropTypes from 'prop-types';

Tbody.propTypes = {
    tbodydata: PropTypes.array
};
Tbody.defaultProps = {
    tbodydata: []
}
function Tbody(props) {

    const dataFormat = (user) => {
        const date = user[5].substring(0, 10);
        const day = date.substring(8);
        const month = date.substring(5, 7);
        const year = date.substring(0, 4);
        user[5] = `${day}/${month}/${year}`;

        const phone = '+84'+user[7].slice(0,3)+user[7].slice(4,7)+user[7].slice(8,13);
        user[7]= phone;  
    
       
        return user;
    }

    function getData() {
        const temp = [];
        tbodydata.map(userobj => {
            temp.push(dataFormat(Object.values(userobj)));
        })

        return temp;
    }


    const { tbodydata } = props;

    return (
        <tbody>
            {getData().map(user => {
                return <tr>{user.map(col => { return <td key={col.id}>{col}</td> })}</tr>
            })}
        </tbody>
    );
}

export default Tbody;