import "./menu.css";
import {Menu} from "../../packages";
import Container from "../../packages/Atom/Container/Container";
import {Navbar} from "../../packages";
import {Heading} from "../../packages/Atom/Heading/Heading.tsx";
import FontWeight from "../../packages/lib/enum/FontWeight.ts";
import FontVariant from "../../packages/lib/enum/FontVariant.ts";
import ThemeColor from "../../packages/lib/enum/ThemeColor.ts";

export default function MenuPage() {
  return (
    <>
      <Navbar />
      <Container>
        <Heading
            level={1}
            weight={FontWeight.BOLD}
            variant={FontVariant.TITLE}
            className={"bd-text-center"}
            id={'main-page-title'}
            color={ThemeColor.PRIMARY}
        >
          🐉 Menu Bouchée & Dragon 🐉
        </Heading>

        <Menu items={[
          { title: "Burger", description: "Delicious burger", price: 10 },
          { title: "Pizza", description: "Delicious pizza", price: 12 },
          { title: "Tacos", description: "Delicious tacos", price: 8 },
        ]} />
      </Container>
    </>
  )
}
