import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { ITopicLinks } from 'app/shared/model/topic-links.model';
import { getEntity, updateEntity, createEntity, reset } from './topic-links.reducer';

export const TopicLinksUpdate = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const topicLinksEntity = useAppSelector(state => state.topicLinks.entity);
  const loading = useAppSelector(state => state.topicLinks.loading);
  const updating = useAppSelector(state => state.topicLinks.updating);
  const updateSuccess = useAppSelector(state => state.topicLinks.updateSuccess);
  const handleClose = () => {
    props.history.push('/topic-links' + props.location.search);
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
    values.crawledAt = convertDateTimeToServer(values.crawledAt);

    const entity = {
      ...topicLinksEntity,
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
          crawledAt: displayDefaultDateTime(),
        }
      : {
          ...topicLinksEntity,
          crawledAt: convertDateTimeFromServer(topicLinksEntity.crawledAt),
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="discourseReactApp.topicLinks.home.createOrEditLabel" data-cy="TopicLinksCreateUpdateHeading">
            Create or edit a TopicLinks
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ValidatedForm defaultValues={defaultValues()} onSubmit={saveEntity}>
              {!isNew ? <ValidatedField name="id" required readOnly id="topic-links-id" label="ID" validate={{ required: true }} /> : null}
              <ValidatedField
                label="Topic Id"
                id="topic-links-topicId"
                name="topicId"
                data-cy="topicId"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField label="Post Id" id="topic-links-postId" name="postId" data-cy="postId" type="text" />
              <ValidatedField
                label="User Id"
                id="topic-links-userId"
                name="userId"
                data-cy="userId"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Url"
                id="topic-links-url"
                name="url"
                data-cy="url"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Domain"
                id="topic-links-domain"
                name="domain"
                data-cy="domain"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField label="Internal" id="topic-links-internal" name="internal" data-cy="internal" check type="checkbox" />
              <ValidatedField label="Link Topic Id" id="topic-links-linkTopicId" name="linkTopicId" data-cy="linkTopicId" type="text" />
              <ValidatedField label="Reflection" id="topic-links-reflection" name="reflection" data-cy="reflection" check type="checkbox" />
              <ValidatedField
                label="Clicks"
                id="topic-links-clicks"
                name="clicks"
                data-cy="clicks"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  validate: v => isNumber(v) || 'This field should be a number.',
                }}
              />
              <ValidatedField label="Link Post Id" id="topic-links-linkPostId" name="linkPostId" data-cy="linkPostId" type="text" />
              <ValidatedField label="Title" id="topic-links-title" name="title" data-cy="title" type="text" />
              <ValidatedField
                label="Crawled At"
                id="topic-links-crawledAt"
                name="crawledAt"
                data-cy="crawledAt"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
              />
              <ValidatedField label="Quote" id="topic-links-quote" name="quote" data-cy="quote" check type="checkbox" />
              <ValidatedField label="Extension" id="topic-links-extension" name="extension" data-cy="extension" type="text" />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/topic-links" replace color="info">
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

export default TopicLinksUpdate;
