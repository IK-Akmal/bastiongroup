import Accordion from '../Accordion/Accordion';
import Category from './Components/Category/Category';
import styles from './Categories.module.scss';
import { ReactComponent as Application } from './icon/all-application-icon.svg';

const categories = [
  {
    id: 1,
    series: 'Серия 5.904-1 выпуск 1:',
    description: 'Детали крепления воздуховодов',
    count: 95,
  },
  {
    id: 2,
    series: 'Серия 4.903-10 Выпуск 4,5,6:',
    description: 'Изделия и детали трубопроводов для тепловых сетей',
    count: 15,
  },
  {
    id: 3,
    series: 'Серия 4.900-9 Выпуск 1:',
    description: 'Узлы и детали трубопроводов из пластмассовых труб для систем водоснабжения и канализации',
    count: 247,
  },
  {
    id: 4,
    series: 'Серия 3.900-9:',
    description: 'Опорные конструкции и средства крепления трубопроводов',
    count: 2,
  },
  {
    id: 5,
    series: 'Л8-508.000 - Л8-524.000:',
    description: 'Опоры и подвески трубопроводов Дн<89мм',
    count: 15,
  },
  {
    id: 6,
    series: 'Л8-138.000 - Л8-200.000:',
    description: 'Опоры и подвески станционных трубопроводов',
    count: 247,
  },
];

function Categories() {
  return (
    <Accordion name="Категории" prefix={<Application />}>
      <div className={styles.wrapper}>
        {categories.map((category) => <Category key={category.id} {...category} />)}
      </div>
    </Accordion>
  );
}

export default Categories;
