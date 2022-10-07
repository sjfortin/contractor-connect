import { forwardRef } from 'react'
import Link from 'next/link'

// eslint-disable-next-line react/display-name
const MyLink = forwardRef(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (props: { href: string; children: React.ReactNode }, ref: any) => {
    const { href, children, ...rest } = props
    return (
      <Link href={href}>
        <a ref={ref} {...rest}>
          {children}
        </a>
      </Link>
    )
  },
)

export default MyLink
