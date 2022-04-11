import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './theme-settings.reducer';

export const ThemeSettingsDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const themeSettingsEntity = useAppSelector(state => state.themeSettings.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="themeSettingsDetailsHeading">ThemeSettings</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{themeSettingsEntity.id}</dd>
          <dt>
            <span id="name">Name</span>
          </dt>
          <dd>{themeSettingsEntity.name}</dd>
          <dt>
            <span id="dataType">Data Type</span>
          </dt>
          <dd>{themeSettingsEntity.dataType}</dd>
          <dt>
            <span id="value">Value</span>
          </dt>
          <dd>{themeSettingsEntity.value}</dd>
          <dt>
            <span id="themeId">Theme Id</span>
          </dt>
          <dd>{themeSettingsEntity.themeId}</dd>
        </dl>
        <Button tag={Link} to="/theme-settings" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/theme-settings/${themeSettingsEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default ThemeSettingsDetail;
