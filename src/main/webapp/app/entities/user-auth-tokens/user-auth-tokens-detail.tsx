import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './user-auth-tokens.reducer';

export const UserAuthTokensDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const userAuthTokensEntity = useAppSelector(state => state.userAuthTokens.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="userAuthTokensDetailsHeading">UserAuthTokens</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{userAuthTokensEntity.id}</dd>
          <dt>
            <span id="userId">User Id</span>
          </dt>
          <dd>{userAuthTokensEntity.userId}</dd>
          <dt>
            <span id="authToken">Auth Token</span>
          </dt>
          <dd>{userAuthTokensEntity.authToken}</dd>
          <dt>
            <span id="prevAuthToken">Prev Auth Token</span>
          </dt>
          <dd>{userAuthTokensEntity.prevAuthToken}</dd>
          <dt>
            <span id="userAgent">User Agent</span>
          </dt>
          <dd>{userAuthTokensEntity.userAgent}</dd>
          <dt>
            <span id="authTokenSeen">Auth Token Seen</span>
          </dt>
          <dd>{userAuthTokensEntity.authTokenSeen ? 'true' : 'false'}</dd>
          <dt>
            <span id="clientIp">Client Ip</span>
          </dt>
          <dd>{userAuthTokensEntity.clientIp}</dd>
          <dt>
            <span id="rotatedAt">Rotated At</span>
          </dt>
          <dd>
            {userAuthTokensEntity.rotatedAt ? (
              <TextFormat value={userAuthTokensEntity.rotatedAt} type="date" format={APP_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="seenAt">Seen At</span>
          </dt>
          <dd>
            {userAuthTokensEntity.seenAt ? <TextFormat value={userAuthTokensEntity.seenAt} type="date" format={APP_DATE_FORMAT} /> : null}
          </dd>
        </dl>
        <Button tag={Link} to="/user-auth-tokens" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/user-auth-tokens/${userAuthTokensEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default UserAuthTokensDetail;
