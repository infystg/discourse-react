import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './category-groups.reducer';

export const CategoryGroupsDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const categoryGroupsEntity = useAppSelector(state => state.categoryGroups.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="categoryGroupsDetailsHeading">CategoryGroups</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{categoryGroupsEntity.id}</dd>
          <dt>
            <span id="categoryId">Category Id</span>
          </dt>
          <dd>{categoryGroupsEntity.categoryId}</dd>
          <dt>
            <span id="groupId">Group Id</span>
          </dt>
          <dd>{categoryGroupsEntity.groupId}</dd>
          <dt>
            <span id="permissionType">Permission Type</span>
          </dt>
          <dd>{categoryGroupsEntity.permissionType}</dd>
        </dl>
        <Button tag={Link} to="/category-groups" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/category-groups/${categoryGroupsEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default CategoryGroupsDetail;
