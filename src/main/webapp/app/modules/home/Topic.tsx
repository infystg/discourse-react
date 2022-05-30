import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import parse from 'html-react-parser';

const Topic = ({ location }) => {
  const topic = location.state.data.element;
  const category = location.state.data.category;
  return (
    <div className="my-3">
      <h3>
        {topic.name}{' '}
        <small>
          <FontAwesomeIcon icon={faPencil}></FontAwesomeIcon>
        </small>
      </h3>
      <p className="my-3">
        <span style={{ backgroundColor: category.color }} className="cat-badge"></span>
        {category.name}
        <span className="tags mx-2 rounded">Created At: {new Date(topic.created_at).toDateString()}</span>
        <span className="tags mx-2 rounded">Last Reply: {new Date(topic.last_posted_at).toDateString()}</span>
        <span className="tags mx-2 rounded">Likes {topic.like_count}</span>
        <span className="tags mx-2 rounded">Replies {topic.reply_count}</span>
      </p>
      <div className="card">
        <div className="card-body">
          <h5 className="mb-2">
            <span className="circle">{topic.username[0].toUpperCase()}</span> {topic.username}
          </h5>
          {topic.cooked === null ? 'No Details' : parse(topic.cooked)}
        </div>
      </div>
    </div>
  );
};

export default Topic;
