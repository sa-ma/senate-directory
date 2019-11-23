import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch } from 'react-instantsearch-dom';
import Content from './Content';
import Footer from './Footer';

const searchClient = algoliasearch(
  'K5TY49HSR6',
  '10bb721b99c2941d7c816ab2fd1f89a4'
);

const Search = () => (
  <InstantSearch searchClient={searchClient} indexName="senate-directory-index">
    <Content />
    <Footer />
  </InstantSearch>
);

export default Search;
