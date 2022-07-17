import OriginBreadcrumb from './Breadcrumb';
import Item from './Item/Item';

export type BreadcrumbProps = typeof OriginBreadcrumb & {
  Item: typeof Item;
};

const Breadcrumb = OriginBreadcrumb as BreadcrumbProps;
Breadcrumb.Item = Item;

export default Breadcrumb;
