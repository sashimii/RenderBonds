import React, {Component} from 'react';

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import Table from './Table.react';
import axios from 'axios';

const DATA_URL = 'https://gist.githubusercontent.com/apotapov/8c438bce39116e884892363b8cfcaad0/raw/4887020610f74b96810d3835f30679871e72261f/secondary-levels.json'

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataLoaded: false
    };

  }

  componentDidMount() {
    axios.get(DATA_URL).then((response) => {
      this.data = response.data.secondaryLevels
      this.setState({dataLoaded: true});
    });
  }

  render() {
    if(this.state.dataLoaded) {
      return (
        <div className="my-styles" style={{textAlign: 'center'}}>
            <Table data={ this.data }/>
        </div>
      );
    } else {
      return (
        <div className="my-styles" style={{textAlign: 'center'}}>
          <h3>Gathering Data</h3>
        </div>
      );
    }
  }
}
