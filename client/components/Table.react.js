import React from 'react';

const Table = (props) => {

  const getHeaders = (headerList = props.headerList) => {
    let headers = headerList.map((header, index) => {
      return (
        <th key={ 'header-' + index }>{header}</th>
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
          <td>{ item.securityName }</td>
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
    <table className="table table-striped">
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
