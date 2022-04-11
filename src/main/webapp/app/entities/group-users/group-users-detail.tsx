import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './group-users.reducer';

export const GroupUsersDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const groupUsersEntity = useAppSelector(state => state.groupUsers.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="groupUsersDetailsHeading">GroupUsers</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{groupUsersEntity.id}</dd>
          <dt>
            <span id="groupId">Group Id</span>
          </dt>
          <dd>{groupUsersEntity.groupId}</dd>
          <dt>
            <span id="userId">User Id</span>
          </dt>
          <dd>{groupUsersEntity.userId}</dd>
          <dt>
            <span id="owner">Owner</span>
          </dt>
          <dd>{groupUsersEntity.owner ? 'true' : 'false'}</dd>
          <dt>
            <span id="notificationLevel">Notification Level</span>
          </dt>
          <dd>{groupUsersEntity.notificationLevel}</dd>
          <dt>
            <span id="firstUnreadPmAt">First Unread Pm At</span>
          </dt>
          <dd>
            {groupUsersEntity.firstUnreadPmAt ? (
              <TextFormat value={groupUsersEntity.firstUnreadPmAt} type="date" format={APP_DATE_FORMAT} />
            ) : null}
          </dd>
        </dl>
        <Button tag={Link} to="/group-users" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/group-users/${groupUsersEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default GroupUsersDetail;
