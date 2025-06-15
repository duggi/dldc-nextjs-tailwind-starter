import { clsx } from 'clsx'

export function Section({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <section className={clsx(className)}>
      {children}
    </section>
  )
}



export function Section2({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <section className={clsx(className)}>
      {children}
    </section>
  )
}
