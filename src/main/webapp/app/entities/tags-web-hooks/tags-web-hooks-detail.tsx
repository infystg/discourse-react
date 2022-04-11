import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './tags-web-hooks.reducer';

export const TagsWebHooksDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const tagsWebHooksEntity = useAppSelector(state => state.tagsWebHooks.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="tagsWebHooksDetailsHeading">TagsWebHooks</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{tagsWebHooksEntity.id}</dd>
          <dt>
            <span id="webHookId">Web Hook Id</span>
          </dt>
          <dd>{tagsWebHooksEntity.webHookId}</dd>
          <dt>
            <span id="tagId">Tag Id</span>
          </dt>
          <dd>{tagsWebHooksEntity.tagId}</dd>
        </dl>
        <Button tag={Link} to="/tags-web-hooks" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/tags-web-hooks/${tagsWebHooksEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default TagsWebHooksDetail;
