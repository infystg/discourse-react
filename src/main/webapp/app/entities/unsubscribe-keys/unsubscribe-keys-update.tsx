import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IUnsubscribeKeys } from 'app/shared/model/unsubscribe-keys.model';
import { getEntity, updateEntity, createEntity, reset } from './unsubscribe-keys.reducer';

export const UnsubscribeKeysUpdate = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const unsubscribeKeysEntity = useAppSelector(state => state.unsubscribeKeys.entity);
  const loading = useAppSelector(state => state.unsubscribeKeys.loading);
  const updating = useAppSelector(state => state.unsubscribeKeys.updating);
  const updateSuccess = useAppSelector(state => state.unsubscribeKeys.updateSuccess);
  const handleClose = () => {
    props.history.push('/unsubscribe-keys' + props.location.search);
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
      ...unsubscribeKeysEntity,
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
          ...unsubscribeKeysEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="discourseReactApp.unsubscribeKeys.home.createOrEditLabel" data-cy="UnsubscribeKeysCreateUpdateHeading">
            Create or edit a UnsubscribeKeys
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
                <ValidatedField name="id" required readOnly id="unsubscribe-keys-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="Key"
                id="unsubscribe-keys-key"
                name="key"
                data-cy="key"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="User Id"
                id="unsubscribe-keys-userId"
                name="userId"
                data-cy="userId"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Unsubscribe Key Type"
                id="unsubscribe-keys-unsubscribeKeyType"
                name="unsubscribeKeyType"
                data-cy="unsubscribeKeyType"
                type="text"
              />
              <ValidatedField label="Topic Id" id="unsubscribe-keys-topicId" name="topicId" data-cy="topicId" type="text" />
              <ValidatedField label="Post Id" id="unsubscribe-keys-postId" name="postId" data-cy="postId" type="text" />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/unsubscribe-keys" replace color="info">
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

export default UnsubscribeKeysUpdate;
