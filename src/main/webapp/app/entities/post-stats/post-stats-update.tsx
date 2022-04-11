import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IPostStats } from 'app/shared/model/post-stats.model';
import { getEntity, updateEntity, createEntity, reset } from './post-stats.reducer';

export const PostStatsUpdate = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const postStatsEntity = useAppSelector(state => state.postStats.entity);
  const loading = useAppSelector(state => state.postStats.loading);
  const updating = useAppSelector(state => state.postStats.updating);
  const updateSuccess = useAppSelector(state => state.postStats.updateSuccess);
  const handleClose = () => {
    props.history.push('/post-stats' + props.location.search);
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
      ...postStatsEntity,
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
          ...postStatsEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="discourseReactApp.postStats.home.createOrEditLabel" data-cy="PostStatsCreateUpdateHeading">
            Create or edit a PostStats
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ValidatedForm defaultValues={defaultValues()} onSubmit={saveEntity}>
              {!isNew ? <ValidatedField name="id" required readOnly id="post-stats-id" label="ID" validate={{ required: true }} /> : null}
              <ValidatedField label="Post Id" id="post-stats-postId" name="postId" data-cy="postId" type="text" />
              <ValidatedField label="Drafts Saved" id="post-stats-draftsSaved" name="draftsSaved" data-cy="draftsSaved" type="text" />
              <ValidatedField
                label="Typing Duration Msecs"
                id="post-stats-typingDurationMsecs"
                name="typingDurationMsecs"
                data-cy="typingDurationMsecs"
                type="text"
              />
              <ValidatedField
                label="Composer Open Duration Msecs"
                id="post-stats-composerOpenDurationMsecs"
                name="composerOpenDurationMsecs"
                data-cy="composerOpenDurationMsecs"
                type="text"
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/post-stats" replace color="info">
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

export default PostStatsUpdate;
