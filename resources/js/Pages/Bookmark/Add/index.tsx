import { Inertia } from '@inertiajs/inertia';
import React, { useState } from 'react';
import Layout from '../../../components/common/layout';
import Loader from '../../../components/common/loader';

interface Props {}

const BookmarkAddPage: React.FC<Props> = () => {
  const [state, setState] = useState({
    query: '',
    showLoader: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    Inertia.post('/bookmark/preview', state, {
      onStart: () => {
        setState({ ...state, showLoader: true });
      },
    });
  };

  return (
    <Layout>
      <div className="row">
        <div className="col-sm-8">
          {state.showLoader ? (
            <Loader />
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="query">検索テキスト </label>
                <input
                  type="text"
                  name="query"
                  value={state.query}
                  className="form-control"
                  onChange={handleChange}
                />
              </div>
            </form>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default BookmarkAddPage;
