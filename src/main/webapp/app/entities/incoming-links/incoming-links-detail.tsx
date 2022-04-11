import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './incoming-links.reducer';

export const IncomingLinksDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const incomingLinksEntity = useAppSelector(state => state.incomingLinks.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="incomingLinksDetailsHeading">IncomingLinks</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{incomingLinksEntity.id}</dd>
          <dt>
            <span id="userId">User Id</span>
          </dt>
          <dd>{incomingLinksEntity.userId}</dd>
          <dt>
            <span id="ipAddress">Ip Address</span>
          </dt>
          <dd>{incomingLinksEntity.ipAddress}</dd>
          <dt>
            <span id="currentUserId">Current User Id</span>
          </dt>
          <dd>{incomingLinksEntity.currentUserId}</dd>
          <dt>
            <span id="postId">Post Id</span>
          </dt>
          <dd>{incomingLinksEntity.postId}</dd>
          <dt>
            <span id="incomingRefererId">Incoming Referer Id</span>
          </dt>
          <dd>{incomingLinksEntity.incomingRefererId}</dd>
        </dl>
        <Button tag={Link} to="/incoming-links" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/incoming-links/${incomingLinksEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default IncomingLinksDetail;
