import { Inertia } from '@inertiajs/inertia';
import React, { useState } from 'react';
import { ActionMeta, OptionTypeBase, ValueType } from 'react-select';
import AsyncCreatableSelect from 'react-select/async-creatable';
import Layout from '../../../components/common/layout';
import Loader from '../../../components/common/loader';

interface Props {}
interface ISelectOption extends OptionTypeBase {}

interface IState {
  link: string;
  title: string;
  showLoader: boolean;
  tags: ValueType<ISelectOption, true>;
}

const defaultOptions: ValueType<ISelectOption, true> = [
  { label: 'Amitav', value: 'Amitav' },
];

const BookmarkAddPage: React.FC<Props> = () => {
  const [state, setState] = useState<IState>({
    link: '',
    title: 'Some headcoded title',
    showLoader: false,
    tags: defaultOptions,
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
                <label htmlFor="link">Link</label>
                <input
                  type="text"
                  name="link"
                  value={state.link}
                  className="form-control"
                  onChange={handleChange}
                />
              </div>
              <div>
                <p>Tags:</p>
                <AsyncCreatableSelect
                  value={state.tags}
                  getOptionLabel={(e) => e.label}
                  getOptionValue={(e) => e.value}
                  defaultOptions={defaultOptions}
                  loadOptions={(value) => {
                    return fetch(`/api/tags?tag=${value}`)
                      .then((response) => response.json())
                      .then((data) => {
                        return data.map((tag: { name: string }) => {
                          return { label: tag.name, value: tag.name };
                        });
                      });
                  }}
                  onChange={(
                    value: ValueType<ISelectOption, true>,
                    action: ActionMeta<OptionTypeBase>,
                  ) => setState({ ...state, tags: value })}
                  isMulti
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
