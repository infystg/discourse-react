import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IPollVotes } from 'app/shared/model/poll-votes.model';
import { getEntity, updateEntity, createEntity, reset } from './poll-votes.reducer';

export const PollVotesUpdate = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const pollVotesEntity = useAppSelector(state => state.pollVotes.entity);
  const loading = useAppSelector(state => state.pollVotes.loading);
  const updating = useAppSelector(state => state.pollVotes.updating);
  const updateSuccess = useAppSelector(state => state.pollVotes.updateSuccess);
  const handleClose = () => {
    props.history.push('/poll-votes' + props.location.search);
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
      ...pollVotesEntity,
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
          ...pollVotesEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="discourseReactApp.pollVotes.home.createOrEditLabel" data-cy="PollVotesCreateUpdateHeading">
            Create or edit a PollVotes
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ValidatedForm defaultValues={defaultValues()} onSubmit={saveEntity}>
              {!isNew ? <ValidatedField name="id" required readOnly id="poll-votes-id" label="ID" validate={{ required: true }} /> : null}
              <ValidatedField label="Poll Id" id="poll-votes-pollId" name="pollId" data-cy="pollId" type="text" />
              <ValidatedField label="Poll Option Id" id="poll-votes-pollOptionId" name="pollOptionId" data-cy="pollOptionId" type="text" />
              <ValidatedField label="User Id" id="poll-votes-userId" name="userId" data-cy="userId" type="text" />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/poll-votes" replace color="info">
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

export default PollVotesUpdate;
