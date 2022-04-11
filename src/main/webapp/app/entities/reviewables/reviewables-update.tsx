import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IReviewables } from 'app/shared/model/reviewables.model';
import { getEntity, updateEntity, createEntity, reset } from './reviewables.reducer';

export const ReviewablesUpdate = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const reviewablesEntity = useAppSelector(state => state.reviewables.entity);
  const loading = useAppSelector(state => state.reviewables.loading);
  const updating = useAppSelector(state => state.reviewables.updating);
  const updateSuccess = useAppSelector(state => state.reviewables.updateSuccess);
  const handleClose = () => {
    props.history.push('/reviewables' + props.location.search);
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
    values.latestScore = convertDateTimeToServer(values.latestScore);

    const entity = {
      ...reviewablesEntity,
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
          latestScore: displayDefaultDateTime(),
        }
      : {
          ...reviewablesEntity,
          latestScore: convertDateTimeFromServer(reviewablesEntity.latestScore),
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="discourseReactApp.reviewables.home.createOrEditLabel" data-cy="ReviewablesCreateUpdateHeading">
            Create or edit a Reviewables
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ValidatedForm defaultValues={defaultValues()} onSubmit={saveEntity}>
              {!isNew ? <ValidatedField name="id" required readOnly id="reviewables-id" label="ID" validate={{ required: true }} /> : null}
              <ValidatedField
                label="Type"
                id="reviewables-type"
                name="type"
                data-cy="type"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Status"
                id="reviewables-status"
                name="status"
                data-cy="status"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Reviewable By Moderator"
                id="reviewables-reviewableByModerator"
                name="reviewableByModerator"
                data-cy="reviewableByModerator"
                check
                type="checkbox"
              />
              <ValidatedField
                label="Reviewable By Group Id"
                id="reviewables-reviewableByGroupId"
                name="reviewableByGroupId"
                data-cy="reviewableByGroupId"
                type="text"
              />
              <ValidatedField label="Category Id" id="reviewables-categoryId" name="categoryId" data-cy="categoryId" type="text" />
              <ValidatedField label="Topic Id" id="reviewables-topicId" name="topicId" data-cy="topicId" type="text" />
              <ValidatedField
                label="Score"
                id="reviewables-score"
                name="score"
                data-cy="score"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Potential Spam"
                id="reviewables-potentialSpam"
                name="potentialSpam"
                data-cy="potentialSpam"
                check
                type="checkbox"
              />
              <ValidatedField label="Target Id" id="reviewables-targetId" name="targetId" data-cy="targetId" type="text" />
              <ValidatedField label="Target Type" id="reviewables-targetType" name="targetType" data-cy="targetType" type="text" />
              <ValidatedField
                label="Target Created By Id"
                id="reviewables-targetCreatedById"
                name="targetCreatedById"
                data-cy="targetCreatedById"
                type="text"
              />
              <ValidatedField label="Payload" id="reviewables-payload" name="payload" data-cy="payload" type="text" />
              <ValidatedField
                label="Version"
                id="reviewables-version"
                name="version"
                data-cy="version"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Latest Score"
                id="reviewables-latestScore"
                name="latestScore"
                data-cy="latestScore"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
              />
              <ValidatedField
                label="Force Review"
                id="reviewables-forceReview"
                name="forceReview"
                data-cy="forceReview"
                check
                type="checkbox"
              />
              <ValidatedField label="Reject Reason" id="reviewables-rejectReason" name="rejectReason" data-cy="rejectReason" type="text" />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/reviewables" replace color="info">
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

export default ReviewablesUpdate;
