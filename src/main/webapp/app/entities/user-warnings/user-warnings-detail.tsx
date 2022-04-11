import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './user-warnings.reducer';

export const UserWarningsDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const userWarningsEntity = useAppSelector(state => state.userWarnings.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="userWarningsDetailsHeading">UserWarnings</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{userWarningsEntity.id}</dd>
          <dt>
            <span id="topicId">Topic Id</span>
          </dt>
          <dd>{userWarningsEntity.topicId}</dd>
          <dt>
            <span id="userId">User Id</span>
          </dt>
          <dd>{userWarningsEntity.userId}</dd>
        </dl>
        <Button tag={Link} to="/user-warnings" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/user-warnings/${userWarningsEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default UserWarningsDetail;
