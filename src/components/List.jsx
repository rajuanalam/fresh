
const List = ({text,href,className}) => {
  return (
    <li><a className={`${className} font-pop text-2xl font-semibold text-black`} href={href}>{text}</a></li>
  )
}

export default List