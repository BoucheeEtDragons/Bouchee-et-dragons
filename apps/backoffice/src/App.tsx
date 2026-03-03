import {Badge, Button, Field, Label, Input} from "./packages/index";
import ThemeColor from "./packages/lib/enum/ThemeColor.ts";
import {Image} from "./packages/Atom/Image/Image.tsx";

export default function App() {
  return (
    <div>
      <h1>Backoffice</h1>
        <details>
            <summary>Button</summary>
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
        </details>

        <details>
            <summary>Badge</summary>
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
                        <Badge color={ThemeColor.PRIMARY}>
                            Hello
                        </Badge>
                    </td>
                    <td>
                        <Badge color={ThemeColor.SECONDARY}>
                            Hello
                        </Badge>
                    </td>
                    <td>
                        <Badge color={ThemeColor.TERTIARY}>
                            Hello
                        </Badge>
                    </td>
                </tr>

                <tr>
                    <td>Disabled</td>

                    <td>
                        <Badge color={ThemeColor.PRIMARY} disabled>
                            Hello
                        </Badge>
                    </td>
                    <td>
                        <Badge color={ThemeColor.SECONDARY} disabled>
                            Hello
                        </Badge>
                    </td>
                    <td>
                        <Badge color={ThemeColor.TERTIARY} disabled>
                            Hello
                        </Badge>
                    </td>
                </tr>
                </tbody>
            </table>
        </details>

        <details>
            <summary>Field</summary>

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
        </details>

        <details>
            <summary>Input</summary>

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
                        <Input
                            label="Label"
                            placeholder="Input"
                            fieldColor={ThemeColor.PRIMARY}
                            name="input-primary"
                        />
                    </td>
                    <td>
                        <Input
                            label="Label"
                            placeholder="Input"
                            fieldColor={ThemeColor.SECONDARY}
                            name="input-secondary"
                        />
                    </td>
                    <td>
                        <Input
                            label="Label"
                            placeholder="Input"
                            fieldColor={ThemeColor.TERTIARY}
                            name="input-tertiary"
                        />
                    </td>
                </tr>

                <tr>
                    <td>Disabled</td>
                    <td>
                        <Input
                            label="Label"
                            placeholder="Input"
                            fieldColor={ThemeColor.PRIMARY}
                            disabled
                            name="input-primary-disabled"
                        />
                    </td>
                    <td>
                        <Input
                            label="Label"
                            placeholder="Input"
                            fieldColor={ThemeColor.SECONDARY}
                            disabled
                            name="input-secondary-disabled"
                        />
                    </td>
                    <td>
                        <Input
                            label="Label"
                            placeholder="Input"
                            fieldColor={ThemeColor.TERTIARY}
                            disabled
                            name="input-tertiary-disabled"
                        />
                    </td>
                </tr>
                </tbody>
            </table>
        </details>

        <details>
            <summary>Image</summary>

            <table>
                <thead>
                <tr>
                    <td>Image</td>
                </tr>
                </thead>

                <tbody>
                <tr>
                    <td>
                        <Image
                            src="https://upload.wikimedia.org/wikipedia/commons/c/cc/3-BerneseMountainDogInGrass.jpg"
                            style={{
                                width: 250,
                                height: 250
                            }}
                        />
                    </td>
                </tr>
                </tbody>
            </table>
        </details>
    </div>

  )
}