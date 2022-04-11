import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IScreenedEmails } from 'app/shared/model/screened-emails.model';
import { getEntity, updateEntity, createEntity, reset } from './screened-emails.reducer';

export const ScreenedEmailsUpdate = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const screenedEmailsEntity = useAppSelector(state => state.screenedEmails.entity);
  const loading = useAppSelector(state => state.screenedEmails.loading);
  const updating = useAppSelector(state => state.screenedEmails.updating);
  const updateSuccess = useAppSelector(state => state.screenedEmails.updateSuccess);
  const handleClose = () => {
    props.history.push('/screened-emails' + props.location.search);
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
    values.lastMatchAt = convertDateTimeToServer(values.lastMatchAt);

    const entity = {
      ...screenedEmailsEntity,
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
          lastMatchAt: displayDefaultDateTime(),
        }
      : {
          ...screenedEmailsEntity,
          lastMatchAt: convertDateTimeFromServer(screenedEmailsEntity.lastMatchAt),
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="discourseReactApp.screenedEmails.home.createOrEditLabel" data-cy="ScreenedEmailsCreateUpdateHeading">
            Create or edit a ScreenedEmails
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
                <ValidatedField name="id" required readOnly id="screened-emails-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="Email"
                id="screened-emails-email"
                name="email"
                data-cy="email"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Action Type"
                id="screened-emails-actionType"
                name="actionType"
                data-cy="actionType"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Match Count"
                id="screened-emails-matchCount"
                name="matchCount"
                data-cy="matchCount"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Last Match At"
                id="screened-emails-lastMatchAt"
                name="lastMatchAt"
                data-cy="lastMatchAt"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
              />
              <ValidatedField label="Ip Address" id="screened-emails-ipAddress" name="ipAddress" data-cy="ipAddress" type="text" />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/screened-emails" replace color="info">
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

export default ScreenedEmailsUpdate;
