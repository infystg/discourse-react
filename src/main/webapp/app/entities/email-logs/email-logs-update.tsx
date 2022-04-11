import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IEmailLogs } from 'app/shared/model/email-logs.model';
import { getEntity, updateEntity, createEntity, reset } from './email-logs.reducer';

export const EmailLogsUpdate = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const emailLogsEntity = useAppSelector(state => state.emailLogs.entity);
  const loading = useAppSelector(state => state.emailLogs.loading);
  const updating = useAppSelector(state => state.emailLogs.updating);
  const updateSuccess = useAppSelector(state => state.emailLogs.updateSuccess);
  const handleClose = () => {
    props.history.push('/email-logs' + props.location.search);
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
      ...emailLogsEntity,
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
          ...emailLogsEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="discourseReactApp.emailLogs.home.createOrEditLabel" data-cy="EmailLogsCreateUpdateHeading">
            Create or edit a EmailLogs
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ValidatedForm defaultValues={defaultValues()} onSubmit={saveEntity}>
              {!isNew ? <ValidatedField name="id" required readOnly id="email-logs-id" label="ID" validate={{ required: true }} /> : null}
              <ValidatedField
                label="To Address"
                id="email-logs-toAddress"
                name="toAddress"
                data-cy="toAddress"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Email Type"
                id="email-logs-emailType"
                name="emailType"
                data-cy="emailType"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField label="User Id" id="email-logs-userId" name="userId" data-cy="userId" type="text" />
              <ValidatedField label="Post Id" id="email-logs-postId" name="postId" data-cy="postId" type="text" />
              <ValidatedField label="Bounce Key" id="email-logs-bounceKey" name="bounceKey" data-cy="bounceKey" type="text" />
              <ValidatedField label="Bounced" id="email-logs-bounced" name="bounced" data-cy="bounced" check type="checkbox" />
              <ValidatedField label="Message Id" id="email-logs-messageId" name="messageId" data-cy="messageId" type="text" />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/email-logs" replace color="info">
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

export default EmailLogsUpdate;
