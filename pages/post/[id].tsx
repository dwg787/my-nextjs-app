import { useRouter } from 'next/router';
import React from 'react';

const Post = () => {
  const router = useRouter();
  const { id } = router.query;
  return <div>Post:{id}</div>;
};

export default Post;

export async function getServerSideProps() {
  return {
    props: {},
  };
}
