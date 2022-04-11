import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Table } from 'reactstrap';
import { Translate, TextFormat, getSortState, JhiPagination, JhiItemCount } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { ASC, DESC, ITEMS_PER_PAGE, SORT } from 'app/shared/util/pagination.constants';
import { overridePaginationStateWithQueryParams } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IPostActions } from 'app/shared/model/post-actions.model';
import { getEntities } from './post-actions.reducer';

export const PostActions = (props: RouteComponentProps<{ url: string }>) => {
  const dispatch = useAppDispatch();

  const [paginationState, setPaginationState] = useState(
    overridePaginationStateWithQueryParams(getSortState(props.location, ITEMS_PER_PAGE, 'id'), props.location.search)
  );

  const postActionsList = useAppSelector(state => state.postActions.entities);
  const loading = useAppSelector(state => state.postActions.loading);
  const totalItems = useAppSelector(state => state.postActions.totalItems);

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
      <h2 id="post-actions-heading" data-cy="PostActionsHeading">
        Post Actions
        <div className="d-flex justify-content-end">
          <Button className="me-2" color="info" onClick={handleSyncList} disabled={loading}>
            <FontAwesomeIcon icon="sync" spin={loading} /> Refresh List
          </Button>
          <Link to="/post-actions/new" className="btn btn-primary jh-create-entity" id="jh-create-entity" data-cy="entityCreateButton">
            <FontAwesomeIcon icon="plus" />
            &nbsp; Create new Post Actions
          </Link>
        </div>
      </h2>
      <div className="table-responsive">
        {postActionsList && postActionsList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th className="hand" onClick={sort('id')}>
                  ID <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('postId')}>
                  Post Id <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('userId')}>
                  User Id <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('postActionTypeId')}>
                  Post Action Type Id <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('deletedAt')}>
                  Deleted At <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('deletedById')}>
                  Deleted By Id <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('relatedPostId')}>
                  Related Post Id <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('staffTookAction')}>
                  Staff Took Action <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('deferredById')}>
                  Deferred By Id <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('targetsTopic')}>
                  Targets Topic <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('agreedAt')}>
                  Agreed At <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('agreedById')}>
                  Agreed By Id <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('deferredAt')}>
                  Deferred At <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('disagreedAt')}>
                  Disagreed At <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('disagreedById')}>
                  Disagreed By Id <FontAwesomeIcon icon="sort" />
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {postActionsList.map((postActions, i) => (
                <tr key={`entity-${i}`} data-cy="entityTable">
                  <td>
                    <Button tag={Link} to={`/post-actions/${postActions.id}`} color="link" size="sm">
                      {postActions.id}
                    </Button>
                  </td>
                  <td>{postActions.postId}</td>
                  <td>{postActions.userId}</td>
                  <td>{postActions.postActionTypeId}</td>
                  <td>
                    {postActions.deletedAt ? <TextFormat type="date" value={postActions.deletedAt} format={APP_DATE_FORMAT} /> : null}
                  </td>
                  <td>{postActions.deletedById}</td>
                  <td>{postActions.relatedPostId}</td>
                  <td>{postActions.staffTookAction ? 'true' : 'false'}</td>
                  <td>{postActions.deferredById}</td>
                  <td>{postActions.targetsTopic ? 'true' : 'false'}</td>
                  <td>{postActions.agreedAt ? <TextFormat type="date" value={postActions.agreedAt} format={APP_DATE_FORMAT} /> : null}</td>
                  <td>{postActions.agreedById}</td>
                  <td>
                    {postActions.deferredAt ? <TextFormat type="date" value={postActions.deferredAt} format={APP_DATE_FORMAT} /> : null}
                  </td>
                  <td>
                    {postActions.disagreedAt ? <TextFormat type="date" value={postActions.disagreedAt} format={APP_DATE_FORMAT} /> : null}
                  </td>
                  <td>{postActions.disagreedById}</td>
                  <td className="text-end">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`/post-actions/${postActions.id}`} color="info" size="sm" data-cy="entityDetailsButton">
                        <FontAwesomeIcon icon="eye" /> <span className="d-none d-md-inline">View</span>
                      </Button>
                      <Button
                        tag={Link}
                        to={`/post-actions/${postActions.id}/edit?page=${paginationState.activePage}&sort=${paginationState.sort},${paginationState.order}`}
                        color="primary"
                        size="sm"
                        data-cy="entityEditButton"
                      >
                        <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
                      </Button>
                      <Button
                        tag={Link}
                        to={`/post-actions/${postActions.id}/delete?page=${paginationState.activePage}&sort=${paginationState.sort},${paginationState.order}`}
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
          !loading && <div className="alert alert-warning">No Post Actions found</div>
        )}
      </div>
      {totalItems ? (
        <div className={postActionsList && postActionsList.length > 0 ? '' : 'd-none'}>
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

export default PostActions;
