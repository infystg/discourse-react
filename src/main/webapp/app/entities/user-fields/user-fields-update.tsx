import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IUserFields } from 'app/shared/model/user-fields.model';
import { getEntity, updateEntity, createEntity, reset } from './user-fields.reducer';

export const UserFieldsUpdate = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const userFieldsEntity = useAppSelector(state => state.userFields.entity);
  const loading = useAppSelector(state => state.userFields.loading);
  const updating = useAppSelector(state => state.userFields.updating);
  const updateSuccess = useAppSelector(state => state.userFields.updateSuccess);
  const handleClose = () => {
    props.history.push('/user-fields' + props.location.search);
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
      ...userFieldsEntity,
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
          ...userFieldsEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="discourseReactApp.userFields.home.createOrEditLabel" data-cy="UserFieldsCreateUpdateHeading">
            Create or edit a UserFields
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ValidatedForm defaultValues={defaultValues()} onSubmit={saveEntity}>
              {!isNew ? <ValidatedField name="id" required readOnly id="user-fields-id" label="ID" validate={{ required: true }} /> : null}
              <ValidatedField
                label="Name"
                id="user-fields-name"
                name="name"
                data-cy="name"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Field Type"
                id="user-fields-fieldType"
                name="fieldType"
                data-cy="fieldType"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField label="Editable" id="user-fields-editable" name="editable" data-cy="editable" check type="checkbox" />
              <ValidatedField
                label="Description"
                id="user-fields-description"
                name="description"
                data-cy="description"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField label="Required" id="user-fields-required" name="required" data-cy="required" check type="checkbox" />
              <ValidatedField
                label="Show On Profile"
                id="user-fields-showOnProfile"
                name="showOnProfile"
                data-cy="showOnProfile"
                check
                type="checkbox"
              />
              <ValidatedField label="Position" id="user-fields-position" name="position" data-cy="position" type="text" />
              <ValidatedField
                label="Show On User Card"
                id="user-fields-showOnUserCard"
                name="showOnUserCard"
                data-cy="showOnUserCard"
                check
                type="checkbox"
              />
              <ValidatedField label="External Name" id="user-fields-externalName" name="externalName" data-cy="externalName" type="text" />
              <ValidatedField label="External Type" id="user-fields-externalType" name="externalType" data-cy="externalType" type="text" />
              <ValidatedField label="Searchable" id="user-fields-searchable" name="searchable" data-cy="searchable" check type="checkbox" />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/user-fields" replace color="info">
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

export default UserFieldsUpdate;
