import { AriaTabProps } from '@react-types/tabs';
import { RefObject } from 'react';
import { SingleSelectListState } from '@react-stately/list';
import { usePress } from '@react-native-aria/interactions';

interface TabAria {
  /** Props for the tab element. */
  tabProps: any;
}

export function useTab<T>(
  props: AriaTabProps,
  state: SingleSelectListState<T>,
  _ref: RefObject<HTMLElement>
): TabAria {
  let { key, isDisabled: propsDisabled } = props;
  let { selectionManager: manager, selectedKey } = state;

  let isSelected = key === selectedKey;

  const onPress = () => {
    manager.select(key);
  };

  let isDisabled = propsDisabled || state.disabledKeys.has(key);

  let { pressProps } = usePress({ onPress, isDisabled });

  const tabProps = {
    ...pressProps,
    accessibilityState: {
      selected: isSelected,
    },
    accessibilityRole: 'tab',
  };

  return {
    tabProps,
  };
}
