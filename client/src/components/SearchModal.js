import React from "react";
import SearchItem from "components/SearchItem";
import Empty from "./Empty";
import LoadingSpinner from "./LoadingSpinner";

function SearchModal({ result, isLoading }) {
    const renderedResult = result?.map(item => <SearchItem item={item} key={item._id} type="lessons" />)

    return (
        <section className="bg-black z-30 min-h-40 w-lggg 
        absolute top-14 left-0 rounded-md shadow-2xl">

            {isLoading ? (
                <LoadingSpinner />
            ) : (
                <>
                    {renderedResult.length > 0 ? (
                        <ul className="">
                            {renderedResult}
                        </ul>
                    ) : (
                        <Empty isSmall />
                    )}
                </>
            )}
        </section>
    )
}

export default SearchModal
