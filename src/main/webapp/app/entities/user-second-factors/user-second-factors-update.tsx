import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IUserSecondFactors } from 'app/shared/model/user-second-factors.model';
import { getEntity, updateEntity, createEntity, reset } from './user-second-factors.reducer';

export const UserSecondFactorsUpdate = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const userSecondFactorsEntity = useAppSelector(state => state.userSecondFactors.entity);
  const loading = useAppSelector(state => state.userSecondFactors.loading);
  const updating = useAppSelector(state => state.userSecondFactors.updating);
  const updateSuccess = useAppSelector(state => state.userSecondFactors.updateSuccess);
  const handleClose = () => {
    props.history.push('/user-second-factors' + props.location.search);
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
    values.lastUsed = convertDateTimeToServer(values.lastUsed);

    const entity = {
      ...userSecondFactorsEntity,
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
          lastUsed: displayDefaultDateTime(),
        }
      : {
          ...userSecondFactorsEntity,
          lastUsed: convertDateTimeFromServer(userSecondFactorsEntity.lastUsed),
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="discourseReactApp.userSecondFactors.home.createOrEditLabel" data-cy="UserSecondFactorsCreateUpdateHeading">
            Create or edit a UserSecondFactors
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
                <ValidatedField name="id" required readOnly id="user-second-factors-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="User Id"
                id="user-second-factors-userId"
                name="userId"
                data-cy="userId"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Method"
                id="user-second-factors-method"
                name="method"
                data-cy="method"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Data"
                id="user-second-factors-data"
                name="data"
                data-cy="data"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField label="Enabled" id="user-second-factors-enabled" name="enabled" data-cy="enabled" check type="checkbox" />
              <ValidatedField
                label="Last Used"
                id="user-second-factors-lastUsed"
                name="lastUsed"
                data-cy="lastUsed"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
              />
              <ValidatedField label="Name" id="user-second-factors-name" name="name" data-cy="name" type="text" />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/user-second-factors" replace color="info">
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

export default UserSecondFactorsUpdate;
