import React from 'react';
import {Container} from './app/components/Container';
import { Menu, MenuItem } from './app/components/Menu';
import CounterPage from './app/pages/Counter';
import TablePage from './app/pages/Table';

function App() {

  const [page, setPage] = React.useState<'counter' | 'table'>('counter')

  return (
    <Container>
      <Menu>
        <MenuItem className={page === 'counter' ? 'active' : ''} onClick={() => setPage('counter')}>Counter</MenuItem>
        <MenuItem className={page === 'table' ? 'active' : ''} onClick={() => setPage('table')}>Table</MenuItem>
      </Menu>
      {page === 'counter' ? <CounterPage /> : <TablePage />}
    </Container>
  );
}

export default App;
