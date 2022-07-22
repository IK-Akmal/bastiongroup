import BacketCatalog from '../components/BacketCatalog/BacketCatalog';
import Breadcrumb from '../components/Breadcrumb';
import Container from '../components/Container/Container';
import Title from '../components/Title/Title';

function Basket() {
  const { Body } = BacketCatalog;
  return (
    <BacketCatalog>

      <Container>
        <Breadcrumb>
          <Breadcrumb.Item>Главная</Breadcrumb.Item>
          <Breadcrumb.Item>Интернет магазин</Breadcrumb.Item>
          <Breadcrumb.Item>Корзина</Breadcrumb.Item>
        </Breadcrumb>
        <Title variant="h2">Корзина</Title>
        <Body />
      </Container>
    </BacketCatalog>
  );
}

export default Basket;
