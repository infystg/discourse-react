import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './unsubscribe-keys.reducer';

export const UnsubscribeKeysDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const unsubscribeKeysEntity = useAppSelector(state => state.unsubscribeKeys.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="unsubscribeKeysDetailsHeading">UnsubscribeKeys</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{unsubscribeKeysEntity.id}</dd>
          <dt>
            <span id="key">Key</span>
          </dt>
          <dd>{unsubscribeKeysEntity.key}</dd>
          <dt>
            <span id="userId">User Id</span>
          </dt>
          <dd>{unsubscribeKeysEntity.userId}</dd>
          <dt>
            <span id="unsubscribeKeyType">Unsubscribe Key Type</span>
          </dt>
          <dd>{unsubscribeKeysEntity.unsubscribeKeyType}</dd>
          <dt>
            <span id="topicId">Topic Id</span>
          </dt>
          <dd>{unsubscribeKeysEntity.topicId}</dd>
          <dt>
            <span id="postId">Post Id</span>
          </dt>
          <dd>{unsubscribeKeysEntity.postId}</dd>
        </dl>
        <Button tag={Link} to="/unsubscribe-keys" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/unsubscribe-keys/${unsubscribeKeysEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default UnsubscribeKeysDetail;
