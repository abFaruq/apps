// Copyright 2017-2018 @polkadot/apps authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { Routes } from '../types';
import Settings from '@polkadot/app-settings/index';

export default ([
  {
    Component: Settings,
    i18n: {
      defaultValue: 'Settings'
    },
    icon: 'cogs',
    isExact: false,
    isHidden: false,
    name: 'settings'
  }
] as Routes);
