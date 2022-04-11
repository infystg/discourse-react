import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './user-profile-views.reducer';

export const UserProfileViewsDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const userProfileViewsEntity = useAppSelector(state => state.userProfileViews.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="userProfileViewsDetailsHeading">UserProfileViews</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{userProfileViewsEntity.id}</dd>
          <dt>
            <span id="userProfileId">User Profile Id</span>
          </dt>
          <dd>{userProfileViewsEntity.userProfileId}</dd>
          <dt>
            <span id="viewedAt">Viewed At</span>
          </dt>
          <dd>
            {userProfileViewsEntity.viewedAt ? (
              <TextFormat value={userProfileViewsEntity.viewedAt} type="date" format={APP_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="ipAddress">Ip Address</span>
          </dt>
          <dd>{userProfileViewsEntity.ipAddress}</dd>
          <dt>
            <span id="userId">User Id</span>
          </dt>
          <dd>{userProfileViewsEntity.userId}</dd>
        </dl>
        <Button tag={Link} to="/user-profile-views" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/user-profile-views/${userProfileViewsEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default UserProfileViewsDetail;
