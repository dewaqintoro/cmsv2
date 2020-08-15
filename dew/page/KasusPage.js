import React from 'react'
import { Table } from 'reactstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';

const { SearchBar } = Search;
const columns = [{
  dataField: 'id',
  text: 'ID',
  sort: true
}, {
  dataField: 'prov',
  text: 'Provinsi',
  sort: true
}, {
  dataField: 'positif',
  text: 'Positif'
}, {
  dataField: 'sembuh',
  text: 'sembuh'
}, {
  dataField: 'meningga',
  text: 'meningga'
}
];
 
const defaultSorted = [{
  dataField: 'id',
  order: 'asc'
}];
const KasusPage = (props) => {
  return (
    <div>
      <h1>Kaus</h1>
      {/* <div className="table1">
        <BootstrapTable keyField='id' data={ props.corona } columns={ columns } defaultSorted={ defaultSorted } />
      </div> */}

      {/* <ToolkitProvider
      keyField="id"
      data={ props.corona }
      columns={ columns }
      defaultSorted={ defaultSorted }
      search
      >
      {
        props => (
          <div> 
            <div className="table1">
              <div className="search">
                <SearchBar { ...props.searchProps } />
              </div>
              <BootstrapTable pagination={ paginationFactory() } striped
                { ...props.baseProps }
              />
            </div>
          </div>
        )
      }
      </ToolkitProvider> */}
    </div>
  )
}

export default KasusPage
