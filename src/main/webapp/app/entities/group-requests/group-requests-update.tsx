import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IGroupRequests } from 'app/shared/model/group-requests.model';
import { getEntity, updateEntity, createEntity, reset } from './group-requests.reducer';

export const GroupRequestsUpdate = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const groupRequestsEntity = useAppSelector(state => state.groupRequests.entity);
  const loading = useAppSelector(state => state.groupRequests.loading);
  const updating = useAppSelector(state => state.groupRequests.updating);
  const updateSuccess = useAppSelector(state => state.groupRequests.updateSuccess);
  const handleClose = () => {
    props.history.push('/group-requests' + props.location.search);
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
      ...groupRequestsEntity,
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
          ...groupRequestsEntity,
          updatedAt: convertDateTimeFromServer(groupRequestsEntity.updatedAt),
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="discourseReactApp.groupRequests.home.createOrEditLabel" data-cy="GroupRequestsCreateUpdateHeading">
            Create or edit a GroupRequests
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
                <ValidatedField name="id" required readOnly id="group-requests-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField label="Group Id" id="group-requests-groupId" name="groupId" data-cy="groupId" type="text" />
              <ValidatedField label="User Id" id="group-requests-userId" name="userId" data-cy="userId" type="text" />
              <ValidatedField label="Reason" id="group-requests-reason" name="reason" data-cy="reason" type="text" />
              <ValidatedField
                label="Updated At"
                id="group-requests-updatedAt"
                name="updatedAt"
                data-cy="updatedAt"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/group-requests" replace color="info">
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

export default GroupRequestsUpdate;
