import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './optimized-images.reducer';

export const OptimizedImagesDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const optimizedImagesEntity = useAppSelector(state => state.optimizedImages.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="optimizedImagesDetailsHeading">OptimizedImages</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{optimizedImagesEntity.id}</dd>
          <dt>
            <span id="sha1">Sha 1</span>
          </dt>
          <dd>{optimizedImagesEntity.sha1}</dd>
          <dt>
            <span id="extension">Extension</span>
          </dt>
          <dd>{optimizedImagesEntity.extension}</dd>
          <dt>
            <span id="width">Width</span>
          </dt>
          <dd>{optimizedImagesEntity.width}</dd>
          <dt>
            <span id="height">Height</span>
          </dt>
          <dd>{optimizedImagesEntity.height}</dd>
          <dt>
            <span id="uploadId">Upload Id</span>
          </dt>
          <dd>{optimizedImagesEntity.uploadId}</dd>
          <dt>
            <span id="url">Url</span>
          </dt>
          <dd>{optimizedImagesEntity.url}</dd>
          <dt>
            <span id="filesize">Filesize</span>
          </dt>
          <dd>{optimizedImagesEntity.filesize}</dd>
          <dt>
            <span id="etag">Etag</span>
          </dt>
          <dd>{optimizedImagesEntity.etag}</dd>
          <dt>
            <span id="version">Version</span>
          </dt>
          <dd>{optimizedImagesEntity.version}</dd>
        </dl>
        <Button tag={Link} to="/optimized-images" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/optimized-images/${optimizedImagesEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default OptimizedImagesDetail;
