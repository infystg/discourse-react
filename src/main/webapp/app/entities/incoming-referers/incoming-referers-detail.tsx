import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './incoming-referers.reducer';

export const IncomingReferersDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const incomingReferersEntity = useAppSelector(state => state.incomingReferers.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="incomingReferersDetailsHeading">IncomingReferers</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{incomingReferersEntity.id}</dd>
          <dt>
            <span id="path">Path</span>
          </dt>
          <dd>{incomingReferersEntity.path}</dd>
          <dt>
            <span id="incomingDomainId">Incoming Domain Id</span>
          </dt>
          <dd>{incomingReferersEntity.incomingDomainId}</dd>
        </dl>
        <Button tag={Link} to="/incoming-referers" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/incoming-referers/${incomingReferersEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default IncomingReferersDetail;
