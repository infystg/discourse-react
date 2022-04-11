import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './color-schemes.reducer';

export const ColorSchemesDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const colorSchemesEntity = useAppSelector(state => state.colorSchemes.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="colorSchemesDetailsHeading">ColorSchemes</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{colorSchemesEntity.id}</dd>
          <dt>
            <span id="name">Name</span>
          </dt>
          <dd>{colorSchemesEntity.name}</dd>
          <dt>
            <span id="version">Version</span>
          </dt>
          <dd>{colorSchemesEntity.version}</dd>
          <dt>
            <span id="viaWizard">Via Wizard</span>
          </dt>
          <dd>{colorSchemesEntity.viaWizard ? 'true' : 'false'}</dd>
          <dt>
            <span id="baseSchemeId">Base Scheme Id</span>
          </dt>
          <dd>{colorSchemesEntity.baseSchemeId}</dd>
          <dt>
            <span id="themeId">Theme Id</span>
          </dt>
          <dd>{colorSchemesEntity.themeId}</dd>
          <dt>
            <span id="userSelectable">User Selectable</span>
          </dt>
          <dd>{colorSchemesEntity.userSelectable ? 'true' : 'false'}</dd>
        </dl>
        <Button tag={Link} to="/color-schemes" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/color-schemes/${colorSchemesEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default ColorSchemesDetail;
