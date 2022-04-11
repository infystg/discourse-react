import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IUserActions } from 'app/shared/model/user-actions.model';
import { getEntity, updateEntity, createEntity, reset } from './user-actions.reducer';

export const UserActionsUpdate = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const userActionsEntity = useAppSelector(state => state.userActions.entity);
  const loading = useAppSelector(state => state.userActions.loading);
  const updating = useAppSelector(state => state.userActions.updating);
  const updateSuccess = useAppSelector(state => state.userActions.updateSuccess);
  const handleClose = () => {
    props.history.push('/user-actions' + props.location.search);
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
      ...userActionsEntity,
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
          ...userActionsEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="discourseReactApp.userActions.home.createOrEditLabel" data-cy="UserActionsCreateUpdateHeading">
            Create or edit a UserActions
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ValidatedForm defaultValues={defaultValues()} onSubmit={saveEntity}>
              {!isNew ? <ValidatedField name="id" required readOnly id="user-actions-id" label="ID" validate={{ required: true }} /> : null}
              <ValidatedField
                label="Action Type"
                id="user-actions-actionType"
                name="actionType"
                data-cy="actionType"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="User Id"
                id="user-actions-userId"
                name="userId"
                data-cy="userId"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Target Topic Id"
                id="user-actions-targetTopicId"
                name="targetTopicId"
                data-cy="targetTopicId"
                type="text"
              />
              <ValidatedField
                label="Target Post Id"
                id="user-actions-targetPostId"
                name="targetPostId"
                data-cy="targetPostId"
                type="text"
              />
              <ValidatedField
                label="Target User Id"
                id="user-actions-targetUserId"
                name="targetUserId"
                data-cy="targetUserId"
                type="text"
              />
              <ValidatedField
                label="Acting User Id"
                id="user-actions-actingUserId"
                name="actingUserId"
                data-cy="actingUserId"
                type="text"
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/user-actions" replace color="info">
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

export default UserActionsUpdate;
