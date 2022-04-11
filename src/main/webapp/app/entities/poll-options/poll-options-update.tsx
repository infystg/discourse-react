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
import { IPollOptions } from 'app/shared/model/poll-options.model';
import { getEntity, updateEntity, createEntity, reset } from './poll-options.reducer';

export const PollOptionsUpdate = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const pollVotes = useAppSelector(state => state.pollVotes.entities);
  const pollOptionsEntity = useAppSelector(state => state.pollOptions.entity);
  const loading = useAppSelector(state => state.pollOptions.loading);
  const updating = useAppSelector(state => state.pollOptions.updating);
  const updateSuccess = useAppSelector(state => state.pollOptions.updateSuccess);
  const handleClose = () => {
    props.history.push('/poll-options' + props.location.search);
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
    const entity = {
      ...pollOptionsEntity,
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
      ? {}
      : {
          ...pollOptionsEntity,
          pollVotes: pollOptionsEntity?.pollVotes?.id,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="discourseReactApp.pollOptions.home.createOrEditLabel" data-cy="PollOptionsCreateUpdateHeading">
            Create or edit a PollOptions
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ValidatedForm defaultValues={defaultValues()} onSubmit={saveEntity}>
              {!isNew ? <ValidatedField name="id" required readOnly id="poll-options-id" label="ID" validate={{ required: true }} /> : null}
              <ValidatedField label="Poll Id" id="poll-options-pollId" name="pollId" data-cy="pollId" type="text" />
              <ValidatedField
                label="Digest"
                id="poll-options-digest"
                name="digest"
                data-cy="digest"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Html"
                id="poll-options-html"
                name="html"
                data-cy="html"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Anonymous Votes"
                id="poll-options-anonymousVotes"
                name="anonymousVotes"
                data-cy="anonymousVotes"
                type="text"
              />
              <ValidatedField id="poll-options-pollVotes" name="pollVotes" data-cy="pollVotes" label="Poll Votes" type="select">
                <option value="" key="0" />
                {pollVotes
                  ? pollVotes.map(otherEntity => (
                      <option value={otherEntity.id} key={otherEntity.id}>
                        {otherEntity.id}
                      </option>
                    ))
                  : null}
              </ValidatedField>
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/poll-options" replace color="info">
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

export default PollOptionsUpdate;
