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
import { IThemeFields } from 'app/shared/model/theme-fields.model';
import { getEntity, updateEntity, createEntity, reset } from './theme-fields.reducer';

export const ThemeFieldsUpdate = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const javascriptCaches = useAppSelector(state => state.javascriptCaches.entities);
  const themeFieldsEntity = useAppSelector(state => state.themeFields.entity);
  const loading = useAppSelector(state => state.themeFields.loading);
  const updating = useAppSelector(state => state.themeFields.updating);
  const updateSuccess = useAppSelector(state => state.themeFields.updateSuccess);
  const handleClose = () => {
    props.history.push('/theme-fields' + props.location.search);
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
      ...themeFieldsEntity,
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
          ...themeFieldsEntity,
          javascriptCaches: themeFieldsEntity?.javascriptCaches?.id,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="discourseReactApp.themeFields.home.createOrEditLabel" data-cy="ThemeFieldsCreateUpdateHeading">
            Create or edit a ThemeFields
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ValidatedForm defaultValues={defaultValues()} onSubmit={saveEntity}>
              {!isNew ? <ValidatedField name="id" required readOnly id="theme-fields-id" label="ID" validate={{ required: true }} /> : null}
              <ValidatedField
                label="Theme Id"
                id="theme-fields-themeId"
                name="themeId"
                data-cy="themeId"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Target Id"
                id="theme-fields-targetId"
                name="targetId"
                data-cy="targetId"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Name"
                id="theme-fields-name"
                name="name"
                data-cy="name"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Value"
                id="theme-fields-value"
                name="value"
                data-cy="value"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField label="Value Baked" id="theme-fields-valueBaked" name="valueBaked" data-cy="valueBaked" type="text" />
              <ValidatedField
                label="Compiler Version"
                id="theme-fields-compilerVersion"
                name="compilerVersion"
                data-cy="compilerVersion"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField label="Error" id="theme-fields-error" name="error" data-cy="error" type="text" />
              <ValidatedField label="Upload Id" id="theme-fields-uploadId" name="uploadId" data-cy="uploadId" type="text" />
              <ValidatedField
                label="Type Id"
                id="theme-fields-typeId"
                name="typeId"
                data-cy="typeId"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                id="theme-fields-javascriptCaches"
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
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/theme-fields" replace color="info">
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

export default ThemeFieldsUpdate;
