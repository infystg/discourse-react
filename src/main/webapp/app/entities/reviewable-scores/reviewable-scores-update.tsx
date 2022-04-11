import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IReviewableScores } from 'app/shared/model/reviewable-scores.model';
import { getEntity, updateEntity, createEntity, reset } from './reviewable-scores.reducer';

export const ReviewableScoresUpdate = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const reviewableScoresEntity = useAppSelector(state => state.reviewableScores.entity);
  const loading = useAppSelector(state => state.reviewableScores.loading);
  const updating = useAppSelector(state => state.reviewableScores.updating);
  const updateSuccess = useAppSelector(state => state.reviewableScores.updateSuccess);
  const handleClose = () => {
    props.history.push('/reviewable-scores' + props.location.search);
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
    values.reviewedAt = convertDateTimeToServer(values.reviewedAt);

    const entity = {
      ...reviewableScoresEntity,
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
          reviewedAt: displayDefaultDateTime(),
        }
      : {
          ...reviewableScoresEntity,
          reviewedAt: convertDateTimeFromServer(reviewableScoresEntity.reviewedAt),
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="discourseReactApp.reviewableScores.home.createOrEditLabel" data-cy="ReviewableScoresCreateUpdateHeading">
            Create or edit a ReviewableScores
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
                <ValidatedField name="id" required readOnly id="reviewable-scores-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="Reviewable Id"
                id="reviewable-scores-reviewableId"
                name="reviewableId"
                data-cy="reviewableId"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="User Id"
                id="reviewable-scores-userId"
                name="userId"
                data-cy="userId"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Reviewable Score Type"
                id="reviewable-scores-reviewableScoreType"
                name="reviewableScoreType"
                data-cy="reviewableScoreType"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Status"
                id="reviewable-scores-status"
                name="status"
                data-cy="status"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Score"
                id="reviewable-scores-score"
                name="score"
                data-cy="score"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Take Action Bonus"
                id="reviewable-scores-takeActionBonus"
                name="takeActionBonus"
                data-cy="takeActionBonus"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Reviewed By Id"
                id="reviewable-scores-reviewedById"
                name="reviewedById"
                data-cy="reviewedById"
                type="text"
              />
              <ValidatedField
                label="Reviewed At"
                id="reviewable-scores-reviewedAt"
                name="reviewedAt"
                data-cy="reviewedAt"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
              />
              <ValidatedField
                label="Meta Topic Id"
                id="reviewable-scores-metaTopicId"
                name="metaTopicId"
                data-cy="metaTopicId"
                type="text"
              />
              <ValidatedField label="Reason" id="reviewable-scores-reason" name="reason" data-cy="reason" type="text" />
              <ValidatedField
                label="User Accuracy Bonus"
                id="reviewable-scores-userAccuracyBonus"
                name="userAccuracyBonus"
                data-cy="userAccuracyBonus"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/reviewable-scores" replace color="info">
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

export default ReviewableScoresUpdate;
