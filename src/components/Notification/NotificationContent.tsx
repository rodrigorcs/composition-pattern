interface NotificationContentProps {
  text: string
}

export function NotificationContent({ text }: NotificationContentProps) {
  return (
    <div className="flex-1 flex flex-col gap-2">
      <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">{text}</p>
      <div className="text-xs text-zinc-400 flex items-center gap-1">
        <span>3 min ago</span>
      </div>
    </div>
  )
}
