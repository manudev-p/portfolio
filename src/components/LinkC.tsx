import Link from 'next/link'

const LinkC = ({ href, text }: { href: string; text: string }) => {
  return (
    <Link href={href} className="link" target="_blank">
      {text}
    </Link>
  )
}

export default LinkC
