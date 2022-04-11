import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './reviewable-histories.reducer';

export const ReviewableHistoriesDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const reviewableHistoriesEntity = useAppSelector(state => state.reviewableHistories.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="reviewableHistoriesDetailsHeading">ReviewableHistories</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{reviewableHistoriesEntity.id}</dd>
          <dt>
            <span id="reviewableId">Reviewable Id</span>
          </dt>
          <dd>{reviewableHistoriesEntity.reviewableId}</dd>
          <dt>
            <span id="reviewableHistoryType">Reviewable History Type</span>
          </dt>
          <dd>{reviewableHistoriesEntity.reviewableHistoryType}</dd>
          <dt>
            <span id="status">Status</span>
          </dt>
          <dd>{reviewableHistoriesEntity.status}</dd>
          <dt>
            <span id="edited">Edited</span>
          </dt>
          <dd>{reviewableHistoriesEntity.edited}</dd>
        </dl>
        <Button tag={Link} to="/reviewable-histories" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/reviewable-histories/${reviewableHistoriesEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default ReviewableHistoriesDetail;
