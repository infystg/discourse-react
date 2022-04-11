import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IEmbeddableHosts } from 'app/shared/model/embeddable-hosts.model';
import { getEntity, updateEntity, createEntity, reset } from './embeddable-hosts.reducer';

export const EmbeddableHostsUpdate = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const embeddableHostsEntity = useAppSelector(state => state.embeddableHosts.entity);
  const loading = useAppSelector(state => state.embeddableHosts.loading);
  const updating = useAppSelector(state => state.embeddableHosts.updating);
  const updateSuccess = useAppSelector(state => state.embeddableHosts.updateSuccess);
  const handleClose = () => {
    props.history.push('/embeddable-hosts' + props.location.search);
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
      ...embeddableHostsEntity,
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
          ...embeddableHostsEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="discourseReactApp.embeddableHosts.home.createOrEditLabel" data-cy="EmbeddableHostsCreateUpdateHeading">
            Create or edit a EmbeddableHosts
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
                <ValidatedField name="id" required readOnly id="embeddable-hosts-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="Host"
                id="embeddable-hosts-host"
                name="host"
                data-cy="host"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Category Id"
                id="embeddable-hosts-categoryId"
                name="categoryId"
                data-cy="categoryId"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField label="Class Name" id="embeddable-hosts-className" name="className" data-cy="className" type="text" />
              <ValidatedField
                label="Allowed Paths"
                id="embeddable-hosts-allowedPaths"
                name="allowedPaths"
                data-cy="allowedPaths"
                type="text"
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/embeddable-hosts" replace color="info">
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

export default EmbeddableHostsUpdate;
