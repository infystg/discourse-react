import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './given-daily-likes.reducer';

export const GivenDailyLikesDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const givenDailyLikesEntity = useAppSelector(state => state.givenDailyLikes.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="givenDailyLikesDetailsHeading">GivenDailyLikes</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{givenDailyLikesEntity.id}</dd>
          <dt>
            <span id="userId">User Id</span>
          </dt>
          <dd>{givenDailyLikesEntity.userId}</dd>
          <dt>
            <span id="likesGiven">Likes Given</span>
          </dt>
          <dd>{givenDailyLikesEntity.likesGiven}</dd>
          <dt>
            <span id="givenDate">Given Date</span>
          </dt>
          <dd>
            {givenDailyLikesEntity.givenDate ? (
              <TextFormat value={givenDailyLikesEntity.givenDate} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="limitReached">Limit Reached</span>
          </dt>
          <dd>{givenDailyLikesEntity.limitReached ? 'true' : 'false'}</dd>
        </dl>
        <Button tag={Link} to="/given-daily-likes" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/given-daily-likes/${givenDailyLikesEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default GivenDailyLikesDetail;
