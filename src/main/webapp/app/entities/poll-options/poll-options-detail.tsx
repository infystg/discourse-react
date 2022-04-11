import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './poll-options.reducer';

export const PollOptionsDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const pollOptionsEntity = useAppSelector(state => state.pollOptions.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="pollOptionsDetailsHeading">PollOptions</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{pollOptionsEntity.id}</dd>
          <dt>
            <span id="pollId">Poll Id</span>
          </dt>
          <dd>{pollOptionsEntity.pollId}</dd>
          <dt>
            <span id="digest">Digest</span>
          </dt>
          <dd>{pollOptionsEntity.digest}</dd>
          <dt>
            <span id="html">Html</span>
          </dt>
          <dd>{pollOptionsEntity.html}</dd>
          <dt>
            <span id="anonymousVotes">Anonymous Votes</span>
          </dt>
          <dd>{pollOptionsEntity.anonymousVotes}</dd>
          <dt>Poll Votes</dt>
          <dd>{pollOptionsEntity.pollVotes ? pollOptionsEntity.pollVotes.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/poll-options" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/poll-options/${pollOptionsEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default PollOptionsDetail;
