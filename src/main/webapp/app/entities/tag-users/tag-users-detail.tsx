import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './tag-users.reducer';

export const TagUsersDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const tagUsersEntity = useAppSelector(state => state.tagUsers.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="tagUsersDetailsHeading">TagUsers</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{tagUsersEntity.id}</dd>
          <dt>
            <span id="tagId">Tag Id</span>
          </dt>
          <dd>{tagUsersEntity.tagId}</dd>
          <dt>
            <span id="userId">User Id</span>
          </dt>
          <dd>{tagUsersEntity.userId}</dd>
          <dt>
            <span id="notificationLevel">Notification Level</span>
          </dt>
          <dd>{tagUsersEntity.notificationLevel}</dd>
        </dl>
        <Button tag={Link} to="/tag-users" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/tag-users/${tagUsersEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default TagUsersDetail;
