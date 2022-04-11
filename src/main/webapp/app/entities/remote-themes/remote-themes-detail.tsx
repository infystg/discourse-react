import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './remote-themes.reducer';

export const RemoteThemesDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const remoteThemesEntity = useAppSelector(state => state.remoteThemes.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="remoteThemesDetailsHeading">RemoteThemes</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{remoteThemesEntity.id}</dd>
          <dt>
            <span id="remoteUrl">Remote Url</span>
          </dt>
          <dd>{remoteThemesEntity.remoteUrl}</dd>
          <dt>
            <span id="remoteVersion">Remote Version</span>
          </dt>
          <dd>{remoteThemesEntity.remoteVersion}</dd>
          <dt>
            <span id="localVersion">Local Version</span>
          </dt>
          <dd>{remoteThemesEntity.localVersion}</dd>
          <dt>
            <span id="aboutUrl">About Url</span>
          </dt>
          <dd>{remoteThemesEntity.aboutUrl}</dd>
          <dt>
            <span id="licenseUrl">License Url</span>
          </dt>
          <dd>{remoteThemesEntity.licenseUrl}</dd>
          <dt>
            <span id="commitsBehind">Commits Behind</span>
          </dt>
          <dd>{remoteThemesEntity.commitsBehind}</dd>
          <dt>
            <span id="remoteUpdatedAt">Remote Updated At</span>
          </dt>
          <dd>
            {remoteThemesEntity.remoteUpdatedAt ? (
              <TextFormat value={remoteThemesEntity.remoteUpdatedAt} type="date" format={APP_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="privateKey">Private Key</span>
          </dt>
          <dd>{remoteThemesEntity.privateKey}</dd>
          <dt>
            <span id="branch">Branch</span>
          </dt>
          <dd>{remoteThemesEntity.branch}</dd>
          <dt>
            <span id="lastErrorText">Last Error Text</span>
          </dt>
          <dd>{remoteThemesEntity.lastErrorText}</dd>
          <dt>
            <span id="authors">Authors</span>
          </dt>
          <dd>{remoteThemesEntity.authors}</dd>
          <dt>
            <span id="themeVersion">Theme Version</span>
          </dt>
          <dd>{remoteThemesEntity.themeVersion}</dd>
          <dt>
            <span id="minimumDiscourseVersion">Minimum Discourse Version</span>
          </dt>
          <dd>{remoteThemesEntity.minimumDiscourseVersion}</dd>
          <dt>
            <span id="maximumDiscourseVersion">Maximum Discourse Version</span>
          </dt>
          <dd>{remoteThemesEntity.maximumDiscourseVersion}</dd>
        </dl>
        <Button tag={Link} to="/remote-themes" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/remote-themes/${remoteThemesEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default RemoteThemesDetail;
