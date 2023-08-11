import React from "react";

interface IProps {
  gotoPrevPage: () => void;
  gotoNextPage: () => void;
}

const Pagination: React.FC<IProps> = ({ gotoPrevPage, gotoNextPage }) => {
  return (
    <div>
      {gotoPrevPage && <button onClick={gotoPrevPage}>Previous</button>}
      {gotoNextPage && <button onClick={gotoNextPage}>Next</button>}
    </div>
  );
};

export default Pagination;
