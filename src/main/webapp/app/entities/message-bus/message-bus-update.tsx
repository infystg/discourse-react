import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IMessageBus } from 'app/shared/model/message-bus.model';
import { getEntity, updateEntity, createEntity, reset } from './message-bus.reducer';

export const MessageBusUpdate = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const messageBusEntity = useAppSelector(state => state.messageBus.entity);
  const loading = useAppSelector(state => state.messageBus.loading);
  const updating = useAppSelector(state => state.messageBus.updating);
  const updateSuccess = useAppSelector(state => state.messageBus.updateSuccess);
  const handleClose = () => {
    props.history.push('/message-bus' + props.location.search);
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
      ...messageBusEntity,
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
          ...messageBusEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="discourseReactApp.messageBus.home.createOrEditLabel" data-cy="MessageBusCreateUpdateHeading">
            Create or edit a MessageBus
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ValidatedForm defaultValues={defaultValues()} onSubmit={saveEntity}>
              {!isNew ? <ValidatedField name="id" required readOnly id="message-bus-id" label="ID" validate={{ required: true }} /> : null}
              <ValidatedField label="Name" id="message-bus-name" name="name" data-cy="name" type="text" />
              <ValidatedField label="Context" id="message-bus-context" name="context" data-cy="context" type="text" />
              <ValidatedField label="Data" id="message-bus-data" name="data" data-cy="data" type="text" />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/message-bus" replace color="info">
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

export default MessageBusUpdate;
