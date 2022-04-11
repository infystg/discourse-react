import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './category-users.reducer';

export const CategoryUsersDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const categoryUsersEntity = useAppSelector(state => state.categoryUsers.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="categoryUsersDetailsHeading">CategoryUsers</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{categoryUsersEntity.id}</dd>
          <dt>
            <span id="categoryId">Category Id</span>
          </dt>
          <dd>{categoryUsersEntity.categoryId}</dd>
          <dt>
            <span id="userId">User Id</span>
          </dt>
          <dd>{categoryUsersEntity.userId}</dd>
          <dt>
            <span id="notificationLevel">Notification Level</span>
          </dt>
          <dd>{categoryUsersEntity.notificationLevel}</dd>
          <dt>
            <span id="lastSeenAt">Last Seen At</span>
          </dt>
          <dd>
            {categoryUsersEntity.lastSeenAt ? (
              <TextFormat value={categoryUsersEntity.lastSeenAt} type="date" format={APP_DATE_FORMAT} />
            ) : null}
          </dd>
        </dl>
        <Button tag={Link} to="/category-users" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/category-users/${categoryUsersEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default CategoryUsersDetail;
