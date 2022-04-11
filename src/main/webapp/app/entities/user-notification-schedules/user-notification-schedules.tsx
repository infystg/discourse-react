import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Table } from 'reactstrap';
import { Translate, getSortState, JhiPagination, JhiItemCount } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { ASC, DESC, ITEMS_PER_PAGE, SORT } from 'app/shared/util/pagination.constants';
import { overridePaginationStateWithQueryParams } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IUserNotificationSchedules } from 'app/shared/model/user-notification-schedules.model';
import { getEntities } from './user-notification-schedules.reducer';

export const UserNotificationSchedules = (props: RouteComponentProps<{ url: string }>) => {
  const dispatch = useAppDispatch();

  const [paginationState, setPaginationState] = useState(
    overridePaginationStateWithQueryParams(getSortState(props.location, ITEMS_PER_PAGE, 'id'), props.location.search)
  );

  const userNotificationSchedulesList = useAppSelector(state => state.userNotificationSchedules.entities);
  const loading = useAppSelector(state => state.userNotificationSchedules.loading);
  const totalItems = useAppSelector(state => state.userNotificationSchedules.totalItems);

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
      <h2 id="user-notification-schedules-heading" data-cy="UserNotificationSchedulesHeading">
        User Notification Schedules
        <div className="d-flex justify-content-end">
          <Button className="me-2" color="info" onClick={handleSyncList} disabled={loading}>
            <FontAwesomeIcon icon="sync" spin={loading} /> Refresh List
          </Button>
          <Link
            to="/user-notification-schedules/new"
            className="btn btn-primary jh-create-entity"
            id="jh-create-entity"
            data-cy="entityCreateButton"
          >
            <FontAwesomeIcon icon="plus" />
            &nbsp; Create new User Notification Schedules
          </Link>
        </div>
      </h2>
      <div className="table-responsive">
        {userNotificationSchedulesList && userNotificationSchedulesList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th className="hand" onClick={sort('id')}>
                  ID <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('userId')}>
                  User Id <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('enabled')}>
                  Enabled <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('day0StartTime')}>
                  Day 0 Start Time <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('day0EndTime')}>
                  Day 0 End Time <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('day1StartTime')}>
                  Day 1 Start Time <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('day1EndTime')}>
                  Day 1 End Time <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('day2StartTime')}>
                  Day 2 Start Time <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('day2EndTime')}>
                  Day 2 End Time <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('day3StartTime')}>
                  Day 3 Start Time <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('day3EndTime')}>
                  Day 3 End Time <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('day4StartTime')}>
                  Day 4 Start Time <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('day4EndTime')}>
                  Day 4 End Time <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('day5StartTime')}>
                  Day 5 Start Time <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('day5EndTime')}>
                  Day 5 End Time <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('day6StartTime')}>
                  Day 6 Start Time <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('day6EndTime')}>
                  Day 6 End Time <FontAwesomeIcon icon="sort" />
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {userNotificationSchedulesList.map((userNotificationSchedules, i) => (
                <tr key={`entity-${i}`} data-cy="entityTable">
                  <td>
                    <Button tag={Link} to={`/user-notification-schedules/${userNotificationSchedules.id}`} color="link" size="sm">
                      {userNotificationSchedules.id}
                    </Button>
                  </td>
                  <td>{userNotificationSchedules.userId}</td>
                  <td>{userNotificationSchedules.enabled ? 'true' : 'false'}</td>
                  <td>{userNotificationSchedules.day0StartTime}</td>
                  <td>{userNotificationSchedules.day0EndTime}</td>
                  <td>{userNotificationSchedules.day1StartTime}</td>
                  <td>{userNotificationSchedules.day1EndTime}</td>
                  <td>{userNotificationSchedules.day2StartTime}</td>
                  <td>{userNotificationSchedules.day2EndTime}</td>
                  <td>{userNotificationSchedules.day3StartTime}</td>
                  <td>{userNotificationSchedules.day3EndTime}</td>
                  <td>{userNotificationSchedules.day4StartTime}</td>
                  <td>{userNotificationSchedules.day4EndTime}</td>
                  <td>{userNotificationSchedules.day5StartTime}</td>
                  <td>{userNotificationSchedules.day5EndTime}</td>
                  <td>{userNotificationSchedules.day6StartTime}</td>
                  <td>{userNotificationSchedules.day6EndTime}</td>
                  <td className="text-end">
                    <div className="btn-group flex-btn-group-container">
                      <Button
                        tag={Link}
                        to={`/user-notification-schedules/${userNotificationSchedules.id}`}
                        color="info"
                        size="sm"
                        data-cy="entityDetailsButton"
                      >
                        <FontAwesomeIcon icon="eye" /> <span className="d-none d-md-inline">View</span>
                      </Button>
                      <Button
                        tag={Link}
                        to={`/user-notification-schedules/${userNotificationSchedules.id}/edit?page=${paginationState.activePage}&sort=${paginationState.sort},${paginationState.order}`}
                        color="primary"
                        size="sm"
                        data-cy="entityEditButton"
                      >
                        <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
                      </Button>
                      <Button
                        tag={Link}
                        to={`/user-notification-schedules/${userNotificationSchedules.id}/delete?page=${paginationState.activePage}&sort=${paginationState.sort},${paginationState.order}`}
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
          !loading && <div className="alert alert-warning">No User Notification Schedules found</div>
        )}
      </div>
      {totalItems ? (
        <div className={userNotificationSchedulesList && userNotificationSchedulesList.length > 0 ? '' : 'd-none'}>
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

export default UserNotificationSchedules;
