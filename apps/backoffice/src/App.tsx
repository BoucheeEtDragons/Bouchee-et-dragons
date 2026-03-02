import {Button} from "@BoucheeEtDragons/design-system";
import ThemeColor from "@BoucheeEtDragons/design-system/src/lib/enum/ThemeColor.ts";

export default function App() {
  return (
    <div>
      <h1>Backoffice</h1>
        <table>
            <thead>
            <tr>
                <th></th>
                <th>Primary</th>
                <th>Secondary</th>
                <th>Tertiary</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Normal</td>
                <td>
                    <Button color={ThemeColor.PRIMARY}>
                        Hello
                    </Button>
                </td>
                <td>
                    <Button color={ThemeColor.SECONDARY}>
                        Hello
                    </Button>
                </td>
                <td>
                    <Button color={ThemeColor.TERTIARY}>
                        Hello
                    </Button>
                </td>
            </tr>

            <tr>
                <td>Disabled</td>

                <td>
                    <Button color={ThemeColor.PRIMARY} disabled>
                        Hello
                    </Button>
                </td>
                <td>
                    <Button color={ThemeColor.SECONDARY} disabled>
                        Hello
                    </Button>
                </td>
                <td>
                    <Button color={ThemeColor.TERTIARY} disabled>
                        Hello
                    </Button>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
  )
}