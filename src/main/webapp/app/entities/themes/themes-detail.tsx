import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './themes.reducer';

export const ThemesDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const themesEntity = useAppSelector(state => state.themes.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="themesDetailsHeading">Themes</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{themesEntity.id}</dd>
          <dt>
            <span id="name">Name</span>
          </dt>
          <dd>{themesEntity.name}</dd>
          <dt>
            <span id="userId">User Id</span>
          </dt>
          <dd>{themesEntity.userId}</dd>
          <dt>
            <span id="compilerVersion">Compiler Version</span>
          </dt>
          <dd>{themesEntity.compilerVersion}</dd>
          <dt>
            <span id="userSelectable">User Selectable</span>
          </dt>
          <dd>{themesEntity.userSelectable ? 'true' : 'false'}</dd>
          <dt>
            <span id="hidden">Hidden</span>
          </dt>
          <dd>{themesEntity.hidden ? 'true' : 'false'}</dd>
          <dt>
            <span id="colorSchemeId">Color Scheme Id</span>
          </dt>
          <dd>{themesEntity.colorSchemeId}</dd>
          <dt>
            <span id="remoteThemeId">Remote Theme Id</span>
          </dt>
          <dd>{themesEntity.remoteThemeId}</dd>
          <dt>
            <span id="componentAvailable">Component Available</span>
          </dt>
          <dd>{themesEntity.componentAvailable ? 'true' : 'false'}</dd>
          <dt>
            <span id="enabled">Enabled</span>
          </dt>
          <dd>{themesEntity.enabled ? 'true' : 'false'}</dd>
          <dt>
            <span id="autoUpdate">Auto Update</span>
          </dt>
          <dd>{themesEntity.autoUpdate ? 'true' : 'false'}</dd>
          <dt>Javascript Caches</dt>
          <dd>{themesEntity.javascriptCaches ? themesEntity.javascriptCaches.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/themes" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/themes/${themesEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default ThemesDetail;
