import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './category-custom-fields.reducer';

export const CategoryCustomFieldsDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const categoryCustomFieldsEntity = useAppSelector(state => state.categoryCustomFields.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="categoryCustomFieldsDetailsHeading">CategoryCustomFields</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{categoryCustomFieldsEntity.id}</dd>
          <dt>
            <span id="categoryId">Category Id</span>
          </dt>
          <dd>{categoryCustomFieldsEntity.categoryId}</dd>
          <dt>
            <span id="name">Name</span>
          </dt>
          <dd>{categoryCustomFieldsEntity.name}</dd>
          <dt>
            <span id="value">Value</span>
          </dt>
          <dd>{categoryCustomFieldsEntity.value}</dd>
        </dl>
        <Button tag={Link} to="/category-custom-fields" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/category-custom-fields/${categoryCustomFieldsEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default CategoryCustomFieldsDetail;
