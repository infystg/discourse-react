import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './group-custom-fields.reducer';

export const GroupCustomFieldsDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const groupCustomFieldsEntity = useAppSelector(state => state.groupCustomFields.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="groupCustomFieldsDetailsHeading">GroupCustomFields</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{groupCustomFieldsEntity.id}</dd>
          <dt>
            <span id="groupId">Group Id</span>
          </dt>
          <dd>{groupCustomFieldsEntity.groupId}</dd>
          <dt>
            <span id="name">Name</span>
          </dt>
          <dd>{groupCustomFieldsEntity.name}</dd>
          <dt>
            <span id="value">Value</span>
          </dt>
          <dd>{groupCustomFieldsEntity.value}</dd>
        </dl>
        <Button tag={Link} to="/group-custom-fields" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/group-custom-fields/${groupCustomFieldsEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default GroupCustomFieldsDetail;
