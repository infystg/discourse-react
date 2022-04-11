import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './backup-metadata.reducer';

export const BackupMetadataDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const backupMetadataEntity = useAppSelector(state => state.backupMetadata.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="backupMetadataDetailsHeading">BackupMetadata</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{backupMetadataEntity.id}</dd>
          <dt>
            <span id="name">Name</span>
          </dt>
          <dd>{backupMetadataEntity.name}</dd>
          <dt>
            <span id="value">Value</span>
          </dt>
          <dd>{backupMetadataEntity.value}</dd>
        </dl>
        <Button tag={Link} to="/backup-metadata" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/backup-metadata/${backupMetadataEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default BackupMetadataDetail;
