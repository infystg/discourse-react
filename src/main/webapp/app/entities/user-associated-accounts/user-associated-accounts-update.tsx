import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IUserAssociatedAccounts } from 'app/shared/model/user-associated-accounts.model';
import { getEntity, updateEntity, createEntity, reset } from './user-associated-accounts.reducer';

export const UserAssociatedAccountsUpdate = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const userAssociatedAccountsEntity = useAppSelector(state => state.userAssociatedAccounts.entity);
  const loading = useAppSelector(state => state.userAssociatedAccounts.loading);
  const updating = useAppSelector(state => state.userAssociatedAccounts.updating);
  const updateSuccess = useAppSelector(state => state.userAssociatedAccounts.updateSuccess);
  const handleClose = () => {
    props.history.push('/user-associated-accounts' + props.location.search);
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
      ...userAssociatedAccountsEntity,
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
          ...userAssociatedAccountsEntity,
          lastUsed: convertDateTimeFromServer(userAssociatedAccountsEntity.lastUsed),
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="discourseReactApp.userAssociatedAccounts.home.createOrEditLabel" data-cy="UserAssociatedAccountsCreateUpdateHeading">
            Create or edit a UserAssociatedAccounts
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
                <ValidatedField name="id" required readOnly id="user-associated-accounts-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="Provider Name"
                id="user-associated-accounts-providerName"
                name="providerName"
                data-cy="providerName"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Provider Uid"
                id="user-associated-accounts-providerUid"
                name="providerUid"
                data-cy="providerUid"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField label="User Id" id="user-associated-accounts-userId" name="userId" data-cy="userId" type="text" />
              <ValidatedField
                label="Last Used"
                id="user-associated-accounts-lastUsed"
                name="lastUsed"
                data-cy="lastUsed"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Info"
                id="user-associated-accounts-info"
                name="info"
                data-cy="info"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Credentials"
                id="user-associated-accounts-credentials"
                name="credentials"
                data-cy="credentials"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Extra"
                id="user-associated-accounts-extra"
                name="extra"
                data-cy="extra"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/user-associated-accounts" replace color="info">
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

export default UserAssociatedAccountsUpdate;
