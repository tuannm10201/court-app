import { Container } from 'reactstrap';
import Footer from '../Common/Footer';
import Header from '../Common/Header';
import { Outlet } from 'react-router';

type Props = {};

export default function MainLayout({}: Props) {
  return (
    <>
      <Header />
      <Container className="my-3 mb-lg-5">
        <Outlet />
      </Container>
      <Footer />
    </>
  );
}
