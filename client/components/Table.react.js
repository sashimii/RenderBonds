import React from 'react';
import './Table.scss';

const Table = (props) => {

  const getHeaders = (
    headerList = [
      'Issuer',
      'Issue Description',
      'Currency',
      'Years Remaining',
      'Benchmark',
      'Benchmark',
      'GoC Curve',
      '3M CDOR',
      '3M USDL',
      'Updated'
    ]
  ) => {
    let headers = headerList.map((header, index) => {
      return (
        <th key={ 'header-' + index }><a href="#">{header}</a></th>
      )
    });
    return (
      <thead><tr>{ headers }</tr></thead>
    );
  };

  const getRows = (data = props.data) => {

    let rows = data.map((item, index) => {
      return (
        <tr key={ 'row-' + index } >
          <td><a href="#">{ item.securityName }</a></td>
          <td>{ item.description }</td>
          <td>{ item.currency }</td>
          <td>{ item.yearsRemaining }</td>
          <td>{ item.benchmarkSecurityDescription }</td>
          <td>{ item.bidSpreadVsBenchmark }</td>
          <td>{ item.bidSpreadVsGocCurve }</td>
          <td>{ item.bidSpreadVs3mCdor }</td>
          <td>{ item.bidSpreadVs3mUsdl }</td>
          <td>{ item.readableTimestamp }</td>
        </tr>
      )
    });
    return (
      <tbody>{ rows }</tbody>
    )

  };

  return (
    <table className="table table-striped secondary-levels">
      {
        getHeaders()
      }
      {
        getRows()
      }
    </table>
  );

};

export default Table;
