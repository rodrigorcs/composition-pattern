import { Notification } from './Notification'
import {
  X as XIcon,
  // Leaf as LeafIcon,
  Check as CheckIcon,
  Package as PackageIcon,
} from 'lucide-react'

export const Widget = () => {
  return (
    <>
      <div className="w-[448px] rounded overflow-hidden">
        <div className="bg-zinc-200 dark:bg-zinc-800 py-4 px-6 flex items-center justify-between">
          <span className="text-zinc-300 font-bold">Notifications</span>
          <button className="text-sky-400 font-bold text-xs hover:text-sky-300">
            MARK ALL AS READ{' '}
          </button>
        </div>

        {/* Recents Section */}
        <div>
          <div className="bg-zinc-300 font-medium dark:bg-zinc-950 px-5 py-2 text-sm text-zinc-500 dark: text-zinc-400">
            Recents
          </div>
          {/* Content */}
          <div className="divide-y-2 divide-zinc-300 dark:divide-zinc-950">
            <Notification.Root>
              <Notification.Icon icon={PackageIcon} />
              <Notification.Content text="You are running low on stock!" />
              <Notification.Actions>
                <Notification.Action icon={XIcon} />
                <Notification.Action
                  icon={CheckIcon}
                  className="bg-sky-500 hover:bg-sky-300 dark:bg-sky-600 dark:hover:bg-sky-500"
                />
              </Notification.Actions>
            </Notification.Root>

            <Notification.Root>
              <Notification.Icon icon={PackageIcon} />
              <Notification.Content text="You are running low on stock!" />
            </Notification.Root>

            <Notification.Root>
              <Notification.Content text="You are running low on stock!" />
            </Notification.Root>
          </div>
        </div>

        <div>
          <div className="bg-zinc-300 font-medium dark:bg-zinc-950 px-5 py-2 text-sm text-zinc-500 dark: text-zinc-400">
            Olds
          </div>
          {/* Content */}
          <div className="divide-y-2 divide-zinc-300 dark:divide-zinc-950">
            <Notification.Root>
              <Notification.Icon icon={PackageIcon} />
              <Notification.Content text="You are running low on stock!" />
              <Notification.Actions>
                <Notification.Action icon={XIcon} />
                <Notification.Action
                  icon={CheckIcon}
                  className="bg-sky-500 hover:bg-sky-300 dark:bg-sky-600 dark:hover:bg-sky-500"
                />
              </Notification.Actions>
            </Notification.Root>

            <Notification.Root>
              <Notification.Icon icon={PackageIcon} />
              <Notification.Content text="You are running low on stock!" />
            </Notification.Root>

            <Notification.Root>
              <Notification.Content text="You are running low on stock!" />
            </Notification.Root>
          </div>
        </div>
      </div>
    </>
  )
}
