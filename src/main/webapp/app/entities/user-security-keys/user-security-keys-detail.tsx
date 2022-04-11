import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './user-security-keys.reducer';

export const UserSecurityKeysDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const userSecurityKeysEntity = useAppSelector(state => state.userSecurityKeys.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="userSecurityKeysDetailsHeading">UserSecurityKeys</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{userSecurityKeysEntity.id}</dd>
          <dt>
            <span id="userId">User Id</span>
          </dt>
          <dd>{userSecurityKeysEntity.userId}</dd>
          <dt>
            <span id="credentialId">Credential Id</span>
          </dt>
          <dd>{userSecurityKeysEntity.credentialId}</dd>
          <dt>
            <span id="publicKey">Public Key</span>
          </dt>
          <dd>{userSecurityKeysEntity.publicKey}</dd>
          <dt>
            <span id="factorType">Factor Type</span>
          </dt>
          <dd>{userSecurityKeysEntity.factorType}</dd>
          <dt>
            <span id="enabled">Enabled</span>
          </dt>
          <dd>{userSecurityKeysEntity.enabled ? 'true' : 'false'}</dd>
          <dt>
            <span id="name">Name</span>
          </dt>
          <dd>{userSecurityKeysEntity.name}</dd>
          <dt>
            <span id="lastUsed">Last Used</span>
          </dt>
          <dd>
            {userSecurityKeysEntity.lastUsed ? (
              <TextFormat value={userSecurityKeysEntity.lastUsed} type="date" format={APP_DATE_FORMAT} />
            ) : null}
          </dd>
        </dl>
        <Button tag={Link} to="/user-security-keys" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/user-security-keys/${userSecurityKeysEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default UserSecurityKeysDetail;
