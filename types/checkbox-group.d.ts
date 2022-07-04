import { UrptUiComponent, UrptUiComponentSize } from './component'

/** Checkbox Group Component */
export declare class ElCheckboxGroup extends UrptUiComponent {
  /** Size of checkbox buttons or bordered checkboxes */
  size: UrptUiComponentSize

  /** Whether the nesting checkboxes are disabled */
  disabled: boolean

  /** Minimum number of checkbox checked */
  min: number

  /** Maximum number of checkbox checked */
  max: number

  /** Font color when button is active */
  textColor: string

  /** Border and background color when button is active */
  fill: string
}
