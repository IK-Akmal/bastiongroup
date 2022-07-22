import Breadcrumb from '../components/Breadcrumb';
import Container from '../components/Container/Container';
import FormProductType from '../components/FormProductType/FormProductType';
import Space from '../components/Space/Space';
import Title from '../components/Title/Title';

function ProductType() {
  return (
    <Container>
      <Breadcrumb>
        <Breadcrumb.Item>Главная</Breadcrumb.Item>
        <Breadcrumb.Item>Интернет магазин</Breadcrumb.Item>
        <Breadcrumb.Item>Типы продуктов</Breadcrumb.Item>
      </Breadcrumb>
      <Title variant="h2">Типы продуктов</Title>
      <Space align="center" justifyContent="center">
        <FormProductType />
      </Space>
    </Container>
  );
}

export default ProductType;
