import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './allowed-pm-users.reducer';

export const AllowedPmUsersDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const allowedPmUsersEntity = useAppSelector(state => state.allowedPmUsers.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="allowedPmUsersDetailsHeading">AllowedPmUsers</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{allowedPmUsersEntity.id}</dd>
          <dt>
            <span id="userId">User Id</span>
          </dt>
          <dd>{allowedPmUsersEntity.userId}</dd>
          <dt>
            <span id="allowedPmUserId">Allowed Pm User Id</span>
          </dt>
          <dd>{allowedPmUsersEntity.allowedPmUserId}</dd>
        </dl>
        <Button tag={Link} to="/allowed-pm-users" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/allowed-pm-users/${allowedPmUsersEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default AllowedPmUsersDetail;
