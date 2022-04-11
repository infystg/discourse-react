import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IUserBadges } from 'app/shared/model/user-badges.model';
import { getEntity, updateEntity, createEntity, reset } from './user-badges.reducer';

export const UserBadgesUpdate = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const userBadgesEntity = useAppSelector(state => state.userBadges.entity);
  const loading = useAppSelector(state => state.userBadges.loading);
  const updating = useAppSelector(state => state.userBadges.updating);
  const updateSuccess = useAppSelector(state => state.userBadges.updateSuccess);
  const handleClose = () => {
    props.history.push('/user-badges' + props.location.search);
  };

  useEffect(() => {
    if (isNew) {
      dispatch(reset());
    } else {
      dispatch(getEntity(props.match.params.id));
    }
  }, []);

  useEffect(() => {
    if (updateSuccess) {
      handleClose();
    }
  }, [updateSuccess]);

  const saveEntity = values => {
    values.grantedAt = convertDateTimeToServer(values.grantedAt);

    const entity = {
      ...userBadgesEntity,
      ...values,
    };

    if (isNew) {
      dispatch(createEntity(entity));
    } else {
      dispatch(updateEntity(entity));
    }
  };

  const defaultValues = () =>
    isNew
      ? {
          grantedAt: displayDefaultDateTime(),
        }
      : {
          ...userBadgesEntity,
          grantedAt: convertDateTimeFromServer(userBadgesEntity.grantedAt),
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="discourseReactApp.userBadges.home.createOrEditLabel" data-cy="UserBadgesCreateUpdateHeading">
            Create or edit a UserBadges
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ValidatedForm defaultValues={defaultValues()} onSubmit={saveEntity}>
              {!isNew ? <ValidatedField name="id" required readOnly id="user-badges-id" label="ID" validate={{ required: true }} /> : null}
              <ValidatedField
                label="Badge Id"
                id="user-badges-badgeId"
                name="badgeId"
                data-cy="badgeId"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="User Id"
                id="user-badges-userId"
                name="userId"
                data-cy="userId"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Granted At"
                id="user-badges-grantedAt"
                name="grantedAt"
                data-cy="grantedAt"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Granted By Id"
                id="user-badges-grantedById"
                name="grantedById"
                data-cy="grantedById"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField label="Post Id" id="user-badges-postId" name="postId" data-cy="postId" type="text" />
              <ValidatedField
                label="Notification Id"
                id="user-badges-notificationId"
                name="notificationId"
                data-cy="notificationId"
                type="text"
              />
              <ValidatedField
                label="Seq"
                id="user-badges-seq"
                name="seq"
                data-cy="seq"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField label="Featured Rank" id="user-badges-featuredRank" name="featuredRank" data-cy="featuredRank" type="text" />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/user-badges" replace color="info">
                <FontAwesomeIcon icon="arrow-left" />
                &nbsp;
                <span className="d-none d-md-inline">Back</span>
              </Button>
              &nbsp;
              <Button color="primary" id="save-entity" data-cy="entityCreateSaveButton" type="submit" disabled={updating}>
                <FontAwesomeIcon icon="save" />
                &nbsp; Save
              </Button>
            </ValidatedForm>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default UserBadgesUpdate;
