import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { ISkippedEmailLogs } from 'app/shared/model/skipped-email-logs.model';
import { getEntity, updateEntity, createEntity, reset } from './skipped-email-logs.reducer';

export const SkippedEmailLogsUpdate = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const skippedEmailLogsEntity = useAppSelector(state => state.skippedEmailLogs.entity);
  const loading = useAppSelector(state => state.skippedEmailLogs.loading);
  const updating = useAppSelector(state => state.skippedEmailLogs.updating);
  const updateSuccess = useAppSelector(state => state.skippedEmailLogs.updateSuccess);
  const handleClose = () => {
    props.history.push('/skipped-email-logs' + props.location.search);
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
      ...skippedEmailLogsEntity,
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
          ...skippedEmailLogsEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="discourseReactApp.skippedEmailLogs.home.createOrEditLabel" data-cy="SkippedEmailLogsCreateUpdateHeading">
            Create or edit a SkippedEmailLogs
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
                <ValidatedField name="id" required readOnly id="skipped-email-logs-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="Email Type"
                id="skipped-email-logs-emailType"
                name="emailType"
                data-cy="emailType"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="To Address"
                id="skipped-email-logs-toAddress"
                name="toAddress"
                data-cy="toAddress"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField label="User Id" id="skipped-email-logs-userId" name="userId" data-cy="userId" type="text" />
              <ValidatedField label="Post Id" id="skipped-email-logs-postId" name="postId" data-cy="postId" type="text" />
              <ValidatedField
                label="Reason Type"
                id="skipped-email-logs-reasonType"
                name="reasonType"
                data-cy="reasonType"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Custom Reason"
                id="skipped-email-logs-customReason"
                name="customReason"
                data-cy="customReason"
                type="text"
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/skipped-email-logs" replace color="info">
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

export default SkippedEmailLogsUpdate;
