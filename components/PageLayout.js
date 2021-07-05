import { Container } from "react-bootstrap";
// this is how you add head elements in nextjs
import Head from "next/head";
import BlogNavbar from "./Navbar";

export default function PageLayout({ children, className }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Ovo&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Container>
        <BlogNavbar />
        <div className={`page-wrapper ${className}`}>{children}</div>
        <footer className="page-footer">
          <div>
            <a href="#">courses</a>
            {" | "}
            <a href="#">github</a>
            {" | "}
            <a href="#">facebook</a>
          </div>
        </footer>
      </Container>
    </>
  );
}
