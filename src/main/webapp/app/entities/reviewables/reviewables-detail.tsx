import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './reviewables.reducer';

export const ReviewablesDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const reviewablesEntity = useAppSelector(state => state.reviewables.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="reviewablesDetailsHeading">Reviewables</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{reviewablesEntity.id}</dd>
          <dt>
            <span id="type">Type</span>
          </dt>
          <dd>{reviewablesEntity.type}</dd>
          <dt>
            <span id="status">Status</span>
          </dt>
          <dd>{reviewablesEntity.status}</dd>
          <dt>
            <span id="reviewableByModerator">Reviewable By Moderator</span>
          </dt>
          <dd>{reviewablesEntity.reviewableByModerator ? 'true' : 'false'}</dd>
          <dt>
            <span id="reviewableByGroupId">Reviewable By Group Id</span>
          </dt>
          <dd>{reviewablesEntity.reviewableByGroupId}</dd>
          <dt>
            <span id="categoryId">Category Id</span>
          </dt>
          <dd>{reviewablesEntity.categoryId}</dd>
          <dt>
            <span id="topicId">Topic Id</span>
          </dt>
          <dd>{reviewablesEntity.topicId}</dd>
          <dt>
            <span id="score">Score</span>
          </dt>
          <dd>{reviewablesEntity.score}</dd>
          <dt>
            <span id="potentialSpam">Potential Spam</span>
          </dt>
          <dd>{reviewablesEntity.potentialSpam ? 'true' : 'false'}</dd>
          <dt>
            <span id="targetId">Target Id</span>
          </dt>
          <dd>{reviewablesEntity.targetId}</dd>
          <dt>
            <span id="targetType">Target Type</span>
          </dt>
          <dd>{reviewablesEntity.targetType}</dd>
          <dt>
            <span id="targetCreatedById">Target Created By Id</span>
          </dt>
          <dd>{reviewablesEntity.targetCreatedById}</dd>
          <dt>
            <span id="payload">Payload</span>
          </dt>
          <dd>{reviewablesEntity.payload}</dd>
          <dt>
            <span id="version">Version</span>
          </dt>
          <dd>{reviewablesEntity.version}</dd>
          <dt>
            <span id="latestScore">Latest Score</span>
          </dt>
          <dd>
            {reviewablesEntity.latestScore ? (
              <TextFormat value={reviewablesEntity.latestScore} type="date" format={APP_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="forceReview">Force Review</span>
          </dt>
          <dd>{reviewablesEntity.forceReview ? 'true' : 'false'}</dd>
          <dt>
            <span id="rejectReason">Reject Reason</span>
          </dt>
          <dd>{reviewablesEntity.rejectReason}</dd>
        </dl>
        <Button tag={Link} to="/reviewables" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/reviewables/${reviewablesEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default ReviewablesDetail;
