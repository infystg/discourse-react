import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IPostActions } from 'app/shared/model/post-actions.model';
import { getEntity, updateEntity, createEntity, reset } from './post-actions.reducer';

export const PostActionsUpdate = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const postActionsEntity = useAppSelector(state => state.postActions.entity);
  const loading = useAppSelector(state => state.postActions.loading);
  const updating = useAppSelector(state => state.postActions.updating);
  const updateSuccess = useAppSelector(state => state.postActions.updateSuccess);
  const handleClose = () => {
    props.history.push('/post-actions' + props.location.search);
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
    values.deletedAt = convertDateTimeToServer(values.deletedAt);
    values.agreedAt = convertDateTimeToServer(values.agreedAt);
    values.deferredAt = convertDateTimeToServer(values.deferredAt);
    values.disagreedAt = convertDateTimeToServer(values.disagreedAt);

    const entity = {
      ...postActionsEntity,
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
          deletedAt: displayDefaultDateTime(),
          agreedAt: displayDefaultDateTime(),
          deferredAt: displayDefaultDateTime(),
          disagreedAt: displayDefaultDateTime(),
        }
      : {
          ...postActionsEntity,
          deletedAt: convertDateTimeFromServer(postActionsEntity.deletedAt),
          agreedAt: convertDateTimeFromServer(postActionsEntity.agreedAt),
          deferredAt: convertDateTimeFromServer(postActionsEntity.deferredAt),
          disagreedAt: convertDateTimeFromServer(postActionsEntity.disagreedAt),
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="discourseReactApp.postActions.home.createOrEditLabel" data-cy="PostActionsCreateUpdateHeading">
            Create or edit a PostActions
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ValidatedForm defaultValues={defaultValues()} onSubmit={saveEntity}>
              {!isNew ? <ValidatedField name="id" required readOnly id="post-actions-id" label="ID" validate={{ required: true }} /> : null}
              <ValidatedField
                label="Post Id"
                id="post-actions-postId"
                name="postId"
                data-cy="postId"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="User Id"
                id="post-actions-userId"
                name="userId"
                data-cy="userId"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Post Action Type Id"
                id="post-actions-postActionTypeId"
                name="postActionTypeId"
                data-cy="postActionTypeId"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Deleted At"
                id="post-actions-deletedAt"
                name="deletedAt"
                data-cy="deletedAt"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
              />
              <ValidatedField label="Deleted By Id" id="post-actions-deletedById" name="deletedById" data-cy="deletedById" type="text" />
              <ValidatedField
                label="Related Post Id"
                id="post-actions-relatedPostId"
                name="relatedPostId"
                data-cy="relatedPostId"
                type="text"
              />
              <ValidatedField
                label="Staff Took Action"
                id="post-actions-staffTookAction"
                name="staffTookAction"
                data-cy="staffTookAction"
                check
                type="checkbox"
              />
              <ValidatedField
                label="Deferred By Id"
                id="post-actions-deferredById"
                name="deferredById"
                data-cy="deferredById"
                type="text"
              />
              <ValidatedField
                label="Targets Topic"
                id="post-actions-targetsTopic"
                name="targetsTopic"
                data-cy="targetsTopic"
                check
                type="checkbox"
              />
              <ValidatedField
                label="Agreed At"
                id="post-actions-agreedAt"
                name="agreedAt"
                data-cy="agreedAt"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
              />
              <ValidatedField label="Agreed By Id" id="post-actions-agreedById" name="agreedById" data-cy="agreedById" type="text" />
              <ValidatedField
                label="Deferred At"
                id="post-actions-deferredAt"
                name="deferredAt"
                data-cy="deferredAt"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
              />
              <ValidatedField
                label="Disagreed At"
                id="post-actions-disagreedAt"
                name="disagreedAt"
                data-cy="disagreedAt"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
              />
              <ValidatedField
                label="Disagreed By Id"
                id="post-actions-disagreedById"
                name="disagreedById"
                data-cy="disagreedById"
                type="text"
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/post-actions" replace color="info">
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

export default PostActionsUpdate;
