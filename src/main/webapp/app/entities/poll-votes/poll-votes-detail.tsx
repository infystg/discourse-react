import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './poll-votes.reducer';

export const PollVotesDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const pollVotesEntity = useAppSelector(state => state.pollVotes.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="pollVotesDetailsHeading">PollVotes</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{pollVotesEntity.id}</dd>
          <dt>
            <span id="pollId">Poll Id</span>
          </dt>
          <dd>{pollVotesEntity.pollId}</dd>
          <dt>
            <span id="pollOptionId">Poll Option Id</span>
          </dt>
          <dd>{pollVotesEntity.pollOptionId}</dd>
          <dt>
            <span id="userId">User Id</span>
          </dt>
          <dd>{pollVotesEntity.userId}</dd>
        </dl>
        <Button tag={Link} to="/poll-votes" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/poll-votes/${pollVotesEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default PollVotesDetail;
