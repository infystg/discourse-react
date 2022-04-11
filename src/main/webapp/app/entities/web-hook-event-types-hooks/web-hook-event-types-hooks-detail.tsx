import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './web-hook-event-types-hooks.reducer';

export const WebHookEventTypesHooksDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const webHookEventTypesHooksEntity = useAppSelector(state => state.webHookEventTypesHooks.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="webHookEventTypesHooksDetailsHeading">WebHookEventTypesHooks</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{webHookEventTypesHooksEntity.id}</dd>
          <dt>
            <span id="webHookId">Web Hook Id</span>
          </dt>
          <dd>{webHookEventTypesHooksEntity.webHookId}</dd>
          <dt>
            <span id="webHookEventTypeId">Web Hook Event Type Id</span>
          </dt>
          <dd>{webHookEventTypesHooksEntity.webHookEventTypeId}</dd>
        </dl>
        <Button tag={Link} to="/web-hook-event-types-hooks" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/web-hook-event-types-hooks/${webHookEventTypesHooksEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default WebHookEventTypesHooksDetail;
