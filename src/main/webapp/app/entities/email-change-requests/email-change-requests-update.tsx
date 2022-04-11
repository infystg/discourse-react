import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IEmailChangeRequests } from 'app/shared/model/email-change-requests.model';
import { getEntity, updateEntity, createEntity, reset } from './email-change-requests.reducer';

export const EmailChangeRequestsUpdate = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const emailChangeRequestsEntity = useAppSelector(state => state.emailChangeRequests.entity);
  const loading = useAppSelector(state => state.emailChangeRequests.loading);
  const updating = useAppSelector(state => state.emailChangeRequests.updating);
  const updateSuccess = useAppSelector(state => state.emailChangeRequests.updateSuccess);
  const handleClose = () => {
    props.history.push('/email-change-requests' + props.location.search);
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
      ...emailChangeRequestsEntity,
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
          ...emailChangeRequestsEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="discourseReactApp.emailChangeRequests.home.createOrEditLabel" data-cy="EmailChangeRequestsCreateUpdateHeading">
            Create or edit a EmailChangeRequests
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
                <ValidatedField name="id" required readOnly id="email-change-requests-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="User Id"
                id="email-change-requests-userId"
                name="userId"
                data-cy="userId"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField label="Old Email" id="email-change-requests-oldEmail" name="oldEmail" data-cy="oldEmail" type="text" />
              <ValidatedField
                label="New Email"
                id="email-change-requests-newEmail"
                name="newEmail"
                data-cy="newEmail"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Old Email Token Id"
                id="email-change-requests-oldEmailTokenId"
                name="oldEmailTokenId"
                data-cy="oldEmailTokenId"
                type="text"
              />
              <ValidatedField
                label="New Email Token Id"
                id="email-change-requests-newEmailTokenId"
                name="newEmailTokenId"
                data-cy="newEmailTokenId"
                type="text"
              />
              <ValidatedField
                label="Change State"
                id="email-change-requests-changeState"
                name="changeState"
                data-cy="changeState"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Requested By User Id"
                id="email-change-requests-requestedByUserId"
                name="requestedByUserId"
                data-cy="requestedByUserId"
                type="text"
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/email-change-requests" replace color="info">
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

export default EmailChangeRequestsUpdate;
