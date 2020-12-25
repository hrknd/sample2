import React from 'react';
import Layout from '../../../components/common/layout';

const Bookmark = () => {
  let foo: string = 'React';
  const bar: string = 'TypeScript';

  return (
    <Layout title="testReact">
      <p>
        Bookmark {foo} + {bar}
      </p>
    </Layout>
  );
};

export default Bookmark;
