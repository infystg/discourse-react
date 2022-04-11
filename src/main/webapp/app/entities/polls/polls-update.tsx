import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IPollVotes } from 'app/shared/model/poll-votes.model';
import { getEntities as getPollVotes } from 'app/entities/poll-votes/poll-votes.reducer';
import { IPolls } from 'app/shared/model/polls.model';
import { getEntity, updateEntity, createEntity, reset } from './polls.reducer';

export const PollsUpdate = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const pollVotes = useAppSelector(state => state.pollVotes.entities);
  const pollsEntity = useAppSelector(state => state.polls.entity);
  const loading = useAppSelector(state => state.polls.loading);
  const updating = useAppSelector(state => state.polls.updating);
  const updateSuccess = useAppSelector(state => state.polls.updateSuccess);
  const handleClose = () => {
    props.history.push('/polls' + props.location.search);
  };

  useEffect(() => {
    if (isNew) {
      dispatch(reset());
    } else {
      dispatch(getEntity(props.match.params.id));
    }

    dispatch(getPollVotes({}));
  }, []);

  useEffect(() => {
    if (updateSuccess) {
      handleClose();
    }
  }, [updateSuccess]);

  const saveEntity = values => {
    values.closeAt = convertDateTimeToServer(values.closeAt);

    const entity = {
      ...pollsEntity,
      ...values,
      pollVotes: pollVotes.find(it => it.id.toString() === values.pollVotes.toString()),
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
          closeAt: displayDefaultDateTime(),
        }
      : {
          ...pollsEntity,
          closeAt: convertDateTimeFromServer(pollsEntity.closeAt),
          pollVotes: pollsEntity?.pollVotes?.id,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="discourseReactApp.polls.home.createOrEditLabel" data-cy="PollsCreateUpdateHeading">
            Create or edit a Polls
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ValidatedForm defaultValues={defaultValues()} onSubmit={saveEntity}>
              {!isNew ? <ValidatedField name="id" required readOnly id="polls-id" label="ID" validate={{ required: true }} /> : null}
              <ValidatedField label="Post Id" id="polls-postId" name="postId" data-cy="postId" type="text" />
              <ValidatedField
                label="Name"
                id="polls-name"
                name="name"
                data-cy="name"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Close At"
                id="polls-closeAt"
                name="closeAt"
                data-cy="closeAt"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
              />
              <ValidatedField
                label="Type"
                id="polls-type"
                name="type"
                data-cy="type"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Status"
                id="polls-status"
                name="status"
                data-cy="status"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Results"
                id="polls-results"
                name="results"
                data-cy="results"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField
                label="Visibility"
                id="polls-visibility"
                name="visibility"
                data-cy="visibility"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField label="Min" id="polls-min" name="min" data-cy="min" type="text" />
              <ValidatedField label="Max" id="polls-max" name="max" data-cy="max" type="text" />
              <ValidatedField label="Step" id="polls-step" name="step" data-cy="step" type="text" />
              <ValidatedField
                label="Anonymous Voters"
                id="polls-anonymousVoters"
                name="anonymousVoters"
                data-cy="anonymousVoters"
                type="text"
              />
              <ValidatedField
                label="Chart Type"
                id="polls-chartType"
                name="chartType"
                data-cy="chartType"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField label="Groups" id="polls-groups" name="groups" data-cy="groups" type="text" />
              <ValidatedField label="Title" id="polls-title" name="title" data-cy="title" type="text" />
              <ValidatedField id="polls-pollVotes" name="pollVotes" data-cy="pollVotes" label="Poll Votes" type="select">
                <option value="" key="0" />
                {pollVotes
                  ? pollVotes.map(otherEntity => (
                      <option value={otherEntity.id} key={otherEntity.id}>
                        {otherEntity.id}
                      </option>
                    ))
                  : null}
              </ValidatedField>
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/polls" replace color="info">
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

export default PollsUpdate;
