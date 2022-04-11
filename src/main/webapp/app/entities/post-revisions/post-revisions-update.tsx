import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IPostRevisions } from 'app/shared/model/post-revisions.model';
import { getEntity, updateEntity, createEntity, reset } from './post-revisions.reducer';

export const PostRevisionsUpdate = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const postRevisionsEntity = useAppSelector(state => state.postRevisions.entity);
  const loading = useAppSelector(state => state.postRevisions.loading);
  const updating = useAppSelector(state => state.postRevisions.updating);
  const updateSuccess = useAppSelector(state => state.postRevisions.updateSuccess);
  const handleClose = () => {
    props.history.push('/post-revisions' + props.location.search);
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
      ...postRevisionsEntity,
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
          ...postRevisionsEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="discourseReactApp.postRevisions.home.createOrEditLabel" data-cy="PostRevisionsCreateUpdateHeading">
            Create or edit a PostRevisions
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
                <ValidatedField name="id" required readOnly id="post-revisions-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField label="User Id" id="post-revisions-userId" name="userId" data-cy="userId" type="text" />
              <ValidatedField label="Post Id" id="post-revisions-postId" name="postId" data-cy="postId" type="text" />
              <ValidatedField
                label="Modifications"
                id="post-revisions-modifications"
                name="modifications"
                data-cy="modifications"
                type="text"
              />
              <ValidatedField label="Number" id="post-revisions-number" name="number" data-cy="number" type="text" />
              <ValidatedField label="Hidden" id="post-revisions-hidden" name="hidden" data-cy="hidden" check type="checkbox" />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/post-revisions" replace color="info">
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

export default PostRevisionsUpdate;
