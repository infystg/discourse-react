import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Table } from 'reactstrap';
import { Translate, TextFormat, getSortState, JhiPagination, JhiItemCount } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { ASC, DESC, ITEMS_PER_PAGE, SORT } from 'app/shared/util/pagination.constants';
import { overridePaginationStateWithQueryParams } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { ITopicUsers } from 'app/shared/model/topic-users.model';
import { getEntities } from './topic-users.reducer';

export const TopicUsers = (props: RouteComponentProps<{ url: string }>) => {
  const dispatch = useAppDispatch();

  const [paginationState, setPaginationState] = useState(
    overridePaginationStateWithQueryParams(getSortState(props.location, ITEMS_PER_PAGE, 'id'), props.location.search)
  );

  const topicUsersList = useAppSelector(state => state.topicUsers.entities);
  const loading = useAppSelector(state => state.topicUsers.loading);
  const totalItems = useAppSelector(state => state.topicUsers.totalItems);

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
      <h2 id="topic-users-heading" data-cy="TopicUsersHeading">
        Topic Users
        <div className="d-flex justify-content-end">
          <Button className="me-2" color="info" onClick={handleSyncList} disabled={loading}>
            <FontAwesomeIcon icon="sync" spin={loading} /> Refresh List
          </Button>
          <Link to="/topic-users/new" className="btn btn-primary jh-create-entity" id="jh-create-entity" data-cy="entityCreateButton">
            <FontAwesomeIcon icon="plus" />
            &nbsp; Create new Topic Users
          </Link>
        </div>
      </h2>
      <div className="table-responsive">
        {topicUsersList && topicUsersList.length > 0 ? (
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
                <th className="hand" onClick={sort('posted')}>
                  Posted <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('lastReadPostNumber')}>
                  Last Read Post Number <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('highestSeenPostNumber')}>
                  Highest Seen Post Number <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('lastVisitedAt')}>
                  Last Visited At <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('firstVisitedAt')}>
                  First Visited At <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('notificationLevel')}>
                  Notification Level <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('notificationsChangedAt')}>
                  Notifications Changed At <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('notificationsReasonId')}>
                  Notifications Reason Id <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('totalMsecsViewed')}>
                  Total Msecs Viewed <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('clearedPinnedAt')}>
                  Cleared Pinned At <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('lastEmailedPostNumber')}>
                  Last Emailed Post Number <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('liked')}>
                  Liked <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('bookmarked')}>
                  Bookmarked <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('lastPostedAt')}>
                  Last Posted At <FontAwesomeIcon icon="sort" />
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {topicUsersList.map((topicUsers, i) => (
                <tr key={`entity-${i}`} data-cy="entityTable">
                  <td>
                    <Button tag={Link} to={`/topic-users/${topicUsers.id}`} color="link" size="sm">
                      {topicUsers.id}
                    </Button>
                  </td>
                  <td>{topicUsers.userId}</td>
                  <td>{topicUsers.topicId}</td>
                  <td>{topicUsers.posted ? 'true' : 'false'}</td>
                  <td>{topicUsers.lastReadPostNumber}</td>
                  <td>{topicUsers.highestSeenPostNumber}</td>
                  <td>
                    {topicUsers.lastVisitedAt ? <TextFormat type="date" value={topicUsers.lastVisitedAt} format={APP_DATE_FORMAT} /> : null}
                  </td>
                  <td>
                    {topicUsers.firstVisitedAt ? (
                      <TextFormat type="date" value={topicUsers.firstVisitedAt} format={APP_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>{topicUsers.notificationLevel}</td>
                  <td>
                    {topicUsers.notificationsChangedAt ? (
                      <TextFormat type="date" value={topicUsers.notificationsChangedAt} format={APP_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>{topicUsers.notificationsReasonId}</td>
                  <td>{topicUsers.totalMsecsViewed}</td>
                  <td>
                    {topicUsers.clearedPinnedAt ? (
                      <TextFormat type="date" value={topicUsers.clearedPinnedAt} format={APP_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>{topicUsers.lastEmailedPostNumber}</td>
                  <td>{topicUsers.liked ? 'true' : 'false'}</td>
                  <td>{topicUsers.bookmarked ? 'true' : 'false'}</td>
                  <td>
                    {topicUsers.lastPostedAt ? <TextFormat type="date" value={topicUsers.lastPostedAt} format={APP_DATE_FORMAT} /> : null}
                  </td>
                  <td className="text-end">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`/topic-users/${topicUsers.id}`} color="info" size="sm" data-cy="entityDetailsButton">
                        <FontAwesomeIcon icon="eye" /> <span className="d-none d-md-inline">View</span>
                      </Button>
                      <Button
                        tag={Link}
                        to={`/topic-users/${topicUsers.id}/edit?page=${paginationState.activePage}&sort=${paginationState.sort},${paginationState.order}`}
                        color="primary"
                        size="sm"
                        data-cy="entityEditButton"
                      >
                        <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
                      </Button>
                      <Button
                        tag={Link}
                        to={`/topic-users/${topicUsers.id}/delete?page=${paginationState.activePage}&sort=${paginationState.sort},${paginationState.order}`}
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
          !loading && <div className="alert alert-warning">No Topic Users found</div>
        )}
      </div>
      {totalItems ? (
        <div className={topicUsersList && topicUsersList.length > 0 ? '' : 'd-none'}>
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

export default TopicUsers;
