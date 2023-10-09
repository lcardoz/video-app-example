import React from 'react';

// Input- liked: boolean
// Output- onClick

const Likes = ({liked}) => {

  let classes = "fa fa-heart";
  if (!liked) classes += "-o"

  return (
    <>
      <i className={classes} aria-hidden="true" />
    </>
  )
}

export default Likes;