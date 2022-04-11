import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Table } from 'reactstrap';
import { Translate, TextFormat, getSortState, JhiPagination, JhiItemCount } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { ASC, DESC, ITEMS_PER_PAGE, SORT } from 'app/shared/util/pagination.constants';
import { overridePaginationStateWithQueryParams } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IUploads } from 'app/shared/model/uploads.model';
import { getEntities } from './uploads.reducer';

export const Uploads = (props: RouteComponentProps<{ url: string }>) => {
  const dispatch = useAppDispatch();

  const [paginationState, setPaginationState] = useState(
    overridePaginationStateWithQueryParams(getSortState(props.location, ITEMS_PER_PAGE, 'id'), props.location.search)
  );

  const uploadsList = useAppSelector(state => state.uploads.entities);
  const loading = useAppSelector(state => state.uploads.loading);
  const totalItems = useAppSelector(state => state.uploads.totalItems);

  const getAllEntities = () => {
    dispatch(
      getEntities({
        page: paginationState.activePage - 1,
        size: paginationState.itemsPerPage,
        sort: `${paginationState.sort},${paginationState.order}`,
      })
    );
  };

  const sortEntities = () => {
    getAllEntities();
    const endURL = `?page=${paginationState.activePage}&sort=${paginationState.sort},${paginationState.order}`;
    if (props.location.search !== endURL) {
      props.history.push(`${props.location.pathname}${endURL}`);
    }
  };

  useEffect(() => {
    sortEntities();
  }, [paginationState.activePage, paginationState.order, paginationState.sort]);

  useEffect(() => {
    const params = new URLSearchParams(props.location.search);
    const page = params.get('page');
    const sort = params.get(SORT);
    if (page && sort) {
      const sortSplit = sort.split(',');
      setPaginationState({
        ...paginationState,
        activePage: +page,
        sort: sortSplit[0],
        order: sortSplit[1],
      });
    }
  }, [props.location.search]);

  const sort = p => () => {
    setPaginationState({
      ...paginationState,
      order: paginationState.order === ASC ? DESC : ASC,
      sort: p,
    });
  };

  const handlePagination = currentPage =>
    setPaginationState({
      ...paginationState,
      activePage: currentPage,
    });

  const handleSyncList = () => {
    sortEntities();
  };

  const { match } = props;

  return (
    <div>
      <h2 id="uploads-heading" data-cy="UploadsHeading">
        Uploads
        <div className="d-flex justify-content-end">
          <Button className="me-2" color="info" onClick={handleSyncList} disabled={loading}>
            <FontAwesomeIcon icon="sync" spin={loading} /> Refresh List
          </Button>
          <Link to="/uploads/new" className="btn btn-primary jh-create-entity" id="jh-create-entity" data-cy="entityCreateButton">
            <FontAwesomeIcon icon="plus" />
            &nbsp; Create new Uploads
          </Link>
        </div>
      </h2>
      <div className="table-responsive">
        {uploadsList && uploadsList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th className="hand" onClick={sort('id')}>
                  ID <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('userId')}>
                  User Id <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('originalFilename')}>
                  Original Filename <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('filesize')}>
                  Filesize <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('width')}>
                  Width <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('height')}>
                  Height <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('url')}>
                  Url <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('sha1')}>
                  Sha 1 <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('origin')}>
                  Origin <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('retainHours')}>
                  Retain Hours <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('extension')}>
                  Extension <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('thumbnailWidth')}>
                  Thumbnail Width <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('thumbnailHeight')}>
                  Thumbnail Height <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('etag')}>
                  Etag <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('secure')}>
                  Secure <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('accessControlPostId')}>
                  Access Control Post Id <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('originalSha1')}>
                  Original Sha 1 <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('animated')}>
                  Animated <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('verified')}>
                  Verified <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('verificationStatus')}>
                  Verification Status <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('securityLastChangedAt')}>
                  Security Last Changed At <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('securityLastChangedReason')}>
                  Security Last Changed Reason <FontAwesomeIcon icon="sort" />
                </th>
                <th>
                  User Profiles <FontAwesomeIcon icon="sort" />
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {uploadsList.map((uploads, i) => (
                <tr key={`entity-${i}`} data-cy="entityTable">
                  <td>
                    <Button tag={Link} to={`/uploads/${uploads.id}`} color="link" size="sm">
                      {uploads.id}
                    </Button>
                  </td>
                  <td>{uploads.userId}</td>
                  <td>{uploads.originalFilename}</td>
                  <td>{uploads.filesize}</td>
                  <td>{uploads.width}</td>
                  <td>{uploads.height}</td>
                  <td>{uploads.url}</td>
                  <td>{uploads.sha1}</td>
                  <td>{uploads.origin}</td>
                  <td>{uploads.retainHours}</td>
                  <td>{uploads.extension}</td>
                  <td>{uploads.thumbnailWidth}</td>
                  <td>{uploads.thumbnailHeight}</td>
                  <td>{uploads.etag}</td>
                  <td>{uploads.secure ? 'true' : 'false'}</td>
                  <td>{uploads.accessControlPostId}</td>
                  <td>{uploads.originalSha1}</td>
                  <td>{uploads.animated ? 'true' : 'false'}</td>
                  <td>{uploads.verified ? 'true' : 'false'}</td>
                  <td>{uploads.verificationStatus}</td>
                  <td>
                    {uploads.securityLastChangedAt ? (
                      <TextFormat type="date" value={uploads.securityLastChangedAt} format={APP_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>{uploads.securityLastChangedReason}</td>
                  <td>
                    {uploads.userProfiles ? <Link to={`/user-profiles/${uploads.userProfiles.id}`}>{uploads.userProfiles.id}</Link> : ''}
                  </td>
                  <td className="text-end">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`/uploads/${uploads.id}`} color="info" size="sm" data-cy="entityDetailsButton">
                        <FontAwesomeIcon icon="eye" /> <span className="d-none d-md-inline">View</span>
                      </Button>
                      <Button
                        tag={Link}
                        to={`/uploads/${uploads.id}/edit?page=${paginationState.activePage}&sort=${paginationState.sort},${paginationState.order}`}
                        color="primary"
                        size="sm"
                        data-cy="entityEditButton"
                      >
                        <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
                      </Button>
                      <Button
                        tag={Link}
                        to={`/uploads/${uploads.id}/delete?page=${paginationState.activePage}&sort=${paginationState.sort},${paginationState.order}`}
                        color="danger"
                        size="sm"
                        data-cy="entityDeleteButton"
                      >
                        <FontAwesomeIcon icon="trash" /> <span className="d-none d-md-inline">Delete</span>
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          !loading && <div className="alert alert-warning">No Uploads found</div>
        )}
      </div>
      {totalItems ? (
        <div className={uploadsList && uploadsList.length > 0 ? '' : 'd-none'}>
          <div className="justify-content-center d-flex">
            <JhiItemCount page={paginationState.activePage} total={totalItems} itemsPerPage={paginationState.itemsPerPage} />
          </div>
          <div className="justify-content-center d-flex">
            <JhiPagination
              activePage={paginationState.activePage}
              onSelect={handlePagination}
              maxButtons={5}
              itemsPerPage={paginationState.itemsPerPage}
              totalItems={totalItems}
            />
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default Uploads;
