import "./menu.css";
import {Menu} from "../../packages";
import Container from "../../packages/Atom/Container/Container";
import {Navbar} from "../../packages";

export default function MenuPage() {
  return (
    <>
    <Navbar />
    <Container>
      <span className="bd-menu__title">🐉 Menu Bouchée & Dragon 🐉</span>

      <Menu items={[
        { title: "Burger", description: "Delicious burger", price: 10 },
        { title: "Pizza", description: "Delicious pizza", price: 12 },
        { title: "Tacos", description: "Delicious tacos", price: 8 },
      ]} />
    </Container>
    </>
  )
}
