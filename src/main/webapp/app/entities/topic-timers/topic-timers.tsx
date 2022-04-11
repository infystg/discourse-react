import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Table } from 'reactstrap';
import { Translate, TextFormat, getSortState, JhiPagination, JhiItemCount } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { ASC, DESC, ITEMS_PER_PAGE, SORT } from 'app/shared/util/pagination.constants';
import { overridePaginationStateWithQueryParams } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { ITopicTimers } from 'app/shared/model/topic-timers.model';
import { getEntities } from './topic-timers.reducer';

export const TopicTimers = (props: RouteComponentProps<{ url: string }>) => {
  const dispatch = useAppDispatch();

  const [paginationState, setPaginationState] = useState(
    overridePaginationStateWithQueryParams(getSortState(props.location, ITEMS_PER_PAGE, 'id'), props.location.search)
  );

  const topicTimersList = useAppSelector(state => state.topicTimers.entities);
  const loading = useAppSelector(state => state.topicTimers.loading);
  const totalItems = useAppSelector(state => state.topicTimers.totalItems);

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
      <h2 id="topic-timers-heading" data-cy="TopicTimersHeading">
        Topic Timers
        <div className="d-flex justify-content-end">
          <Button className="me-2" color="info" onClick={handleSyncList} disabled={loading}>
            <FontAwesomeIcon icon="sync" spin={loading} /> Refresh List
          </Button>
          <Link to="/topic-timers/new" className="btn btn-primary jh-create-entity" id="jh-create-entity" data-cy="entityCreateButton">
            <FontAwesomeIcon icon="plus" />
            &nbsp; Create new Topic Timers
          </Link>
        </div>
      </h2>
      <div className="table-responsive">
        {topicTimersList && topicTimersList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th className="hand" onClick={sort('id')}>
                  ID <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('executeAt')}>
                  Execute At <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('statusType')}>
                  Status Type <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('userId')}>
                  User Id <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('topicId')}>
                  Topic Id <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('basedOnLastPost')}>
                  Based On Last Post <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('deletedAt')}>
                  Deleted At <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('deletedById')}>
                  Deleted By Id <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('categoryId')}>
                  Category Id <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('publicType')}>
                  Public Type <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('duration')}>
                  Duration <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('durationMinutes')}>
                  Duration Minutes <FontAwesomeIcon icon="sort" />
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {topicTimersList.map((topicTimers, i) => (
                <tr key={`entity-${i}`} data-cy="entityTable">
                  <td>
                    <Button tag={Link} to={`/topic-timers/${topicTimers.id}`} color="link" size="sm">
                      {topicTimers.id}
                    </Button>
                  </td>
                  <td>
                    {topicTimers.executeAt ? <TextFormat type="date" value={topicTimers.executeAt} format={APP_DATE_FORMAT} /> : null}
                  </td>
                  <td>{topicTimers.statusType}</td>
                  <td>{topicTimers.userId}</td>
                  <td>{topicTimers.topicId}</td>
                  <td>{topicTimers.basedOnLastPost ? 'true' : 'false'}</td>
                  <td>
                    {topicTimers.deletedAt ? <TextFormat type="date" value={topicTimers.deletedAt} format={APP_DATE_FORMAT} /> : null}
                  </td>
                  <td>{topicTimers.deletedById}</td>
                  <td>{topicTimers.categoryId}</td>
                  <td>{topicTimers.publicType ? 'true' : 'false'}</td>
                  <td>{topicTimers.duration}</td>
                  <td>{topicTimers.durationMinutes}</td>
                  <td className="text-end">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`/topic-timers/${topicTimers.id}`} color="info" size="sm" data-cy="entityDetailsButton">
                        <FontAwesomeIcon icon="eye" /> <span className="d-none d-md-inline">View</span>
                      </Button>
                      <Button
                        tag={Link}
                        to={`/topic-timers/${topicTimers.id}/edit?page=${paginationState.activePage}&sort=${paginationState.sort},${paginationState.order}`}
                        color="primary"
                        size="sm"
                        data-cy="entityEditButton"
                      >
                        <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
                      </Button>
                      <Button
                        tag={Link}
                        to={`/topic-timers/${topicTimers.id}/delete?page=${paginationState.activePage}&sort=${paginationState.sort},${paginationState.order}`}
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
          !loading && <div className="alert alert-warning">No Topic Timers found</div>
        )}
      </div>
      {totalItems ? (
        <div className={topicTimersList && topicTimersList.length > 0 ? '' : 'd-none'}>
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

export default TopicTimers;
