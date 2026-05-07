import type {ReactNode} from 'react'

type SectionProps = {
  children: ReactNode
  admin: string
}

const Section = ({children, admin}: SectionProps) => {
  return (
    <>
        <h2>Section Component</h2>
        <p>Admin: {admin}</p>
        {children}
    </>
  )
}

export default Section;