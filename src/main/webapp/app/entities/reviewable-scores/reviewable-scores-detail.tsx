import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './reviewable-scores.reducer';

export const ReviewableScoresDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const reviewableScoresEntity = useAppSelector(state => state.reviewableScores.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="reviewableScoresDetailsHeading">ReviewableScores</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{reviewableScoresEntity.id}</dd>
          <dt>
            <span id="reviewableId">Reviewable Id</span>
          </dt>
          <dd>{reviewableScoresEntity.reviewableId}</dd>
          <dt>
            <span id="userId">User Id</span>
          </dt>
          <dd>{reviewableScoresEntity.userId}</dd>
          <dt>
            <span id="reviewableScoreType">Reviewable Score Type</span>
          </dt>
          <dd>{reviewableScoresEntity.reviewableScoreType}</dd>
          <dt>
            <span id="status">Status</span>
          </dt>
          <dd>{reviewableScoresEntity.status}</dd>
          <dt>
            <span id="score">Score</span>
          </dt>
          <dd>{reviewableScoresEntity.score}</dd>
          <dt>
            <span id="takeActionBonus">Take Action Bonus</span>
          </dt>
          <dd>{reviewableScoresEntity.takeActionBonus}</dd>
          <dt>
            <span id="reviewedById">Reviewed By Id</span>
          </dt>
          <dd>{reviewableScoresEntity.reviewedById}</dd>
          <dt>
            <span id="reviewedAt">Reviewed At</span>
          </dt>
          <dd>
            {reviewableScoresEntity.reviewedAt ? (
              <TextFormat value={reviewableScoresEntity.reviewedAt} type="date" format={APP_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="metaTopicId">Meta Topic Id</span>
          </dt>
          <dd>{reviewableScoresEntity.metaTopicId}</dd>
          <dt>
            <span id="reason">Reason</span>
          </dt>
          <dd>{reviewableScoresEntity.reason}</dd>
          <dt>
            <span id="userAccuracyBonus">User Accuracy Bonus</span>
          </dt>
          <dd>{reviewableScoresEntity.userAccuracyBonus}</dd>
        </dl>
        <Button tag={Link} to="/reviewable-scores" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/reviewable-scores/${reviewableScoresEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default ReviewableScoresDetail;
