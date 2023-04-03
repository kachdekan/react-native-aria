import { AriaTabListProps } from '@react-types/tabs';
import { HTMLAttributes } from 'react';
import { TabListState } from '@react-stately/tabs';
import {
  useTabList as useTabsWeb,
  useTabPanel as useTabsPanelWeb,
} from '@react-aria/tabs';
import { mapDomPropsToRN } from '@react-native-aria/utils';

interface TabsAria {
  /** Props for the tablist container. */
  tabListProps: HTMLAttributes<HTMLElement>;
  /** Props for the associated tabpanel element. */
  tabPanelProps: HTMLAttributes<HTMLElement>;
}

export function useTabs<T>(
  props: AriaTabListProps<T>,
  state: TabListState<T>,
  ref: any
): TabsAria {
  const { tabListProps } = useTabsWeb(props, state, ref);
  const { tabPanelProps } = useTabsPanelWeb(props, state, ref);

  return {
    tabListProps: mapDomPropsToRN(tabListProps),
    tabPanelProps: mapDomPropsToRN(tabPanelProps),
  };
}
