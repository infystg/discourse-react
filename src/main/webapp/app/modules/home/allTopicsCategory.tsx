import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

const AllTopicsCategory = ({ categories, setCategory }) => {
  return (
    <Fragment>
      {categories.length === 0 ? (
        ''
      ) : (
        <Row className="g-2">
          {categories.map(category => (
            <Col key={category.id} sm="12" md="6">
              <div className="card text-center m-3" style={{ zIndex: '1' }}>
                <div className="card-header">
                  Topics <span className="info-badge bg-info text-white">{category.topic_count}</span>
                </div>
                <div className="card-body my-2">
                  <h6 className="card-title">
                    <span style={{ backgroundColor: category.color }} className="cat-badge"></span>
                    {category.name}
                  </h6>
                  <h6 className="card-text mb-3">{category.description}</h6>
                  <Link to="/allTopics" className="filter-btn shadow" onClick={e => setCategory(category.id, category.name)}>
                    See All Topics
                  </Link>
                </div>
                <div className="card-footer text-muted">Total Posts : {category.post_count}</div>
              </div>
            </Col>
          ))}
        </Row>
      )}
    </Fragment>
  );
};

export default AllTopicsCategory;
