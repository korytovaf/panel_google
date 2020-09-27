import React from 'react';
import './Search.css'
import MenuButton from "../../img/menu";
import SearchButton from "../../img/search";
import ClearButton from "../../img/clear";

const Search = () => {


    return (
        <div className='search-container'>
            <button className='search-container__button'>
                <MenuButton height={18} width={18} fill={'#616161'} />
            </button>
            <form className='search_form' action="">
                <input type="text" placeholder="51°52'47.7 N 48°18 29.3 E"/>
                <button className='search-container__button'>
                    <SearchButton height={18} width={18} fill={'#616161'} />
                </button>
                <button className='search-container__button'>
                    <ClearButton height={14} width={14} fill={'#616161'}  />
                </button>
            </form>
        </div>
    );
}

export default Search