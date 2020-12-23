import React from 'react';
import Layout from '../../components/common/layout';

const Home = () => {
  let foo: string = 'React';
  const bar: string = 'TypeScript';

  return (
    <Layout title="testReact">
      <p>
        Hello {foo} + {bar}
      </p>
    </Layout>
  );
};

export default Home;
