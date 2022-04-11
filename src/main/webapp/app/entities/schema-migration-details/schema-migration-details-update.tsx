import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { ISchemaMigrationDetails } from 'app/shared/model/schema-migration-details.model';
import { getEntity, updateEntity, createEntity, reset } from './schema-migration-details.reducer';

export const SchemaMigrationDetailsUpdate = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const schemaMigrationDetailsEntity = useAppSelector(state => state.schemaMigrationDetails.entity);
  const loading = useAppSelector(state => state.schemaMigrationDetails.loading);
  const updating = useAppSelector(state => state.schemaMigrationDetails.updating);
  const updateSuccess = useAppSelector(state => state.schemaMigrationDetails.updateSuccess);
  const handleClose = () => {
    props.history.push('/schema-migration-details' + props.location.search);
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
      ...schemaMigrationDetailsEntity,
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
          ...schemaMigrationDetailsEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="discourseReactApp.schemaMigrationDetails.home.createOrEditLabel" data-cy="SchemaMigrationDetailsCreateUpdateHeading">
            Create or edit a SchemaMigrationDetails
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
                <ValidatedField name="id" required readOnly id="schema-migration-details-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="Version"
                id="schema-migration-details-version"
                name="version"
                data-cy="version"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField label="Name" id="schema-migration-details-name" name="name" data-cy="name" type="text" />
              <ValidatedField label="Hostname" id="schema-migration-details-hostname" name="hostname" data-cy="hostname" type="text" />
              <ValidatedField
                label="Git Version"
                id="schema-migration-details-gitVersion"
                name="gitVersion"
                data-cy="gitVersion"
                type="text"
              />
              <ValidatedField
                label="Rails Version"
                id="schema-migration-details-railsVersion"
                name="railsVersion"
                data-cy="railsVersion"
                type="text"
              />
              <ValidatedField label="Duration" id="schema-migration-details-duration" name="duration" data-cy="duration" type="text" />
              <ValidatedField label="Direction" id="schema-migration-details-direction" name="direction" data-cy="direction" type="text" />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/schema-migration-details" replace color="info">
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

export default SchemaMigrationDetailsUpdate;
