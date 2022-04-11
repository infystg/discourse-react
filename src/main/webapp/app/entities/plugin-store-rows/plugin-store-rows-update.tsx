import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IPluginStoreRows } from 'app/shared/model/plugin-store-rows.model';
import { getEntity, updateEntity, createEntity, reset } from './plugin-store-rows.reducer';

export const PluginStoreRowsUpdate = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const pluginStoreRowsEntity = useAppSelector(state => state.pluginStoreRows.entity);
  const loading = useAppSelector(state => state.pluginStoreRows.loading);
  const updating = useAppSelector(state => state.pluginStoreRows.updating);
  const updateSuccess = useAppSelector(state => state.pluginStoreRows.updateSuccess);
  const handleClose = () => {
    props.history.push('/plugin-store-rows' + props.location.search);
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
      ...pluginStoreRowsEntity,
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
          ...pluginStoreRowsEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="discourseReactApp.pluginStoreRows.home.createOrEditLabel" data-cy="PluginStoreRowsCreateUpdateHeading">
            Create or edit a PluginStoreRows
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
                <ValidatedField name="id" required readOnly id="plugin-store-rows-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="Plugin Name"
                id="plugin-store-rows-pluginName"
                name="pluginName"
                data-cy="pluginName"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Key"
                id="plugin-store-rows-key"
                name="key"
                data-cy="key"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Type Name"
                id="plugin-store-rows-typeName"
                name="typeName"
                data-cy="typeName"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField label="Value" id="plugin-store-rows-value" name="value" data-cy="value" type="text" />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/plugin-store-rows" replace color="info">
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

export default PluginStoreRowsUpdate;
