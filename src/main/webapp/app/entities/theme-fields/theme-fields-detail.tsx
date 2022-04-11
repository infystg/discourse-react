import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './theme-fields.reducer';

export const ThemeFieldsDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const themeFieldsEntity = useAppSelector(state => state.themeFields.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="themeFieldsDetailsHeading">ThemeFields</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{themeFieldsEntity.id}</dd>
          <dt>
            <span id="themeId">Theme Id</span>
          </dt>
          <dd>{themeFieldsEntity.themeId}</dd>
          <dt>
            <span id="targetId">Target Id</span>
          </dt>
          <dd>{themeFieldsEntity.targetId}</dd>
          <dt>
            <span id="name">Name</span>
          </dt>
          <dd>{themeFieldsEntity.name}</dd>
          <dt>
            <span id="value">Value</span>
          </dt>
          <dd>{themeFieldsEntity.value}</dd>
          <dt>
            <span id="valueBaked">Value Baked</span>
          </dt>
          <dd>{themeFieldsEntity.valueBaked}</dd>
          <dt>
            <span id="compilerVersion">Compiler Version</span>
          </dt>
          <dd>{themeFieldsEntity.compilerVersion}</dd>
          <dt>
            <span id="error">Error</span>
          </dt>
          <dd>{themeFieldsEntity.error}</dd>
          <dt>
            <span id="uploadId">Upload Id</span>
          </dt>
          <dd>{themeFieldsEntity.uploadId}</dd>
          <dt>
            <span id="typeId">Type Id</span>
          </dt>
          <dd>{themeFieldsEntity.typeId}</dd>
          <dt>Javascript Caches</dt>
          <dd>{themeFieldsEntity.javascriptCaches ? themeFieldsEntity.javascriptCaches.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/theme-fields" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/theme-fields/${themeFieldsEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default ThemeFieldsDetail;
