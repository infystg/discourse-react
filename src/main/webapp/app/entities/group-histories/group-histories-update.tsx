import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IGroupHistories } from 'app/shared/model/group-histories.model';
import { getEntity, updateEntity, createEntity, reset } from './group-histories.reducer';

export const GroupHistoriesUpdate = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const groupHistoriesEntity = useAppSelector(state => state.groupHistories.entity);
  const loading = useAppSelector(state => state.groupHistories.loading);
  const updating = useAppSelector(state => state.groupHistories.updating);
  const updateSuccess = useAppSelector(state => state.groupHistories.updateSuccess);
  const handleClose = () => {
    props.history.push('/group-histories' + props.location.search);
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
    values.updatedAt = convertDateTimeToServer(values.updatedAt);

    const entity = {
      ...groupHistoriesEntity,
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
          updatedAt: displayDefaultDateTime(),
        }
      : {
          ...groupHistoriesEntity,
          updatedAt: convertDateTimeFromServer(groupHistoriesEntity.updatedAt),
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="discourseReactApp.groupHistories.home.createOrEditLabel" data-cy="GroupHistoriesCreateUpdateHeading">
            Create or edit a GroupHistories
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
                <ValidatedField name="id" required readOnly id="group-histories-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="Group Id"
                id="group-histories-groupId"
                name="groupId"
                data-cy="groupId"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Acting User Id"
                id="group-histories-actingUserId"
                name="actingUserId"
                data-cy="actingUserId"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Target User Id"
                id="group-histories-targetUserId"
                name="targetUserId"
                data-cy="targetUserId"
                type="text"
              />
              <ValidatedField
                label="Action"
                id="group-histories-action"
                name="action"
                data-cy="action"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField label="Subject" id="group-histories-subject" name="subject" data-cy="subject" type="text" />
              <ValidatedField label="Prev Value" id="group-histories-prevValue" name="prevValue" data-cy="prevValue" type="text" />
              <ValidatedField label="New Value" id="group-histories-newValue" name="newValue" data-cy="newValue" type="text" />
              <ValidatedField
                label="Updated At"
                id="group-histories-updatedAt"
                name="updatedAt"
                data-cy="updatedAt"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/group-histories" replace color="info">
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

export default GroupHistoriesUpdate;
