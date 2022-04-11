import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IJavascriptCaches } from 'app/shared/model/javascript-caches.model';
import { getEntities as getJavascriptCaches } from 'app/entities/javascript-caches/javascript-caches.reducer';
import { IThemes } from 'app/shared/model/themes.model';
import { getEntity, updateEntity, createEntity, reset } from './themes.reducer';

export const ThemesUpdate = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const javascriptCaches = useAppSelector(state => state.javascriptCaches.entities);
  const themesEntity = useAppSelector(state => state.themes.entity);
  const loading = useAppSelector(state => state.themes.loading);
  const updating = useAppSelector(state => state.themes.updating);
  const updateSuccess = useAppSelector(state => state.themes.updateSuccess);
  const handleClose = () => {
    props.history.push('/themes' + props.location.search);
  };

  useEffect(() => {
    if (isNew) {
      dispatch(reset());
    } else {
      dispatch(getEntity(props.match.params.id));
    }

    dispatch(getJavascriptCaches({}));
  }, []);

  useEffect(() => {
    if (updateSuccess) {
      handleClose();
    }
  }, [updateSuccess]);

  const saveEntity = values => {
    const entity = {
      ...themesEntity,
      ...values,
      javascriptCaches: javascriptCaches.find(it => it.id.toString() === values.javascriptCaches.toString()),
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
          ...themesEntity,
          javascriptCaches: themesEntity?.javascriptCaches?.id,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="discourseReactApp.themes.home.createOrEditLabel" data-cy="ThemesCreateUpdateHeading">
            Create or edit a Themes
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ValidatedForm defaultValues={defaultValues()} onSubmit={saveEntity}>
              {!isNew ? <ValidatedField name="id" required readOnly id="themes-id" label="ID" validate={{ required: true }} /> : null}
              <ValidatedField
                label="Name"
                id="themes-name"
                name="name"
                data-cy="name"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="User Id"
                id="themes-userId"
                name="userId"
                data-cy="userId"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Compiler Version"
                id="themes-compilerVersion"
                name="compilerVersion"
                data-cy="compilerVersion"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="User Selectable"
                id="themes-userSelectable"
                name="userSelectable"
                data-cy="userSelectable"
                check
                type="checkbox"
              />
              <ValidatedField label="Hidden" id="themes-hidden" name="hidden" data-cy="hidden" check type="checkbox" />
              <ValidatedField label="Color Scheme Id" id="themes-colorSchemeId" name="colorSchemeId" data-cy="colorSchemeId" type="text" />
              <ValidatedField label="Remote Theme Id" id="themes-remoteThemeId" name="remoteThemeId" data-cy="remoteThemeId" type="text" />
              <ValidatedField
                label="Component Available"
                id="themes-componentAvailable"
                name="componentAvailable"
                data-cy="componentAvailable"
                check
                type="checkbox"
              />
              <ValidatedField label="Enabled" id="themes-enabled" name="enabled" data-cy="enabled" check type="checkbox" />
              <ValidatedField label="Auto Update" id="themes-autoUpdate" name="autoUpdate" data-cy="autoUpdate" check type="checkbox" />
              <ValidatedField
                id="themes-javascriptCaches"
                name="javascriptCaches"
                data-cy="javascriptCaches"
                label="Javascript Caches"
                type="select"
              >
                <option value="" key="0" />
                {javascriptCaches
                  ? javascriptCaches.map(otherEntity => (
                      <option value={otherEntity.id} key={otherEntity.id}>
                        {otherEntity.id}
                      </option>
                    ))
                  : null}
              </ValidatedField>
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/themes" replace color="info">
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

export default ThemesUpdate;
