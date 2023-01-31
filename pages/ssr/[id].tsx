import { useRouter } from 'next/router';
import React from 'react';

const Post = ({ post }: { post: any }) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      Post:{id}
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export default Post;

export async function getServerSideProps(context: any) {
  const { params } = context;
  const { id } = params;

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  const post = await response.json();

  return {
    props: {
      post,
    },
  };
}
