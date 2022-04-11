import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './uploads.reducer';

export const UploadsDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const uploadsEntity = useAppSelector(state => state.uploads.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="uploadsDetailsHeading">Uploads</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{uploadsEntity.id}</dd>
          <dt>
            <span id="userId">User Id</span>
          </dt>
          <dd>{uploadsEntity.userId}</dd>
          <dt>
            <span id="originalFilename">Original Filename</span>
          </dt>
          <dd>{uploadsEntity.originalFilename}</dd>
          <dt>
            <span id="filesize">Filesize</span>
          </dt>
          <dd>{uploadsEntity.filesize}</dd>
          <dt>
            <span id="width">Width</span>
          </dt>
          <dd>{uploadsEntity.width}</dd>
          <dt>
            <span id="height">Height</span>
          </dt>
          <dd>{uploadsEntity.height}</dd>
          <dt>
            <span id="url">Url</span>
          </dt>
          <dd>{uploadsEntity.url}</dd>
          <dt>
            <span id="sha1">Sha 1</span>
          </dt>
          <dd>{uploadsEntity.sha1}</dd>
          <dt>
            <span id="origin">Origin</span>
          </dt>
          <dd>{uploadsEntity.origin}</dd>
          <dt>
            <span id="retainHours">Retain Hours</span>
          </dt>
          <dd>{uploadsEntity.retainHours}</dd>
          <dt>
            <span id="extension">Extension</span>
          </dt>
          <dd>{uploadsEntity.extension}</dd>
          <dt>
            <span id="thumbnailWidth">Thumbnail Width</span>
          </dt>
          <dd>{uploadsEntity.thumbnailWidth}</dd>
          <dt>
            <span id="thumbnailHeight">Thumbnail Height</span>
          </dt>
          <dd>{uploadsEntity.thumbnailHeight}</dd>
          <dt>
            <span id="etag">Etag</span>
          </dt>
          <dd>{uploadsEntity.etag}</dd>
          <dt>
            <span id="secure">Secure</span>
          </dt>
          <dd>{uploadsEntity.secure ? 'true' : 'false'}</dd>
          <dt>
            <span id="accessControlPostId">Access Control Post Id</span>
          </dt>
          <dd>{uploadsEntity.accessControlPostId}</dd>
          <dt>
            <span id="originalSha1">Original Sha 1</span>
          </dt>
          <dd>{uploadsEntity.originalSha1}</dd>
          <dt>
            <span id="animated">Animated</span>
          </dt>
          <dd>{uploadsEntity.animated ? 'true' : 'false'}</dd>
          <dt>
            <span id="verified">Verified</span>
          </dt>
          <dd>{uploadsEntity.verified ? 'true' : 'false'}</dd>
          <dt>
            <span id="verificationStatus">Verification Status</span>
          </dt>
          <dd>{uploadsEntity.verificationStatus}</dd>
          <dt>
            <span id="securityLastChangedAt">Security Last Changed At</span>
          </dt>
          <dd>
            {uploadsEntity.securityLastChangedAt ? (
              <TextFormat value={uploadsEntity.securityLastChangedAt} type="date" format={APP_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="securityLastChangedReason">Security Last Changed Reason</span>
          </dt>
          <dd>{uploadsEntity.securityLastChangedReason}</dd>
          <dt>User Profiles</dt>
          <dd>{uploadsEntity.userProfiles ? uploadsEntity.userProfiles.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/uploads" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/uploads/${uploadsEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default UploadsDetail;
