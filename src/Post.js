import React from "react";
import PropTypes from "prop-types";

export default function Post({ id, title, deletePost }) {
  return (
    <div className="post">
        <button className="delete" onClick={()=> deletePost(id)}>x</button>
      <div className="post__title">{title}</div>
      <img
        className="post__image"
        src={`https://source.unsplash.com/random?sig=${id}`}
        alt=""
      />

    </div>
  );
}

Post.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  deletePost: PropTypes.func.isRequired
};
