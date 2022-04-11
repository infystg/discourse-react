import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './user-api-key-scopes.reducer';

export const UserApiKeyScopesDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const userApiKeyScopesEntity = useAppSelector(state => state.userApiKeyScopes.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="userApiKeyScopesDetailsHeading">UserApiKeyScopes</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{userApiKeyScopesEntity.id}</dd>
          <dt>
            <span id="userApiKeyId">User Api Key Id</span>
          </dt>
          <dd>{userApiKeyScopesEntity.userApiKeyId}</dd>
          <dt>
            <span id="name">Name</span>
          </dt>
          <dd>{userApiKeyScopesEntity.name}</dd>
          <dt>
            <span id="allowedParameters">Allowed Parameters</span>
          </dt>
          <dd>{userApiKeyScopesEntity.allowedParameters}</dd>
        </dl>
        <Button tag={Link} to="/user-api-key-scopes" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/user-api-key-scopes/${userApiKeyScopesEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default UserApiKeyScopesDetail;
