import React, { useState } from 'react'

const Item = ({item}) => {
  const [showReview, setShowReview] = useState(false);
  return (
    <section
      className={`item ${item.key}`}
      data-testid="item"
      style={{backgroundImage: `url('images/${item.key}.jpg')`}}
      key={item.key}
      onClick={() => setShowReview(prev => !prev)} 
    >
      <span className="ranking clarify">{item.rank}</span>
      <span className="title clarify">
        {item.title}
      </span>
      {item.review && (
        <span className="icon-info clarify">
          i
        </span>
      )}
      {showReview && item.review && (
        <>
        <div
          className="item-review"
          onClick={() => setShowReview(false)}
        />
        <div className="item-review-text" onClick={() => setShowReview(false)}>{item.review}</div>
        </>
      )}
    </section>
  )
}

// Item.propTypes = {
//   item: PropTypes.object
// }

export default Item
