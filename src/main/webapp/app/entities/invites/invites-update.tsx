import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IInvites } from 'app/shared/model/invites.model';
import { getEntity, updateEntity, createEntity, reset } from './invites.reducer';

export const InvitesUpdate = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const invitesEntity = useAppSelector(state => state.invites.entity);
  const loading = useAppSelector(state => state.invites.loading);
  const updating = useAppSelector(state => state.invites.updating);
  const updateSuccess = useAppSelector(state => state.invites.updateSuccess);
  const handleClose = () => {
    props.history.push('/invites' + props.location.search);
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
    values.redeemedAt = convertDateTimeToServer(values.redeemedAt);
    values.deletedAt = convertDateTimeToServer(values.deletedAt);
    values.invalidatedAt = convertDateTimeToServer(values.invalidatedAt);
    values.expiresAt = convertDateTimeToServer(values.expiresAt);

    const entity = {
      ...invitesEntity,
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
          redeemedAt: displayDefaultDateTime(),
          deletedAt: displayDefaultDateTime(),
          invalidatedAt: displayDefaultDateTime(),
          expiresAt: displayDefaultDateTime(),
        }
      : {
          ...invitesEntity,
          redeemedAt: convertDateTimeFromServer(invitesEntity.redeemedAt),
          deletedAt: convertDateTimeFromServer(invitesEntity.deletedAt),
          invalidatedAt: convertDateTimeFromServer(invitesEntity.invalidatedAt),
          expiresAt: convertDateTimeFromServer(invitesEntity.expiresAt),
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="discourseReactApp.invites.home.createOrEditLabel" data-cy="InvitesCreateUpdateHeading">
            Create or edit a Invites
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ValidatedForm defaultValues={defaultValues()} onSubmit={saveEntity}>
              {!isNew ? <ValidatedField name="id" required readOnly id="invites-id" label="ID" validate={{ required: true }} /> : null}
              <ValidatedField
                label="Invite Key"
                id="invites-inviteKey"
                name="inviteKey"
                data-cy="inviteKey"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField label="Email" id="invites-email" name="email" data-cy="email" type="text" />
              <ValidatedField
                label="Invited By Id"
                id="invites-invitedById"
                name="invitedById"
                data-cy="invitedById"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField label="User Id" id="invites-userId" name="userId" data-cy="userId" type="text" />
              <ValidatedField
                label="Redeemed At"
                id="invites-redeemedAt"
                name="redeemedAt"
                data-cy="redeemedAt"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
              />
              <ValidatedField
                label="Deleted At"
                id="invites-deletedAt"
                name="deletedAt"
                data-cy="deletedAt"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
              />
              <ValidatedField label="Deleted By Id" id="invites-deletedById" name="deletedById" data-cy="deletedById" type="text" />
              <ValidatedField
                label="Invalidated At"
                id="invites-invalidatedAt"
                name="invalidatedAt"
                data-cy="invalidatedAt"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
              />
              <ValidatedField label="Moderator" id="invites-moderator" name="moderator" data-cy="moderator" check type="checkbox" />
              <ValidatedField label="Custom Message" id="invites-customMessage" name="customMessage" data-cy="customMessage" type="text" />
              <ValidatedField label="Emailed Status" id="invites-emailedStatus" name="emailedStatus" data-cy="emailedStatus" type="text" />
              <ValidatedField
                label="Max Redemptions Allowed"
                id="invites-maxRedemptionsAllowed"
                name="maxRedemptionsAllowed"
                data-cy="maxRedemptionsAllowed"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Redemption Count"
                id="invites-redemptionCount"
                name="redemptionCount"
                data-cy="redemptionCount"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Expires At"
                id="invites-expiresAt"
                name="expiresAt"
                data-cy="expiresAt"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField label="Email Token" id="invites-emailToken" name="emailToken" data-cy="emailToken" type="text" />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/invites" replace color="info">
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

export default InvitesUpdate;
