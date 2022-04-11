import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './color-scheme-colors.reducer';

export const ColorSchemeColorsDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const colorSchemeColorsEntity = useAppSelector(state => state.colorSchemeColors.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="colorSchemeColorsDetailsHeading">ColorSchemeColors</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{colorSchemeColorsEntity.id}</dd>
          <dt>
            <span id="name">Name</span>
          </dt>
          <dd>{colorSchemeColorsEntity.name}</dd>
          <dt>
            <span id="hex">Hex</span>
          </dt>
          <dd>{colorSchemeColorsEntity.hex}</dd>
          <dt>
            <span id="colorSchemeId">Color Scheme Id</span>
          </dt>
          <dd>{colorSchemeColorsEntity.colorSchemeId}</dd>
        </dl>
        <Button tag={Link} to="/color-scheme-colors" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/color-scheme-colors/${colorSchemeColorsEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default ColorSchemeColorsDetail;
