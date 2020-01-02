import React from 'react';
import {Component} from 'react';
import Table from '@material-ui/core/Table';
export default class Tab extends React.Component {
  render() {
    return (
      <Table
        title="Non Filtering Field Preview"
        columns={[
          { title: 'Name', field: 'name', filtering: false },
          { title: 'Surname', field: 'surname' },
          { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
          {
            title: 'Birth Place',
            field: 'birthCity',
            lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
          },
        ]}
        data={[
          { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
          { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
        ]}        
        options={{
          filtering: true
        }}
      />
    )
  }
}

