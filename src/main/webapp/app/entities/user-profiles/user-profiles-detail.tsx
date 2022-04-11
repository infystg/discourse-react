import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './user-profiles.reducer';

export const UserProfilesDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const userProfilesEntity = useAppSelector(state => state.userProfiles.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="userProfilesDetailsHeading">UserProfiles</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{userProfilesEntity.id}</dd>
          <dt>
            <span id="userId">User Id</span>
          </dt>
          <dd>{userProfilesEntity.userId}</dd>
          <dt>
            <span id="location">Location</span>
          </dt>
          <dd>{userProfilesEntity.location}</dd>
          <dt>
            <span id="website">Website</span>
          </dt>
          <dd>{userProfilesEntity.website}</dd>
          <dt>
            <span id="bioRaw">Bio Raw</span>
          </dt>
          <dd>{userProfilesEntity.bioRaw}</dd>
          <dt>
            <span id="bioCooked">Bio Cooked</span>
          </dt>
          <dd>{userProfilesEntity.bioCooked}</dd>
          <dt>
            <span id="dismissedBannerKey">Dismissed Banner Key</span>
          </dt>
          <dd>{userProfilesEntity.dismissedBannerKey}</dd>
          <dt>
            <span id="bioCookedVersion">Bio Cooked Version</span>
          </dt>
          <dd>{userProfilesEntity.bioCookedVersion}</dd>
          <dt>
            <span id="badgeGrantedTitle">Badge Granted Title</span>
          </dt>
          <dd>{userProfilesEntity.badgeGrantedTitle ? 'true' : 'false'}</dd>
          <dt>
            <span id="views">Views</span>
          </dt>
          <dd>{userProfilesEntity.views}</dd>
          <dt>
            <span id="profileBackgroundUploadId">Profile Background Upload Id</span>
          </dt>
          <dd>{userProfilesEntity.profileBackgroundUploadId}</dd>
          <dt>
            <span id="cardBackgroundUploadId">Card Background Upload Id</span>
          </dt>
          <dd>{userProfilesEntity.cardBackgroundUploadId}</dd>
          <dt>
            <span id="grantedTitleBadgeId">Granted Title Badge Id</span>
          </dt>
          <dd>{userProfilesEntity.grantedTitleBadgeId}</dd>
          <dt>
            <span id="featuredTopicId">Featured Topic Id</span>
          </dt>
          <dd>{userProfilesEntity.featuredTopicId}</dd>
        </dl>
        <Button tag={Link} to="/user-profiles" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/user-profiles/${userProfilesEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default UserProfilesDetail;
