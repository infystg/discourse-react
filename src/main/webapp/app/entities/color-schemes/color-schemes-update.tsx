import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IColorSchemes } from 'app/shared/model/color-schemes.model';
import { getEntity, updateEntity, createEntity, reset } from './color-schemes.reducer';

export const ColorSchemesUpdate = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const colorSchemesEntity = useAppSelector(state => state.colorSchemes.entity);
  const loading = useAppSelector(state => state.colorSchemes.loading);
  const updating = useAppSelector(state => state.colorSchemes.updating);
  const updateSuccess = useAppSelector(state => state.colorSchemes.updateSuccess);
  const handleClose = () => {
    props.history.push('/color-schemes' + props.location.search);
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
      ...colorSchemesEntity,
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
          ...colorSchemesEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="discourseReactApp.colorSchemes.home.createOrEditLabel" data-cy="ColorSchemesCreateUpdateHeading">
            Create or edit a ColorSchemes
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
                <ValidatedField name="id" required readOnly id="color-schemes-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="Name"
                id="color-schemes-name"
                name="name"
                data-cy="name"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Version"
                id="color-schemes-version"
                name="version"
                data-cy="version"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField label="Via Wizard" id="color-schemes-viaWizard" name="viaWizard" data-cy="viaWizard" check type="checkbox" />
              <ValidatedField
                label="Base Scheme Id"
                id="color-schemes-baseSchemeId"
                name="baseSchemeId"
                data-cy="baseSchemeId"
                type="text"
              />
              <ValidatedField label="Theme Id" id="color-schemes-themeId" name="themeId" data-cy="themeId" type="text" />
              <ValidatedField
                label="User Selectable"
                id="color-schemes-userSelectable"
                name="userSelectable"
                data-cy="userSelectable"
                check
                type="checkbox"
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/color-schemes" replace color="info">
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

export default ColorSchemesUpdate;
