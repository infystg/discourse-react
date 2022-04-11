import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './group-category-notification-defaults.reducer';

export const GroupCategoryNotificationDefaultsDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const groupCategoryNotificationDefaultsEntity = useAppSelector(state => state.groupCategoryNotificationDefaults.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="groupCategoryNotificationDefaultsDetailsHeading">GroupCategoryNotificationDefaults</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{groupCategoryNotificationDefaultsEntity.id}</dd>
          <dt>
            <span id="groupId">Group Id</span>
          </dt>
          <dd>{groupCategoryNotificationDefaultsEntity.groupId}</dd>
          <dt>
            <span id="categoryId">Category Id</span>
          </dt>
          <dd>{groupCategoryNotificationDefaultsEntity.categoryId}</dd>
          <dt>
            <span id="notificationLevel">Notification Level</span>
          </dt>
          <dd>{groupCategoryNotificationDefaultsEntity.notificationLevel}</dd>
        </dl>
        <Button tag={Link} to="/group-category-notification-defaults" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button
          tag={Link}
          to={`/group-category-notification-defaults/${groupCategoryNotificationDefaultsEntity.id}/edit`}
          replace
          color="primary"
        >
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default GroupCategoryNotificationDefaultsDetail;
