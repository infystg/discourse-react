import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './bookmarks.reducer';

export const BookmarksDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const bookmarksEntity = useAppSelector(state => state.bookmarks.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="bookmarksDetailsHeading">Bookmarks</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{bookmarksEntity.id}</dd>
          <dt>
            <span id="userId">User Id</span>
          </dt>
          <dd>{bookmarksEntity.userId}</dd>
          <dt>
            <span id="topicId">Topic Id</span>
          </dt>
          <dd>{bookmarksEntity.topicId}</dd>
          <dt>
            <span id="postId">Post Id</span>
          </dt>
          <dd>{bookmarksEntity.postId}</dd>
          <dt>
            <span id="name">Name</span>
          </dt>
          <dd>{bookmarksEntity.name}</dd>
          <dt>
            <span id="reminderType">Reminder Type</span>
          </dt>
          <dd>{bookmarksEntity.reminderType}</dd>
          <dt>
            <span id="reminderAt">Reminder At</span>
          </dt>
          <dd>
            {bookmarksEntity.reminderAt ? <TextFormat value={bookmarksEntity.reminderAt} type="date" format={APP_DATE_FORMAT} /> : null}
          </dd>
          <dt>
            <span id="reminderLastSentAt">Reminder Last Sent At</span>
          </dt>
          <dd>
            {bookmarksEntity.reminderLastSentAt ? (
              <TextFormat value={bookmarksEntity.reminderLastSentAt} type="date" format={APP_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="reminderSetAt">Reminder Set At</span>
          </dt>
          <dd>
            {bookmarksEntity.reminderSetAt ? (
              <TextFormat value={bookmarksEntity.reminderSetAt} type="date" format={APP_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="autoDeletePreference">Auto Delete Preference</span>
          </dt>
          <dd>{bookmarksEntity.autoDeletePreference}</dd>
          <dt>
            <span id="pinned">Pinned</span>
          </dt>
          <dd>{bookmarksEntity.pinned ? 'true' : 'false'}</dd>
        </dl>
        <Button tag={Link} to="/bookmarks" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/bookmarks/${bookmarksEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default BookmarksDetail;
