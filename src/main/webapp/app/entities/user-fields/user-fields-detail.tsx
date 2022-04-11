import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './user-fields.reducer';

export const UserFieldsDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const userFieldsEntity = useAppSelector(state => state.userFields.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="userFieldsDetailsHeading">UserFields</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{userFieldsEntity.id}</dd>
          <dt>
            <span id="name">Name</span>
          </dt>
          <dd>{userFieldsEntity.name}</dd>
          <dt>
            <span id="fieldType">Field Type</span>
          </dt>
          <dd>{userFieldsEntity.fieldType}</dd>
          <dt>
            <span id="editable">Editable</span>
          </dt>
          <dd>{userFieldsEntity.editable ? 'true' : 'false'}</dd>
          <dt>
            <span id="description">Description</span>
          </dt>
          <dd>{userFieldsEntity.description}</dd>
          <dt>
            <span id="required">Required</span>
          </dt>
          <dd>{userFieldsEntity.required ? 'true' : 'false'}</dd>
          <dt>
            <span id="showOnProfile">Show On Profile</span>
          </dt>
          <dd>{userFieldsEntity.showOnProfile ? 'true' : 'false'}</dd>
          <dt>
            <span id="position">Position</span>
          </dt>
          <dd>{userFieldsEntity.position}</dd>
          <dt>
            <span id="showOnUserCard">Show On User Card</span>
          </dt>
          <dd>{userFieldsEntity.showOnUserCard ? 'true' : 'false'}</dd>
          <dt>
            <span id="externalName">External Name</span>
          </dt>
          <dd>{userFieldsEntity.externalName}</dd>
          <dt>
            <span id="externalType">External Type</span>
          </dt>
          <dd>{userFieldsEntity.externalType}</dd>
          <dt>
            <span id="searchable">Searchable</span>
          </dt>
          <dd>{userFieldsEntity.searchable ? 'true' : 'false'}</dd>
        </dl>
        <Button tag={Link} to="/user-fields" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/user-fields/${userFieldsEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default UserFieldsDetail;
