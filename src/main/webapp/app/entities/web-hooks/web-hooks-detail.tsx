import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './web-hooks.reducer';

export const WebHooksDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const webHooksEntity = useAppSelector(state => state.webHooks.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="webHooksDetailsHeading">WebHooks</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{webHooksEntity.id}</dd>
          <dt>
            <span id="payloadUrl">Payload Url</span>
          </dt>
          <dd>{webHooksEntity.payloadUrl}</dd>
          <dt>
            <span id="contentType">Content Type</span>
          </dt>
          <dd>{webHooksEntity.contentType}</dd>
          <dt>
            <span id="lastDeliveryStatus">Last Delivery Status</span>
          </dt>
          <dd>{webHooksEntity.lastDeliveryStatus}</dd>
          <dt>
            <span id="status">Status</span>
          </dt>
          <dd>{webHooksEntity.status}</dd>
          <dt>
            <span id="secret">Secret</span>
          </dt>
          <dd>{webHooksEntity.secret}</dd>
          <dt>
            <span id="wildcardWebHook">Wildcard Web Hook</span>
          </dt>
          <dd>{webHooksEntity.wildcardWebHook ? 'true' : 'false'}</dd>
          <dt>
            <span id="verifyCertificate">Verify Certificate</span>
          </dt>
          <dd>{webHooksEntity.verifyCertificate ? 'true' : 'false'}</dd>
          <dt>
            <span id="active">Active</span>
          </dt>
          <dd>{webHooksEntity.active ? 'true' : 'false'}</dd>
        </dl>
        <Button tag={Link} to="/web-hooks" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/web-hooks/${webHooksEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default WebHooksDetail;
