import {Button, Field, Label} from "@BoucheeEtDragons/design-system";
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

        <h1>Field</h1>
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
                    <Label color={ThemeColor.PRIMARY} htmlFor="field-primary">Label</Label>
                    <Field
                        placeholder="Field"
                        color={ThemeColor.PRIMARY}
                        name="field-primary"
                    />
                </td>
                <td>
                    <Label color={ThemeColor.SECONDARY} htmlFor="field-secondary">Label</Label>
                    <Field
                        placeholder="Field"
                        color={ThemeColor.SECONDARY}
                        name="field-secondary"
                    />
                </td>
                <td>
                    <Label color={ThemeColor.TERTIARY} htmlFor="field-tertiary">Label</Label>
                    <Field
                        placeholder="Field"
                        color={ThemeColor.TERTIARY}
                        name="field-tertiary"
                    />
                </td>
            </tr>

            <tr>
                <td>Disabled</td>
                <td>
                    <Label color={ThemeColor.PRIMARY} htmlFor="field-primary-disabled">Label</Label>
                    <Field
                        placeholder="Field"
                        color={ThemeColor.PRIMARY}
                        disabled
                        name="field-primary-disabled"
                    />
                </td>
                <td>
                    <Label color={ThemeColor.SECONDARY} htmlFor="field-secondary-disabled">Label</Label>
                    <Field
                        placeholder="Field"
                        color={ThemeColor.SECONDARY}
                        disabled
                        name="field-secondary-disabled"
                    />
                </td>
               <td>
                    <Label color={ThemeColor.TERTIARY} htmlFor="field-tertiary-disabled">Label</Label>
                    <Field
                        placeholder="Field"
                        color={ThemeColor.TERTIARY}
                        disabled
                        name="field-tertiary-disabled"
                    />
                </td>

            </tr>
            </tbody>
        </table>
    </div>
  )
}