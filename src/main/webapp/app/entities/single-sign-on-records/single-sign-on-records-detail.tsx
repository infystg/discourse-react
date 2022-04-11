import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './single-sign-on-records.reducer';

export const SingleSignOnRecordsDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const singleSignOnRecordsEntity = useAppSelector(state => state.singleSignOnRecords.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="singleSignOnRecordsDetailsHeading">SingleSignOnRecords</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{singleSignOnRecordsEntity.id}</dd>
          <dt>
            <span id="userId">User Id</span>
          </dt>
          <dd>{singleSignOnRecordsEntity.userId}</dd>
          <dt>
            <span id="externalId">External Id</span>
          </dt>
          <dd>{singleSignOnRecordsEntity.externalId}</dd>
          <dt>
            <span id="lastPayload">Last Payload</span>
          </dt>
          <dd>{singleSignOnRecordsEntity.lastPayload}</dd>
          <dt>
            <span id="externalUsername">External Username</span>
          </dt>
          <dd>{singleSignOnRecordsEntity.externalUsername}</dd>
          <dt>
            <span id="externalEmail">External Email</span>
          </dt>
          <dd>{singleSignOnRecordsEntity.externalEmail}</dd>
          <dt>
            <span id="externalName">External Name</span>
          </dt>
          <dd>{singleSignOnRecordsEntity.externalName}</dd>
          <dt>
            <span id="externalAvatarUrl">External Avatar Url</span>
          </dt>
          <dd>{singleSignOnRecordsEntity.externalAvatarUrl}</dd>
          <dt>
            <span id="externalProfileBackgroundUrl">External Profile Background Url</span>
          </dt>
          <dd>{singleSignOnRecordsEntity.externalProfileBackgroundUrl}</dd>
          <dt>
            <span id="externalCardBackgroundUrl">External Card Background Url</span>
          </dt>
          <dd>{singleSignOnRecordsEntity.externalCardBackgroundUrl}</dd>
        </dl>
        <Button tag={Link} to="/single-sign-on-records" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/single-sign-on-records/${singleSignOnRecordsEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default SingleSignOnRecordsDetail;
