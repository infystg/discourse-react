import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Table } from 'reactstrap';
import { Translate, getSortState, JhiPagination, JhiItemCount } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { ASC, DESC, ITEMS_PER_PAGE, SORT } from 'app/shared/util/pagination.constants';
import { overridePaginationStateWithQueryParams } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { ITopTopics } from 'app/shared/model/top-topics.model';
import { getEntities } from './top-topics.reducer';

export const TopTopics = (props: RouteComponentProps<{ url: string }>) => {
  const dispatch = useAppDispatch();

  const [paginationState, setPaginationState] = useState(
    overridePaginationStateWithQueryParams(getSortState(props.location, ITEMS_PER_PAGE, 'id'), props.location.search)
  );

  const topTopicsList = useAppSelector(state => state.topTopics.entities);
  const loading = useAppSelector(state => state.topTopics.loading);
  const totalItems = useAppSelector(state => state.topTopics.totalItems);

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
      <h2 id="top-topics-heading" data-cy="TopTopicsHeading">
        Top Topics
        <div className="d-flex justify-content-end">
          <Button className="me-2" color="info" onClick={handleSyncList} disabled={loading}>
            <FontAwesomeIcon icon="sync" spin={loading} /> Refresh List
          </Button>
          <Link to="/top-topics/new" className="btn btn-primary jh-create-entity" id="jh-create-entity" data-cy="entityCreateButton">
            <FontAwesomeIcon icon="plus" />
            &nbsp; Create new Top Topics
          </Link>
        </div>
      </h2>
      <div className="table-responsive">
        {topTopicsList && topTopicsList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th className="hand" onClick={sort('id')}>
                  ID <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('topicId')}>
                  Topic Id <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('yearlyPostsCount')}>
                  Yearly Posts Count <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('yearlyViewsCount')}>
                  Yearly Views Count <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('yearlyLikesCount')}>
                  Yearly Likes Count <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('monthlyPostsCount')}>
                  Monthly Posts Count <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('monthlyViewsCount')}>
                  Monthly Views Count <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('monthlyLikesCount')}>
                  Monthly Likes Count <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('weeklyPostsCount')}>
                  Weekly Posts Count <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('weeklyViewsCount')}>
                  Weekly Views Count <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('weeklyLikesCount')}>
                  Weekly Likes Count <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('dailyPostsCount')}>
                  Daily Posts Count <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('dailyViewsCount')}>
                  Daily Views Count <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('dailyLikesCount')}>
                  Daily Likes Count <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('dailyScore')}>
                  Daily Score <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('weeklyScore')}>
                  Weekly Score <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('monthlyScore')}>
                  Monthly Score <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('yearlyScore')}>
                  Yearly Score <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('allScore')}>
                  All Score <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('dailyOpLikesCount')}>
                  Daily Op Likes Count <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('weeklyOpLikesCount')}>
                  Weekly Op Likes Count <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('monthlyOpLikesCount')}>
                  Monthly Op Likes Count <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('yearlyOpLikesCount')}>
                  Yearly Op Likes Count <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('quarterlyPostsCount')}>
                  Quarterly Posts Count <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('quarterlyViewsCount')}>
                  Quarterly Views Count <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('quarterlyLikesCount')}>
                  Quarterly Likes Count <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('quarterlyScore')}>
                  Quarterly Score <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('quarterlyOpLikesCount')}>
                  Quarterly Op Likes Count <FontAwesomeIcon icon="sort" />
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {topTopicsList.map((topTopics, i) => (
                <tr key={`entity-${i}`} data-cy="entityTable">
                  <td>
                    <Button tag={Link} to={`/top-topics/${topTopics.id}`} color="link" size="sm">
                      {topTopics.id}
                    </Button>
                  </td>
                  <td>{topTopics.topicId}</td>
                  <td>{topTopics.yearlyPostsCount}</td>
                  <td>{topTopics.yearlyViewsCount}</td>
                  <td>{topTopics.yearlyLikesCount}</td>
                  <td>{topTopics.monthlyPostsCount}</td>
                  <td>{topTopics.monthlyViewsCount}</td>
                  <td>{topTopics.monthlyLikesCount}</td>
                  <td>{topTopics.weeklyPostsCount}</td>
                  <td>{topTopics.weeklyViewsCount}</td>
                  <td>{topTopics.weeklyLikesCount}</td>
                  <td>{topTopics.dailyPostsCount}</td>
                  <td>{topTopics.dailyViewsCount}</td>
                  <td>{topTopics.dailyLikesCount}</td>
                  <td>{topTopics.dailyScore}</td>
                  <td>{topTopics.weeklyScore}</td>
                  <td>{topTopics.monthlyScore}</td>
                  <td>{topTopics.yearlyScore}</td>
                  <td>{topTopics.allScore}</td>
                  <td>{topTopics.dailyOpLikesCount}</td>
                  <td>{topTopics.weeklyOpLikesCount}</td>
                  <td>{topTopics.monthlyOpLikesCount}</td>
                  <td>{topTopics.yearlyOpLikesCount}</td>
                  <td>{topTopics.quarterlyPostsCount}</td>
                  <td>{topTopics.quarterlyViewsCount}</td>
                  <td>{topTopics.quarterlyLikesCount}</td>
                  <td>{topTopics.quarterlyScore}</td>
                  <td>{topTopics.quarterlyOpLikesCount}</td>
                  <td className="text-end">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`/top-topics/${topTopics.id}`} color="info" size="sm" data-cy="entityDetailsButton">
                        <FontAwesomeIcon icon="eye" /> <span className="d-none d-md-inline">View</span>
                      </Button>
                      <Button
                        tag={Link}
                        to={`/top-topics/${topTopics.id}/edit?page=${paginationState.activePage}&sort=${paginationState.sort},${paginationState.order}`}
                        color="primary"
                        size="sm"
                        data-cy="entityEditButton"
                      >
                        <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
                      </Button>
                      <Button
                        tag={Link}
                        to={`/top-topics/${topTopics.id}/delete?page=${paginationState.activePage}&sort=${paginationState.sort},${paginationState.order}`}
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
          !loading && <div className="alert alert-warning">No Top Topics found</div>
        )}
      </div>
      {totalItems ? (
        <div className={topTopicsList && topTopicsList.length > 0 ? '' : 'd-none'}>
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

export default TopTopics;
