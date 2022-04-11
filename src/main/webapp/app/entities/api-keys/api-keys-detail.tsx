import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './api-keys.reducer';

export const ApiKeysDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const apiKeysEntity = useAppSelector(state => state.apiKeys.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="apiKeysDetailsHeading">ApiKeys</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{apiKeysEntity.id}</dd>
          <dt>
            <span id="userId">User Id</span>
          </dt>
          <dd>{apiKeysEntity.userId}</dd>
          <dt>
            <span id="allowedIps">Allowed Ips</span>
          </dt>
          <dd>{apiKeysEntity.allowedIps}</dd>
          <dt>
            <span id="hidden">Hidden</span>
          </dt>
          <dd>{apiKeysEntity.hidden ? 'true' : 'false'}</dd>
          <dt>
            <span id="lastUsedAt">Last Used At</span>
          </dt>
          <dd>{apiKeysEntity.lastUsedAt ? <TextFormat value={apiKeysEntity.lastUsedAt} type="date" format={APP_DATE_FORMAT} /> : null}</dd>
          <dt>
            <span id="revokedAt">Revoked At</span>
          </dt>
          <dd>{apiKeysEntity.revokedAt ? <TextFormat value={apiKeysEntity.revokedAt} type="date" format={APP_DATE_FORMAT} /> : null}</dd>
          <dt>
            <span id="description">Description</span>
          </dt>
          <dd>{apiKeysEntity.description}</dd>
          <dt>
            <span id="keyHash">Key Hash</span>
          </dt>
          <dd>{apiKeysEntity.keyHash}</dd>
          <dt>
            <span id="truncatedKey">Truncated Key</span>
          </dt>
          <dd>{apiKeysEntity.truncatedKey}</dd>
        </dl>
        <Button tag={Link} to="/api-keys" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/api-keys/${apiKeysEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default ApiKeysDetail;
