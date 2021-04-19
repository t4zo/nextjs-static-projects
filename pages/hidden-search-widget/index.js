import { useEffect } from 'react';
import Layout from '../../components/Layout';
import vanillaJs from './vanillaJs';

export default function HiddenSearchWidget() {
  useEffect(() => {
    vanillaJs();
  }, []);

  return (
    <Layout title='Hidden Search Widget'>
      <main className='hsw-main'>
        <h1>Starter</h1>
      </main>
    </Layout>
  );
}