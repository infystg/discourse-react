import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { ISchedulerStats } from 'app/shared/model/scheduler-stats.model';
import { getEntity, updateEntity, createEntity, reset } from './scheduler-stats.reducer';

export const SchedulerStatsUpdate = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const schedulerStatsEntity = useAppSelector(state => state.schedulerStats.entity);
  const loading = useAppSelector(state => state.schedulerStats.loading);
  const updating = useAppSelector(state => state.schedulerStats.updating);
  const updateSuccess = useAppSelector(state => state.schedulerStats.updateSuccess);
  const handleClose = () => {
    props.history.push('/scheduler-stats' + props.location.search);
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
    values.startedAt = convertDateTimeToServer(values.startedAt);

    const entity = {
      ...schedulerStatsEntity,
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
          startedAt: displayDefaultDateTime(),
        }
      : {
          ...schedulerStatsEntity,
          startedAt: convertDateTimeFromServer(schedulerStatsEntity.startedAt),
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="discourseReactApp.schedulerStats.home.createOrEditLabel" data-cy="SchedulerStatsCreateUpdateHeading">
            Create or edit a SchedulerStats
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
                <ValidatedField name="id" required readOnly id="scheduler-stats-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="Name"
                id="scheduler-stats-name"
                name="name"
                data-cy="name"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Hostname"
                id="scheduler-stats-hostname"
                name="hostname"
                data-cy="hostname"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Pid"
                id="scheduler-stats-pid"
                name="pid"
                data-cy="pid"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField label="Duration Ms" id="scheduler-stats-durationMs" name="durationMs" data-cy="durationMs" type="text" />
              <ValidatedField
                label="Live Slots Start"
                id="scheduler-stats-liveSlotsStart"
                name="liveSlotsStart"
                data-cy="liveSlotsStart"
                type="text"
              />
              <ValidatedField
                label="Live Slots Finish"
                id="scheduler-stats-liveSlotsFinish"
                name="liveSlotsFinish"
                data-cy="liveSlotsFinish"
                type="text"
              />
              <ValidatedField
                label="Started At"
                id="scheduler-stats-startedAt"
                name="startedAt"
                data-cy="startedAt"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField label="Success" id="scheduler-stats-success" name="success" data-cy="success" check type="checkbox" />
              <ValidatedField label="Error" id="scheduler-stats-error" name="error" data-cy="error" type="text" />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/scheduler-stats" replace color="info">
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

export default SchedulerStatsUpdate;
