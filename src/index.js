import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/searchBar';

const API_KEY = 'AIzaSyAJSS28HZ7w7dkQTs5flYCu8PzqNqb_Pu4';

const App = () => {
    return (
        <div>
            <SearchBar/>
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('.container'));