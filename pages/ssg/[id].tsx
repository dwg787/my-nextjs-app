import { useRouter } from 'next/router';

const Post = ({ post }: { post: any }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      Post:{router.asPath}
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export default Post;

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: '1' } },
      { params: { id: '2' } },
      { params: { id: '3' } },
    ],
    fallback: 'blocking', //paths 안에 있는 값  이외의 값이 들어가면 404를 띄워라
  };
}

export async function getStaticProps(context: any) {
  const { id } = context.params;

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
    // `http://localhost:3001/posts/${id}`
  );
  const post = await response.json();

  return {
    props: {
      post,
    },
    revalidate: 5,
  };
}
