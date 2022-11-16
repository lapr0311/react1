import React from 'react'

function Pagination(props) {

    const { onLeftClick, onRightClick, page} = props;

    return (
        <div className="pagination">
            <button onClick={onLeftClick}>Previus</button>
            <div>{page}  de </div>
            <button onClick={onRightClick}>Next</button>10
        </div>
    )
}

export default Pagination