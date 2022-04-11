import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './user-badges.reducer';

export const UserBadgesDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const userBadgesEntity = useAppSelector(state => state.userBadges.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="userBadgesDetailsHeading">UserBadges</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{userBadgesEntity.id}</dd>
          <dt>
            <span id="badgeId">Badge Id</span>
          </dt>
          <dd>{userBadgesEntity.badgeId}</dd>
          <dt>
            <span id="userId">User Id</span>
          </dt>
          <dd>{userBadgesEntity.userId}</dd>
          <dt>
            <span id="grantedAt">Granted At</span>
          </dt>
          <dd>
            {userBadgesEntity.grantedAt ? <TextFormat value={userBadgesEntity.grantedAt} type="date" format={APP_DATE_FORMAT} /> : null}
          </dd>
          <dt>
            <span id="grantedById">Granted By Id</span>
          </dt>
          <dd>{userBadgesEntity.grantedById}</dd>
          <dt>
            <span id="postId">Post Id</span>
          </dt>
          <dd>{userBadgesEntity.postId}</dd>
          <dt>
            <span id="notificationId">Notification Id</span>
          </dt>
          <dd>{userBadgesEntity.notificationId}</dd>
          <dt>
            <span id="seq">Seq</span>
          </dt>
          <dd>{userBadgesEntity.seq}</dd>
          <dt>
            <span id="featuredRank">Featured Rank</span>
          </dt>
          <dd>{userBadgesEntity.featuredRank}</dd>
        </dl>
        <Button tag={Link} to="/user-badges" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/user-badges/${userBadgesEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default UserBadgesDetail;
