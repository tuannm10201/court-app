import { Container } from 'reactstrap';
import Header from '../components/Home/Header';

type Props = {};

export default function Home({}: Props) {
  return (
    <>
      <Header />
      <Container className="main-content">Content</Container>
    </>
  );
}
