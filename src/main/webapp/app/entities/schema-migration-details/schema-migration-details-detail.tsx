import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './schema-migration-details.reducer';

export const SchemaMigrationDetailsDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const schemaMigrationDetailsEntity = useAppSelector(state => state.schemaMigrationDetails.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="schemaMigrationDetailsDetailsHeading">SchemaMigrationDetails</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{schemaMigrationDetailsEntity.id}</dd>
          <dt>
            <span id="version">Version</span>
          </dt>
          <dd>{schemaMigrationDetailsEntity.version}</dd>
          <dt>
            <span id="name">Name</span>
          </dt>
          <dd>{schemaMigrationDetailsEntity.name}</dd>
          <dt>
            <span id="hostname">Hostname</span>
          </dt>
          <dd>{schemaMigrationDetailsEntity.hostname}</dd>
          <dt>
            <span id="gitVersion">Git Version</span>
          </dt>
          <dd>{schemaMigrationDetailsEntity.gitVersion}</dd>
          <dt>
            <span id="railsVersion">Rails Version</span>
          </dt>
          <dd>{schemaMigrationDetailsEntity.railsVersion}</dd>
          <dt>
            <span id="duration">Duration</span>
          </dt>
          <dd>{schemaMigrationDetailsEntity.duration}</dd>
          <dt>
            <span id="direction">Direction</span>
          </dt>
          <dd>{schemaMigrationDetailsEntity.direction}</dd>
        </dl>
        <Button tag={Link} to="/schema-migration-details" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/schema-migration-details/${schemaMigrationDetailsEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default SchemaMigrationDetailsDetail;
