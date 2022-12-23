import React from 'react';
import { Button, Dropdown, Table } from 'react-bootstrap';


function Sortselect(props) {
    const {selectlist} = props;
    return (
        <div>
               <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
       Sort By
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {selectlist.map(select=>{ return   <Dropdown.Item href={`#/action-${select}`}>{select}</Dropdown.Item> })}
      </Dropdown.Menu>
    </Dropdown>
        </div>
    );
}

export default Sortselect;