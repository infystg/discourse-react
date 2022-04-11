import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './user-open-ids.reducer';

export const UserOpenIdsDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const userOpenIdsEntity = useAppSelector(state => state.userOpenIds.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="userOpenIdsDetailsHeading">UserOpenIds</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{userOpenIdsEntity.id}</dd>
          <dt>
            <span id="userId">User Id</span>
          </dt>
          <dd>{userOpenIdsEntity.userId}</dd>
          <dt>
            <span id="email">Email</span>
          </dt>
          <dd>{userOpenIdsEntity.email}</dd>
          <dt>
            <span id="url">Url</span>
          </dt>
          <dd>{userOpenIdsEntity.url}</dd>
          <dt>
            <span id="active">Active</span>
          </dt>
          <dd>{userOpenIdsEntity.active ? 'true' : 'false'}</dd>
        </dl>
        <Button tag={Link} to="/user-open-ids" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/user-open-ids/${userOpenIdsEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default UserOpenIdsDetail;
