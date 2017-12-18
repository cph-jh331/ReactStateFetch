import React, { Component } from "react";
import Labels from './Labels';
import Countries from './Countries';

class CountryTable extends Component {


  render() {
    return (
      <table className="table">
        <Labels labels={this.props.labels} />
        <Countries countries={this.props.countries} />
      </table>
    );
  }
}
export default CountryTable;