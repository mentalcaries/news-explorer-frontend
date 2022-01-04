import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import './SearchResults.css'

function SearchResults(){
    return(
        <section className="results">
            <div className="results__wrapper">
                <h2 className="results__title">Search results</h2>
                <div className="results__cards">
                    {/* News Articles */}
                    <NewsCard/>
                    <NewsCard/>
                    <NewsCard/>
                </div>
                <div className="results__button">
                    <button className="results__show-more">Show More</button>
                    </div>
            </div>
        </section>
    )
}

export default SearchResults