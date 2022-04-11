import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './api-key-scopes.reducer';

export const ApiKeyScopesDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const apiKeyScopesEntity = useAppSelector(state => state.apiKeyScopes.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="apiKeyScopesDetailsHeading">ApiKeyScopes</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{apiKeyScopesEntity.id}</dd>
          <dt>
            <span id="apiKeyId">Api Key Id</span>
          </dt>
          <dd>{apiKeyScopesEntity.apiKeyId}</dd>
          <dt>
            <span id="resource">Resource</span>
          </dt>
          <dd>{apiKeyScopesEntity.resource}</dd>
          <dt>
            <span id="action">Action</span>
          </dt>
          <dd>{apiKeyScopesEntity.action}</dd>
          <dt>
            <span id="allowedParameters">Allowed Parameters</span>
          </dt>
          <dd>{apiKeyScopesEntity.allowedParameters}</dd>
        </dl>
        <Button tag={Link} to="/api-key-scopes" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/api-key-scopes/${apiKeyScopesEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default ApiKeyScopesDetail;
