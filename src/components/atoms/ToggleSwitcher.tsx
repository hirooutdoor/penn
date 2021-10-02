import { useState } from 'react'
import { Switch } from '@headlessui/react'

const ToggleSwitcher = () => {
  const [enabled, setEnabled] = useState(true)

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`${
        enabled ? 'bg-penn-green opacity-30 dark:opacity-90' : 'bg-gray-200 dark:bg-gray-500'
      } relative inline-flex items-center h-6 rounded-full w-11`}
    >
      <span className="sr-only">Enable notifications</span>
      <span
        className={`${
          enabled ? 'translate-x-6' : 'translate-x-1'
        } inline-block w-4 h-4 transform duration-200 bg-white dark:opacity-90 rounded-full`}
      />
    </Switch>
  )
}

export default ToggleSwitcher;