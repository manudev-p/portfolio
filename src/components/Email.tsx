import Link from 'next/link'

const EMAIL = 'coso@coso.com'

const Email = () => {
  return (
    <div className="email">
      <Link href={EMAIL} className="email-link">
        {EMAIL}
      </Link>
    </div>
  )
}

export default Email
