import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IIgnoredUsers } from 'app/shared/model/ignored-users.model';
import { getEntity, updateEntity, createEntity, reset } from './ignored-users.reducer';

export const IgnoredUsersUpdate = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const ignoredUsersEntity = useAppSelector(state => state.ignoredUsers.entity);
  const loading = useAppSelector(state => state.ignoredUsers.loading);
  const updating = useAppSelector(state => state.ignoredUsers.updating);
  const updateSuccess = useAppSelector(state => state.ignoredUsers.updateSuccess);
  const handleClose = () => {
    props.history.push('/ignored-users' + props.location.search);
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
    values.summarizedAt = convertDateTimeToServer(values.summarizedAt);
    values.expiringAt = convertDateTimeToServer(values.expiringAt);

    const entity = {
      ...ignoredUsersEntity,
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
          summarizedAt: displayDefaultDateTime(),
          expiringAt: displayDefaultDateTime(),
        }
      : {
          ...ignoredUsersEntity,
          summarizedAt: convertDateTimeFromServer(ignoredUsersEntity.summarizedAt),
          expiringAt: convertDateTimeFromServer(ignoredUsersEntity.expiringAt),
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="discourseReactApp.ignoredUsers.home.createOrEditLabel" data-cy="IgnoredUsersCreateUpdateHeading">
            Create or edit a IgnoredUsers
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
                <ValidatedField name="id" required readOnly id="ignored-users-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="User Id"
                id="ignored-users-userId"
                name="userId"
                data-cy="userId"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Ignored User Id"
                id="ignored-users-ignoredUserId"
                name="ignoredUserId"
                data-cy="ignoredUserId"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Summarized At"
                id="ignored-users-summarizedAt"
                name="summarizedAt"
                data-cy="summarizedAt"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
              />
              <ValidatedField
                label="Expiring At"
                id="ignored-users-expiringAt"
                name="expiringAt"
                data-cy="expiringAt"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/ignored-users" replace color="info">
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

export default IgnoredUsersUpdate;
