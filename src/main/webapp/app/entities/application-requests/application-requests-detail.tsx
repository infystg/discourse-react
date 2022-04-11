import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './application-requests.reducer';

export const ApplicationRequestsDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const applicationRequestsEntity = useAppSelector(state => state.applicationRequests.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="applicationRequestsDetailsHeading">ApplicationRequests</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{applicationRequestsEntity.id}</dd>
          <dt>
            <span id="date">Date</span>
          </dt>
          <dd>
            {applicationRequestsEntity.date ? (
              <TextFormat value={applicationRequestsEntity.date} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="reqType">Req Type</span>
          </dt>
          <dd>{applicationRequestsEntity.reqType}</dd>
          <dt>
            <span id="count">Count</span>
          </dt>
          <dd>{applicationRequestsEntity.count}</dd>
        </dl>
        <Button tag={Link} to="/application-requests" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/application-requests/${applicationRequestsEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default ApplicationRequestsDetail;
