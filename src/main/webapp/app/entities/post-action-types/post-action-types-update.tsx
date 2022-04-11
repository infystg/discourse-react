import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IPostActionTypes } from 'app/shared/model/post-action-types.model';
import { getEntity, updateEntity, createEntity, reset } from './post-action-types.reducer';

export const PostActionTypesUpdate = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const postActionTypesEntity = useAppSelector(state => state.postActionTypes.entity);
  const loading = useAppSelector(state => state.postActionTypes.loading);
  const updating = useAppSelector(state => state.postActionTypes.updating);
  const updateSuccess = useAppSelector(state => state.postActionTypes.updateSuccess);
  const handleClose = () => {
    props.history.push('/post-action-types' + props.location.search);
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
      ...postActionTypesEntity,
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
          ...postActionTypesEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="discourseReactApp.postActionTypes.home.createOrEditLabel" data-cy="PostActionTypesCreateUpdateHeading">
            Create or edit a PostActionTypes
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
                <ValidatedField name="id" required readOnly id="post-action-types-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="Name Key"
                id="post-action-types-nameKey"
                name="nameKey"
                data-cy="nameKey"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField label="Is Flag" id="post-action-types-isFlag" name="isFlag" data-cy="isFlag" check type="checkbox" />
              <ValidatedField label="Icon" id="post-action-types-icon" name="icon" data-cy="icon" type="text" />
              <ValidatedField
                label="Position"
                id="post-action-types-position"
                name="position"
                data-cy="position"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Score Bonus"
                id="post-action-types-scoreBonus"
                name="scoreBonus"
                data-cy="scoreBonus"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Reviewable Priority"
                id="post-action-types-reviewablePriority"
                name="reviewablePriority"
                data-cy="reviewablePriority"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/post-action-types" replace color="info">
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

export default PostActionTypesUpdate;
