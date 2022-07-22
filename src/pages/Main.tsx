import Breadcrumb from '../components/Breadcrumb';
import Catalog from '../components/Catalog/Catalog';
import Container from '../components/Container/Container';

function Main() {
  const { Body, Head } = Catalog;

  return (
    <Catalog>
      <Container>
        <Breadcrumb>
          <Breadcrumb.Item>Главная</Breadcrumb.Item>
          <Breadcrumb.Item>Интернет магазин</Breadcrumb.Item>
          <Breadcrumb.Item>Опоры трубопроводов</Breadcrumb.Item>
        </Breadcrumb>
        <Head />
        <Body />
      </Container>
    </Catalog>
  );
}
export default Main;
