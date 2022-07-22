import Breadcrumb from '../components/Breadcrumb';
import Container from '../components/Container/Container';
import FormProduct from '../components/FormProduct/FormProduct';
import Space from '../components/Space/Space';
import Title from '../components/Title/Title';

function Products() {
  return (
    <Container>
      <Breadcrumb>
        <Breadcrumb.Item>Главная</Breadcrumb.Item>
        <Breadcrumb.Item>Интернет магазин</Breadcrumb.Item>
        <Breadcrumb.Item>Продукты</Breadcrumb.Item>
      </Breadcrumb>
      <Title variant="h2">Продукты</Title>
      <Space align="center" justifyContent="center">
        <FormProduct />
      </Space>
    </Container>
  );
}

export default Products;
