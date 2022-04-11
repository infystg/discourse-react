import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Table } from 'reactstrap';
import { Translate, TextFormat, getSortState, JhiPagination, JhiItemCount } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { ASC, DESC, ITEMS_PER_PAGE, SORT } from 'app/shared/util/pagination.constants';
import { overridePaginationStateWithQueryParams } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IUserStats } from 'app/shared/model/user-stats.model';
import { getEntities } from './user-stats.reducer';

export const UserStats = (props: RouteComponentProps<{ url: string }>) => {
  const dispatch = useAppDispatch();

  const [paginationState, setPaginationState] = useState(
    overridePaginationStateWithQueryParams(getSortState(props.location, ITEMS_PER_PAGE, 'id'), props.location.search)
  );

  const userStatsList = useAppSelector(state => state.userStats.entities);
  const loading = useAppSelector(state => state.userStats.loading);
  const totalItems = useAppSelector(state => state.userStats.totalItems);

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
      <h2 id="user-stats-heading" data-cy="UserStatsHeading">
        User Stats
        <div className="d-flex justify-content-end">
          <Button className="me-2" color="info" onClick={handleSyncList} disabled={loading}>
            <FontAwesomeIcon icon="sync" spin={loading} /> Refresh List
          </Button>
          <Link to="/user-stats/new" className="btn btn-primary jh-create-entity" id="jh-create-entity" data-cy="entityCreateButton">
            <FontAwesomeIcon icon="plus" />
            &nbsp; Create new User Stats
          </Link>
        </div>
      </h2>
      <div className="table-responsive">
        {userStatsList && userStatsList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th className="hand" onClick={sort('id')}>
                  ID <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('userId')}>
                  User Id <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('topicsEntered')}>
                  Topics Entered <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('timeRead')}>
                  Time Read <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('daysVisited')}>
                  Days Visited <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('postsReadCount')}>
                  Posts Read Count <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('likesGiven')}>
                  Likes Given <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('likesReceived')}>
                  Likes Received <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('newSince')}>
                  New Since <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('readFaq')}>
                  Read Faq <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('firstPostCreatedAt')}>
                  First Post Created At <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('postCount')}>
                  Post Count <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('topicCount')}>
                  Topic Count <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('bounceScore')}>
                  Bounce Score <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('resetBounceScoreAfter')}>
                  Reset Bounce Score After <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('flagsAgreed')}>
                  Flags Agreed <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('flagsDisagreed')}>
                  Flags Disagreed <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('flagsIgnored')}>
                  Flags Ignored <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('firstUnreadAt')}>
                  First Unread At <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('distinctBadgeCount')}>
                  Distinct Badge Count <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('firstUnreadPmAt')}>
                  First Unread Pm At <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('digestAttemptedAt')}>
                  Digest Attempted At <FontAwesomeIcon icon="sort" />
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {userStatsList.map((userStats, i) => (
                <tr key={`entity-${i}`} data-cy="entityTable">
                  <td>
                    <Button tag={Link} to={`/user-stats/${userStats.id}`} color="link" size="sm">
                      {userStats.id}
                    </Button>
                  </td>
                  <td>{userStats.userId}</td>
                  <td>{userStats.topicsEntered}</td>
                  <td>{userStats.timeRead}</td>
                  <td>{userStats.daysVisited}</td>
                  <td>{userStats.postsReadCount}</td>
                  <td>{userStats.likesGiven}</td>
                  <td>{userStats.likesReceived}</td>
                  <td>{userStats.newSince ? <TextFormat type="date" value={userStats.newSince} format={APP_DATE_FORMAT} /> : null}</td>
                  <td>{userStats.readFaq ? <TextFormat type="date" value={userStats.readFaq} format={APP_DATE_FORMAT} /> : null}</td>
                  <td>
                    {userStats.firstPostCreatedAt ? (
                      <TextFormat type="date" value={userStats.firstPostCreatedAt} format={APP_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>{userStats.postCount}</td>
                  <td>{userStats.topicCount}</td>
                  <td>{userStats.bounceScore}</td>
                  <td>
                    {userStats.resetBounceScoreAfter ? (
                      <TextFormat type="date" value={userStats.resetBounceScoreAfter} format={APP_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>{userStats.flagsAgreed}</td>
                  <td>{userStats.flagsDisagreed}</td>
                  <td>{userStats.flagsIgnored}</td>
                  <td>
                    {userStats.firstUnreadAt ? <TextFormat type="date" value={userStats.firstUnreadAt} format={APP_DATE_FORMAT} /> : null}
                  </td>
                  <td>{userStats.distinctBadgeCount}</td>
                  <td>
                    {userStats.firstUnreadPmAt ? (
                      <TextFormat type="date" value={userStats.firstUnreadPmAt} format={APP_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>
                    {userStats.digestAttemptedAt ? (
                      <TextFormat type="date" value={userStats.digestAttemptedAt} format={APP_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td className="text-end">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`/user-stats/${userStats.id}`} color="info" size="sm" data-cy="entityDetailsButton">
                        <FontAwesomeIcon icon="eye" /> <span className="d-none d-md-inline">View</span>
                      </Button>
                      <Button
                        tag={Link}
                        to={`/user-stats/${userStats.id}/edit?page=${paginationState.activePage}&sort=${paginationState.sort},${paginationState.order}`}
                        color="primary"
                        size="sm"
                        data-cy="entityEditButton"
                      >
                        <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
                      </Button>
                      <Button
                        tag={Link}
                        to={`/user-stats/${userStats.id}/delete?page=${paginationState.activePage}&sort=${paginationState.sort},${paginationState.order}`}
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
          !loading && <div className="alert alert-warning">No User Stats found</div>
        )}
      </div>
      {totalItems ? (
        <div className={userStatsList && userStatsList.length > 0 ? '' : 'd-none'}>
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

export default UserStats;
