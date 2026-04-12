import { Link } from "react-scroll";

const Menu = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="kebab">Кебаб</Link>
        </li>
        <li>
          <Link to="shaurma">Шаурмаа</Link>
        </li>
        <li>
          <Link to="burger">Бургер</Link>
        </li>
        <li>
          <Link to="pizza">Пицца</Link>
        </li>
        <li>
          <Link to="salad">Салат</Link>
        </li>
        <li>
          <Link to="dessert">Десерт</Link>
        </li>
      </ul>

      <div className="menuComponentsWrapper"></div>
    </>
  );
};

export default Menu;
