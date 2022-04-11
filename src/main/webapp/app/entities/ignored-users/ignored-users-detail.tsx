import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './ignored-users.reducer';

export const IgnoredUsersDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const ignoredUsersEntity = useAppSelector(state => state.ignoredUsers.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="ignoredUsersDetailsHeading">IgnoredUsers</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{ignoredUsersEntity.id}</dd>
          <dt>
            <span id="userId">User Id</span>
          </dt>
          <dd>{ignoredUsersEntity.userId}</dd>
          <dt>
            <span id="ignoredUserId">Ignored User Id</span>
          </dt>
          <dd>{ignoredUsersEntity.ignoredUserId}</dd>
          <dt>
            <span id="summarizedAt">Summarized At</span>
          </dt>
          <dd>
            {ignoredUsersEntity.summarizedAt ? (
              <TextFormat value={ignoredUsersEntity.summarizedAt} type="date" format={APP_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="expiringAt">Expiring At</span>
          </dt>
          <dd>
            {ignoredUsersEntity.expiringAt ? (
              <TextFormat value={ignoredUsersEntity.expiringAt} type="date" format={APP_DATE_FORMAT} />
            ) : null}
          </dd>
        </dl>
        <Button tag={Link} to="/ignored-users" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/ignored-users/${ignoredUsersEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default IgnoredUsersDetail;
