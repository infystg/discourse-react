import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IWebHookEvents } from 'app/shared/model/web-hook-events.model';
import { getEntity, updateEntity, createEntity, reset } from './web-hook-events.reducer';

export const WebHookEventsUpdate = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const webHookEventsEntity = useAppSelector(state => state.webHookEvents.entity);
  const loading = useAppSelector(state => state.webHookEvents.loading);
  const updating = useAppSelector(state => state.webHookEvents.updating);
  const updateSuccess = useAppSelector(state => state.webHookEvents.updateSuccess);
  const handleClose = () => {
    props.history.push('/web-hook-events' + props.location.search);
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
      ...webHookEventsEntity,
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
          ...webHookEventsEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="discourseReactApp.webHookEvents.home.createOrEditLabel" data-cy="WebHookEventsCreateUpdateHeading">
            Create or edit a WebHookEvents
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
                <ValidatedField name="id" required readOnly id="web-hook-events-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="Web Hook Id"
                id="web-hook-events-webHookId"
                name="webHookId"
                data-cy="webHookId"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField label="Headers" id="web-hook-events-headers" name="headers" data-cy="headers" type="text" />
              <ValidatedField label="Payload" id="web-hook-events-payload" name="payload" data-cy="payload" type="text" />
              <ValidatedField label="Status" id="web-hook-events-status" name="status" data-cy="status" type="text" />
              <ValidatedField
                label="Response Headers"
                id="web-hook-events-responseHeaders"
                name="responseHeaders"
                data-cy="responseHeaders"
                type="text"
              />
              <ValidatedField
                label="Response Body"
                id="web-hook-events-responseBody"
                name="responseBody"
                data-cy="responseBody"
                type="text"
              />
              <ValidatedField label="Duration" id="web-hook-events-duration" name="duration" data-cy="duration" type="text" />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/web-hook-events" replace color="info">
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

export default WebHookEventsUpdate;
