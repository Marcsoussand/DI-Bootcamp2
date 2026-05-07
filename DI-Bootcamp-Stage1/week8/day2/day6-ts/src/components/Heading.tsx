import type {ReactElement, ReactNode} from 'react'
export type HeadingType = {
  title: string,
  subtitle: string,
  body: string
}
const Heading = ({title, subtitle, body}: HeadingType): ReactNode => {
  return (
    <>
    <h2>Title: {title}</h2>
    <h3>Subtitle: {subtitle}</h3>
    <p>{body}</p>
    </>
    
  )
}

export default Heading;