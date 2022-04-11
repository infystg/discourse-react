import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IWebHookEventTypesHooks } from 'app/shared/model/web-hook-event-types-hooks.model';
import { getEntity, updateEntity, createEntity, reset } from './web-hook-event-types-hooks.reducer';

export const WebHookEventTypesHooksUpdate = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const webHookEventTypesHooksEntity = useAppSelector(state => state.webHookEventTypesHooks.entity);
  const loading = useAppSelector(state => state.webHookEventTypesHooks.loading);
  const updating = useAppSelector(state => state.webHookEventTypesHooks.updating);
  const updateSuccess = useAppSelector(state => state.webHookEventTypesHooks.updateSuccess);
  const handleClose = () => {
    props.history.push('/web-hook-event-types-hooks' + props.location.search);
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
      ...webHookEventTypesHooksEntity,
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
          ...webHookEventTypesHooksEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="discourseReactApp.webHookEventTypesHooks.home.createOrEditLabel" data-cy="WebHookEventTypesHooksCreateUpdateHeading">
            Create or edit a WebHookEventTypesHooks
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
                <ValidatedField name="id" required readOnly id="web-hook-event-types-hooks-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="Web Hook Id"
                id="web-hook-event-types-hooks-webHookId"
                name="webHookId"
                data-cy="webHookId"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Web Hook Event Type Id"
                id="web-hook-event-types-hooks-webHookEventTypeId"
                name="webHookEventTypeId"
                data-cy="webHookEventTypeId"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/web-hook-event-types-hooks" replace color="info">
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

export default WebHookEventTypesHooksUpdate;
