import React from "react";
import './SearchResults.css'

function SearchResults(){
    return(
        <section className="results">
            <h2 className="results__title">Search results</h2>
            <div className="results__cards">
                {/* News Articles */}
            </div>
            <button className="results__show-more">Show More</button>
        </section>
    )
}

export default SearchResults