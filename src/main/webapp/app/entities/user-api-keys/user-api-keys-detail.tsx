import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './user-api-keys.reducer';

export const UserApiKeysDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const userApiKeysEntity = useAppSelector(state => state.userApiKeys.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="userApiKeysDetailsHeading">UserApiKeys</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{userApiKeysEntity.id}</dd>
          <dt>
            <span id="userId">User Id</span>
          </dt>
          <dd>{userApiKeysEntity.userId}</dd>
          <dt>
            <span id="clientId">Client Id</span>
          </dt>
          <dd>{userApiKeysEntity.clientId}</dd>
          <dt>
            <span id="applicationName">Application Name</span>
          </dt>
          <dd>{userApiKeysEntity.applicationName}</dd>
          <dt>
            <span id="pushUrl">Push Url</span>
          </dt>
          <dd>{userApiKeysEntity.pushUrl}</dd>
          <dt>
            <span id="revokedAt">Revoked At</span>
          </dt>
          <dd>
            {userApiKeysEntity.revokedAt ? <TextFormat value={userApiKeysEntity.revokedAt} type="date" format={APP_DATE_FORMAT} /> : null}
          </dd>
          <dt>
            <span id="scopes">Scopes</span>
          </dt>
          <dd>{userApiKeysEntity.scopes}</dd>
          <dt>
            <span id="lastUsedAt">Last Used At</span>
          </dt>
          <dd>
            {userApiKeysEntity.lastUsedAt ? <TextFormat value={userApiKeysEntity.lastUsedAt} type="date" format={APP_DATE_FORMAT} /> : null}
          </dd>
          <dt>
            <span id="keyHash">Key Hash</span>
          </dt>
          <dd>{userApiKeysEntity.keyHash}</dd>
        </dl>
        <Button tag={Link} to="/user-api-keys" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/user-api-keys/${userApiKeysEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default UserApiKeysDetail;
