import React from 'react';
import Pagination from "react-js-pagination";

const Paginate = ({ activePage, totalData, perPage, handlePageChange }) => (
    <Pagination
        hideFirstLastPages
        prevPageText={<div>{'<<Prev'}</div>}
        nextPageText={<div>Next>></div>}
        pageRangeDisplayed={5}
        activePage={activePage}
        itemsCountPerPage={perPage}
        totalItemsCount={totalData}
        onChange={handlePageChange}
    />
)

export default Paginate;