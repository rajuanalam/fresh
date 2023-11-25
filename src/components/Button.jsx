
const Button = ({text,className}) => {
  return (
    <button className={`${className} font-pop text-2xl font-semibold bg-btnColor py-2.5 px-7 border  border-btnborderColor rounded-xl shadow-md shadow-shadowColor`}>{text}</button>
  )
}

export default Button