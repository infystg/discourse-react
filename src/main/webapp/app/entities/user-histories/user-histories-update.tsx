import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IUserHistories } from 'app/shared/model/user-histories.model';
import { getEntity, updateEntity, createEntity, reset } from './user-histories.reducer';

export const UserHistoriesUpdate = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const userHistoriesEntity = useAppSelector(state => state.userHistories.entity);
  const loading = useAppSelector(state => state.userHistories.loading);
  const updating = useAppSelector(state => state.userHistories.updating);
  const updateSuccess = useAppSelector(state => state.userHistories.updateSuccess);
  const handleClose = () => {
    props.history.push('/user-histories' + props.location.search);
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
    const entity = {
      ...userHistoriesEntity,
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
      ? {}
      : {
          ...userHistoriesEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="discourseReactApp.userHistories.home.createOrEditLabel" data-cy="UserHistoriesCreateUpdateHeading">
            Create or edit a UserHistories
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ValidatedForm defaultValues={defaultValues()} onSubmit={saveEntity}>
              {!isNew ? (
                <ValidatedField name="id" required readOnly id="user-histories-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="Action"
                id="user-histories-action"
                name="action"
                data-cy="action"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Acting User Id"
                id="user-histories-actingUserId"
                name="actingUserId"
                data-cy="actingUserId"
                type="text"
              />
              <ValidatedField
                label="Target User Id"
                id="user-histories-targetUserId"
                name="targetUserId"
                data-cy="targetUserId"
                type="text"
              />
              <ValidatedField label="Details" id="user-histories-details" name="details" data-cy="details" type="text" />
              <ValidatedField label="Context" id="user-histories-context" name="context" data-cy="context" type="text" />
              <ValidatedField label="Ip Address" id="user-histories-ipAddress" name="ipAddress" data-cy="ipAddress" type="text" />
              <ValidatedField label="Email" id="user-histories-email" name="email" data-cy="email" type="text" />
              <ValidatedField label="Subject" id="user-histories-subject" name="subject" data-cy="subject" type="text" />
              <ValidatedField
                label="Previous Value"
                id="user-histories-previousValue"
                name="previousValue"
                data-cy="previousValue"
                type="text"
              />
              <ValidatedField label="New Value" id="user-histories-newValue" name="newValue" data-cy="newValue" type="text" />
              <ValidatedField label="Topic Id" id="user-histories-topicId" name="topicId" data-cy="topicId" type="text" />
              <ValidatedField label="Admin Only" id="user-histories-adminOnly" name="adminOnly" data-cy="adminOnly" check type="checkbox" />
              <ValidatedField label="Post Id" id="user-histories-postId" name="postId" data-cy="postId" type="text" />
              <ValidatedField label="Custom Type" id="user-histories-customType" name="customType" data-cy="customType" type="text" />
              <ValidatedField label="Category Id" id="user-histories-categoryId" name="categoryId" data-cy="categoryId" type="text" />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/user-histories" replace color="info">
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

export default UserHistoriesUpdate;
