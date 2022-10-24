import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hi, I'm Dmitrii. I'm interested in Web Development (mostly Front-End
          with a bit of Back-End) and constantly learning it.
        </p>
        <p>
          This is a blog made with{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://nextjs.org/learn"
          >
            Next.js tutorial
          </a>
          . It has some of my articles from{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://medium.com/@dimterion"
          >
            Medium
          </a>
          .
        </p>
        <p>
          You can also check my{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Dimterion"
          >
            GitHub
          </a>{" "}
          and{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/Dimterion"
          >
            Twitter
          </a>{" "}
          profiles.
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
