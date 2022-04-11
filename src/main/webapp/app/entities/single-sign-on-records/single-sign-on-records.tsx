import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Table } from 'reactstrap';
import { Translate, getSortState, JhiPagination, JhiItemCount } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { ASC, DESC, ITEMS_PER_PAGE, SORT } from 'app/shared/util/pagination.constants';
import { overridePaginationStateWithQueryParams } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { ISingleSignOnRecords } from 'app/shared/model/single-sign-on-records.model';
import { getEntities } from './single-sign-on-records.reducer';

export const SingleSignOnRecords = (props: RouteComponentProps<{ url: string }>) => {
  const dispatch = useAppDispatch();

  const [paginationState, setPaginationState] = useState(
    overridePaginationStateWithQueryParams(getSortState(props.location, ITEMS_PER_PAGE, 'id'), props.location.search)
  );

  const singleSignOnRecordsList = useAppSelector(state => state.singleSignOnRecords.entities);
  const loading = useAppSelector(state => state.singleSignOnRecords.loading);
  const totalItems = useAppSelector(state => state.singleSignOnRecords.totalItems);

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
      <h2 id="single-sign-on-records-heading" data-cy="SingleSignOnRecordsHeading">
        Single Sign On Records
        <div className="d-flex justify-content-end">
          <Button className="me-2" color="info" onClick={handleSyncList} disabled={loading}>
            <FontAwesomeIcon icon="sync" spin={loading} /> Refresh List
          </Button>
          <Link
            to="/single-sign-on-records/new"
            className="btn btn-primary jh-create-entity"
            id="jh-create-entity"
            data-cy="entityCreateButton"
          >
            <FontAwesomeIcon icon="plus" />
            &nbsp; Create new Single Sign On Records
          </Link>
        </div>
      </h2>
      <div className="table-responsive">
        {singleSignOnRecordsList && singleSignOnRecordsList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th className="hand" onClick={sort('id')}>
                  ID <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('userId')}>
                  User Id <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('externalId')}>
                  External Id <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('lastPayload')}>
                  Last Payload <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('externalUsername')}>
                  External Username <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('externalEmail')}>
                  External Email <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('externalName')}>
                  External Name <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('externalAvatarUrl')}>
                  External Avatar Url <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('externalProfileBackgroundUrl')}>
                  External Profile Background Url <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('externalCardBackgroundUrl')}>
                  External Card Background Url <FontAwesomeIcon icon="sort" />
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {singleSignOnRecordsList.map((singleSignOnRecords, i) => (
                <tr key={`entity-${i}`} data-cy="entityTable">
                  <td>
                    <Button tag={Link} to={`/single-sign-on-records/${singleSignOnRecords.id}`} color="link" size="sm">
                      {singleSignOnRecords.id}
                    </Button>
                  </td>
                  <td>{singleSignOnRecords.userId}</td>
                  <td>{singleSignOnRecords.externalId}</td>
                  <td>{singleSignOnRecords.lastPayload}</td>
                  <td>{singleSignOnRecords.externalUsername}</td>
                  <td>{singleSignOnRecords.externalEmail}</td>
                  <td>{singleSignOnRecords.externalName}</td>
                  <td>{singleSignOnRecords.externalAvatarUrl}</td>
                  <td>{singleSignOnRecords.externalProfileBackgroundUrl}</td>
                  <td>{singleSignOnRecords.externalCardBackgroundUrl}</td>
                  <td className="text-end">
                    <div className="btn-group flex-btn-group-container">
                      <Button
                        tag={Link}
                        to={`/single-sign-on-records/${singleSignOnRecords.id}`}
                        color="info"
                        size="sm"
                        data-cy="entityDetailsButton"
                      >
                        <FontAwesomeIcon icon="eye" /> <span className="d-none d-md-inline">View</span>
                      </Button>
                      <Button
                        tag={Link}
                        to={`/single-sign-on-records/${singleSignOnRecords.id}/edit?page=${paginationState.activePage}&sort=${paginationState.sort},${paginationState.order}`}
                        color="primary"
                        size="sm"
                        data-cy="entityEditButton"
                      >
                        <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
                      </Button>
                      <Button
                        tag={Link}
                        to={`/single-sign-on-records/${singleSignOnRecords.id}/delete?page=${paginationState.activePage}&sort=${paginationState.sort},${paginationState.order}`}
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
          !loading && <div className="alert alert-warning">No Single Sign On Records found</div>
        )}
      </div>
      {totalItems ? (
        <div className={singleSignOnRecordsList && singleSignOnRecordsList.length > 0 ? '' : 'd-none'}>
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

export default SingleSignOnRecords;
