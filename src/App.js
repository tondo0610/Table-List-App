import logo from './logo.svg';
import './App.css';
import { Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import users from './users.json'
import { useState } from 'react';
import Thead from './components/tHead';
import Tbody from './components/tBody';
import Sortselect from './components/Dropdown';

function App() {

  function getHeading() {
    return Object.keys(users[0]);
  }

  return (
    <div className="App">
    <Sortselect selectlist={getHeading()} />
      <Table striped bordered hover size="sm" variant="dark">
        <Thead theaddata={getHeading()} />
        <Tbody tbodydata={users} />
      </Table>
    </div>
  );
}

export default App;
