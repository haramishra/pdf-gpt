import { cn } from "@/lib/utils"

function SectionWrapper({
  children,
  className,
}: {
  children: React.ReactNode
  className: string
}) {
  return (
    <section
      className={cn(
        "container grid items-center gap-6 pb-8 pt-6 md:py-10",
        className
      )}
    >
      {children}
    </section>
  )
}

export default SectionWrapper
