import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const AllTopicsList = ({ topics, categories }) => {
  return (
    <Fragment>
      {topics.length === 0 ? (
        <h3>No Topics Found...</h3>
      ) : (
        <table className="w-100">
          <thead>
            <tr>
              <th style={{ width: '70%', textAlign: 'left' }}>Topic</th>
              <th></th>
              <th>Post</th>
              <th>Created At</th>
            </tr>
            <tr style={{ margin: '5px', border: '5px solid #8626c3' }}></tr>
          </thead>
          <tbody>
            {topics.map((element, ind) => {
              const category = categories.find(data => data.id === element.category_id);
              return (
                <tr key={ind} className="rounded bg-light list-hover">
                  <td style={{ textAlign: 'left' }}>
                    {/* Link Not redirecting everything else working */}
                    <Link style={{ color: '#333' }} to={{ pathname: '/topic', state: { data: { element, category } } }}>
                      {element.name}
                      <p className="m-2">
                        <span style={{ backgroundColor: category === undefined ? '' : category.color }} className="cat-badge"></span>
                        {category === undefined ? '' : category.name}
                      </p>
                    </Link>
                  </td>
                  <td>
                    <span className="circle">{element.username[0].toUpperCase()}</span>
                  </td>
                  <td>{element.post_number}</td>
                  <td>{new Date(element.created_at).toDateString()}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </Fragment>
  );
};

export default AllTopicsList;
