import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IDoNotDisturbTimings } from 'app/shared/model/do-not-disturb-timings.model';
import { getEntity, updateEntity, createEntity, reset } from './do-not-disturb-timings.reducer';

export const DoNotDisturbTimingsUpdate = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const doNotDisturbTimingsEntity = useAppSelector(state => state.doNotDisturbTimings.entity);
  const loading = useAppSelector(state => state.doNotDisturbTimings.loading);
  const updating = useAppSelector(state => state.doNotDisturbTimings.updating);
  const updateSuccess = useAppSelector(state => state.doNotDisturbTimings.updateSuccess);
  const handleClose = () => {
    props.history.push('/do-not-disturb-timings' + props.location.search);
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
    values.startsAt = convertDateTimeToServer(values.startsAt);
    values.endsAt = convertDateTimeToServer(values.endsAt);

    const entity = {
      ...doNotDisturbTimingsEntity,
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
          startsAt: displayDefaultDateTime(),
          endsAt: displayDefaultDateTime(),
        }
      : {
          ...doNotDisturbTimingsEntity,
          startsAt: convertDateTimeFromServer(doNotDisturbTimingsEntity.startsAt),
          endsAt: convertDateTimeFromServer(doNotDisturbTimingsEntity.endsAt),
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="discourseReactApp.doNotDisturbTimings.home.createOrEditLabel" data-cy="DoNotDisturbTimingsCreateUpdateHeading">
            Create or edit a DoNotDisturbTimings
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
                <ValidatedField name="id" required readOnly id="do-not-disturb-timings-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="User Id"
                id="do-not-disturb-timings-userId"
                name="userId"
                data-cy="userId"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Starts At"
                id="do-not-disturb-timings-startsAt"
                name="startsAt"
                data-cy="startsAt"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Ends At"
                id="do-not-disturb-timings-endsAt"
                name="endsAt"
                data-cy="endsAt"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Scheduled"
                id="do-not-disturb-timings-scheduled"
                name="scheduled"
                data-cy="scheduled"
                check
                type="checkbox"
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/do-not-disturb-timings" replace color="info">
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

export default DoNotDisturbTimingsUpdate;
