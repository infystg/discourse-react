import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IPostDetails } from 'app/shared/model/post-details.model';
import { getEntity, updateEntity, createEntity, reset } from './post-details.reducer';

export const PostDetailsUpdate = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const postDetailsEntity = useAppSelector(state => state.postDetails.entity);
  const loading = useAppSelector(state => state.postDetails.loading);
  const updating = useAppSelector(state => state.postDetails.updating);
  const updateSuccess = useAppSelector(state => state.postDetails.updateSuccess);
  const handleClose = () => {
    props.history.push('/post-details' + props.location.search);
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
      ...postDetailsEntity,
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
          ...postDetailsEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="discourseReactApp.postDetails.home.createOrEditLabel" data-cy="PostDetailsCreateUpdateHeading">
            Create or edit a PostDetails
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ValidatedForm defaultValues={defaultValues()} onSubmit={saveEntity}>
              {!isNew ? <ValidatedField name="id" required readOnly id="post-details-id" label="ID" validate={{ required: true }} /> : null}
              <ValidatedField label="Post Id" id="post-details-postId" name="postId" data-cy="postId" type="text" />
              <ValidatedField label="Key" id="post-details-key" name="key" data-cy="key" type="text" />
              <ValidatedField label="Value" id="post-details-value" name="value" data-cy="value" type="text" />
              <ValidatedField label="Extra" id="post-details-extra" name="extra" data-cy="extra" type="text" />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/post-details" replace color="info">
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

export default PostDetailsUpdate;
