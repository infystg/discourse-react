import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './category-tag-stats.reducer';

export const CategoryTagStatsDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const categoryTagStatsEntity = useAppSelector(state => state.categoryTagStats.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="categoryTagStatsDetailsHeading">CategoryTagStats</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{categoryTagStatsEntity.id}</dd>
          <dt>
            <span id="categoryId">Category Id</span>
          </dt>
          <dd>{categoryTagStatsEntity.categoryId}</dd>
          <dt>
            <span id="tagId">Tag Id</span>
          </dt>
          <dd>{categoryTagStatsEntity.tagId}</dd>
          <dt>
            <span id="topicCount">Topic Count</span>
          </dt>
          <dd>{categoryTagStatsEntity.topicCount}</dd>
        </dl>
        <Button tag={Link} to="/category-tag-stats" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/category-tag-stats/${categoryTagStatsEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default CategoryTagStatsDetail;
