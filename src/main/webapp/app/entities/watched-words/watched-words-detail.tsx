import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './watched-words.reducer';

export const WatchedWordsDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const watchedWordsEntity = useAppSelector(state => state.watchedWords.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="watchedWordsDetailsHeading">WatchedWords</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{watchedWordsEntity.id}</dd>
          <dt>
            <span id="word">Word</span>
          </dt>
          <dd>{watchedWordsEntity.word}</dd>
          <dt>
            <span id="action">Action</span>
          </dt>
          <dd>{watchedWordsEntity.action}</dd>
          <dt>
            <span id="replacement">Replacement</span>
          </dt>
          <dd>{watchedWordsEntity.replacement}</dd>
        </dl>
        <Button tag={Link} to="/watched-words" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/watched-words/${watchedWordsEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default WatchedWordsDetail;
