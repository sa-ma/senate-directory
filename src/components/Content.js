import React from 'react';
import { Hits, Pagination } from 'react-instantsearch-dom';
import Header from './Header';
import Hit from './Hit';

const Content = () => (
  <main className="content">
    <Header />
    <Hits hitComponent={Hit} />
    <Pagination />
  </main>
);

export default Content;
