import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './user-field-options.reducer';

export const UserFieldOptionsDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const userFieldOptionsEntity = useAppSelector(state => state.userFieldOptions.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="userFieldOptionsDetailsHeading">UserFieldOptions</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{userFieldOptionsEntity.id}</dd>
          <dt>
            <span id="userFieldId">User Field Id</span>
          </dt>
          <dd>{userFieldOptionsEntity.userFieldId}</dd>
          <dt>
            <span id="value">Value</span>
          </dt>
          <dd>{userFieldOptionsEntity.value}</dd>
        </dl>
        <Button tag={Link} to="/user-field-options" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/user-field-options/${userFieldOptionsEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default UserFieldOptionsDetail;
