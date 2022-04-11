import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './category-featured-topics.reducer';

export const CategoryFeaturedTopicsDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const categoryFeaturedTopicsEntity = useAppSelector(state => state.categoryFeaturedTopics.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="categoryFeaturedTopicsDetailsHeading">CategoryFeaturedTopics</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{categoryFeaturedTopicsEntity.id}</dd>
          <dt>
            <span id="categoryId">Category Id</span>
          </dt>
          <dd>{categoryFeaturedTopicsEntity.categoryId}</dd>
          <dt>
            <span id="topicId">Topic Id</span>
          </dt>
          <dd>{categoryFeaturedTopicsEntity.topicId}</dd>
          <dt>
            <span id="rank">Rank</span>
          </dt>
          <dd>{categoryFeaturedTopicsEntity.rank}</dd>
        </dl>
        <Button tag={Link} to="/category-featured-topics" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/category-featured-topics/${categoryFeaturedTopicsEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default CategoryFeaturedTopicsDetail;
