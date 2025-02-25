// Project: https://github.com/vueComponent/ant-design-vue
// Definitions by: akki-jat <https://github.com/akki-jat>
// Definitions: https://github.com/vueComponent/ant-design-vue/types

import { AntdComponent, AntdProps } from '../component';
import { RadioGroup } from './radio-group';
import { RadioButton } from './radio-button';

export declare class RadioProps {
  /**
   * get focus when component mounted
   * @default false
   * @type boolean
   */
  autofocus?: boolean;

  /**
   * Specifies whether the radio is selected.
   * @type boolean
   */
  checked?: boolean;

  /**
   * Specifies the initial state: whether or not the radio is selected.
   * @type boolean
   */
  defaultChecked?: boolean;

  /**
   * Disable radio
   * @default false
   * @type boolean
   */
  disabled?: boolean;

  /**
   * According to value for comparison, to determine whether the selected
   * @type any
   */
  value?: any;
}
export declare class Radio extends AntdComponent {
  static Group: typeof RadioGroup;
  static Button: typeof RadioButton;
  $props: RadioProps;
  /**
   * remove focus
   */
  blur(): void;

  /**
   * get focus
   */
  focus(): void;
}
