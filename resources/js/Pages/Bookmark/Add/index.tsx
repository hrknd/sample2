import { Inertia } from '@inertiajs/inertia';
import React, { useState } from 'react';
import Layout from '../../../components/common/layout';

interface Props {}

const BookmarkAddPage: React.FC<Props> = () => {
  const [state, setState] = useState({
    link: '',
    title: 'Some headcoded title',
  });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };
  const handlSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    Inertia.post('/bookmark/preview', state);
  };
  return (
    <Layout>
      <div className="row">
        <div className="col-sm-8">
          <form onSubmit={handlSubmit}>
            <div className="form-group">
              <label htmlFor="link">Link</label>
              <input
                type="text"
                name="link"
                className="form-control"
                onChange={handleChange}
              />
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default BookmarkAddPage;
