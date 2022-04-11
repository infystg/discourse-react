import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Table } from 'reactstrap';
import { Translate, TextFormat, getSortState, JhiPagination, JhiItemCount } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { ASC, DESC, ITEMS_PER_PAGE, SORT } from 'app/shared/util/pagination.constants';
import { overridePaginationStateWithQueryParams } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IBookmarks } from 'app/shared/model/bookmarks.model';
import { getEntities } from './bookmarks.reducer';

export const Bookmarks = (props: RouteComponentProps<{ url: string }>) => {
  const dispatch = useAppDispatch();

  const [paginationState, setPaginationState] = useState(
    overridePaginationStateWithQueryParams(getSortState(props.location, ITEMS_PER_PAGE, 'id'), props.location.search)
  );

  const bookmarksList = useAppSelector(state => state.bookmarks.entities);
  const loading = useAppSelector(state => state.bookmarks.loading);
  const totalItems = useAppSelector(state => state.bookmarks.totalItems);

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
      <h2 id="bookmarks-heading" data-cy="BookmarksHeading">
        Bookmarks
        <div className="d-flex justify-content-end">
          <Button className="me-2" color="info" onClick={handleSyncList} disabled={loading}>
            <FontAwesomeIcon icon="sync" spin={loading} /> Refresh List
          </Button>
          <Link to="/bookmarks/new" className="btn btn-primary jh-create-entity" id="jh-create-entity" data-cy="entityCreateButton">
            <FontAwesomeIcon icon="plus" />
            &nbsp; Create new Bookmarks
          </Link>
        </div>
      </h2>
      <div className="table-responsive">
        {bookmarksList && bookmarksList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th className="hand" onClick={sort('id')}>
                  ID <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('userId')}>
                  User Id <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('topicId')}>
                  Topic Id <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('postId')}>
                  Post Id <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('name')}>
                  Name <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('reminderType')}>
                  Reminder Type <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('reminderAt')}>
                  Reminder At <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('reminderLastSentAt')}>
                  Reminder Last Sent At <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('reminderSetAt')}>
                  Reminder Set At <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('autoDeletePreference')}>
                  Auto Delete Preference <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('pinned')}>
                  Pinned <FontAwesomeIcon icon="sort" />
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {bookmarksList.map((bookmarks, i) => (
                <tr key={`entity-${i}`} data-cy="entityTable">
                  <td>
                    <Button tag={Link} to={`/bookmarks/${bookmarks.id}`} color="link" size="sm">
                      {bookmarks.id}
                    </Button>
                  </td>
                  <td>{bookmarks.userId}</td>
                  <td>{bookmarks.topicId}</td>
                  <td>{bookmarks.postId}</td>
                  <td>{bookmarks.name}</td>
                  <td>{bookmarks.reminderType}</td>
                  <td>{bookmarks.reminderAt ? <TextFormat type="date" value={bookmarks.reminderAt} format={APP_DATE_FORMAT} /> : null}</td>
                  <td>
                    {bookmarks.reminderLastSentAt ? (
                      <TextFormat type="date" value={bookmarks.reminderLastSentAt} format={APP_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>
                    {bookmarks.reminderSetAt ? <TextFormat type="date" value={bookmarks.reminderSetAt} format={APP_DATE_FORMAT} /> : null}
                  </td>
                  <td>{bookmarks.autoDeletePreference}</td>
                  <td>{bookmarks.pinned ? 'true' : 'false'}</td>
                  <td className="text-end">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`/bookmarks/${bookmarks.id}`} color="info" size="sm" data-cy="entityDetailsButton">
                        <FontAwesomeIcon icon="eye" /> <span className="d-none d-md-inline">View</span>
                      </Button>
                      <Button
                        tag={Link}
                        to={`/bookmarks/${bookmarks.id}/edit?page=${paginationState.activePage}&sort=${paginationState.sort},${paginationState.order}`}
                        color="primary"
                        size="sm"
                        data-cy="entityEditButton"
                      >
                        <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
                      </Button>
                      <Button
                        tag={Link}
                        to={`/bookmarks/${bookmarks.id}/delete?page=${paginationState.activePage}&sort=${paginationState.sort},${paginationState.order}`}
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
          !loading && <div className="alert alert-warning">No Bookmarks found</div>
        )}
      </div>
      {totalItems ? (
        <div className={bookmarksList && bookmarksList.length > 0 ? '' : 'd-none'}>
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

export default Bookmarks;
