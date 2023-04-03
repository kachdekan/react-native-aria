import { AriaTabListProps } from '@react-types/tabs';
import { TabListState } from '@react-stately/tabs';

interface TabsAria {
  /** Props for the tablist container. */
  tabListProps: any;
  /** Props for the associated tabpanel element. */
  tabPanelProps: any;
}

export function useTabs<T>(
  _props: AriaTabListProps<T>,
  _state: TabListState<T>,
  _ref: any
): TabsAria {
  return {
    tabListProps: {
      accessibilityRole: 'tablist',
    },
    tabPanelProps: {},
  };
}
