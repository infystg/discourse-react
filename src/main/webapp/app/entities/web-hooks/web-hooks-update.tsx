import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IWebHooks } from 'app/shared/model/web-hooks.model';
import { getEntity, updateEntity, createEntity, reset } from './web-hooks.reducer';

export const WebHooksUpdate = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const webHooksEntity = useAppSelector(state => state.webHooks.entity);
  const loading = useAppSelector(state => state.webHooks.loading);
  const updating = useAppSelector(state => state.webHooks.updating);
  const updateSuccess = useAppSelector(state => state.webHooks.updateSuccess);
  const handleClose = () => {
    props.history.push('/web-hooks' + props.location.search);
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
      ...webHooksEntity,
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
          ...webHooksEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="discourseReactApp.webHooks.home.createOrEditLabel" data-cy="WebHooksCreateUpdateHeading">
            Create or edit a WebHooks
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ValidatedForm defaultValues={defaultValues()} onSubmit={saveEntity}>
              {!isNew ? <ValidatedField name="id" required readOnly id="web-hooks-id" label="ID" validate={{ required: true }} /> : null}
              <ValidatedField
                label="Payload Url"
                id="web-hooks-payloadUrl"
                name="payloadUrl"
                data-cy="payloadUrl"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Content Type"
                id="web-hooks-contentType"
                name="contentType"
                data-cy="contentType"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Last Delivery Status"
                id="web-hooks-lastDeliveryStatus"
                name="lastDeliveryStatus"
                data-cy="lastDeliveryStatus"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Status"
                id="web-hooks-status"
                name="status"
                data-cy="status"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField label="Secret" id="web-hooks-secret" name="secret" data-cy="secret" type="text" />
              <ValidatedField
                label="Wildcard Web Hook"
                id="web-hooks-wildcardWebHook"
                name="wildcardWebHook"
                data-cy="wildcardWebHook"
                check
                type="checkbox"
              />
              <ValidatedField
                label="Verify Certificate"
                id="web-hooks-verifyCertificate"
                name="verifyCertificate"
                data-cy="verifyCertificate"
                check
                type="checkbox"
              />
              <ValidatedField label="Active" id="web-hooks-active" name="active" data-cy="active" check type="checkbox" />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/web-hooks" replace color="info">
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

export default WebHooksUpdate;
