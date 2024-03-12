type Props = {
    text: string;
}
const Chip = ({ text }: Props) => {
  return (
    <div className="relative">
        <div className="bg-dusty-pink text-[.9rem] p-2 w-fit text-white font-poppins uppercase after:h-full after:bg-[rgba(255,255,255,0.4)] hover:after:bg-[rgba(255,255,255,0)] hover:after:transition-all hover:after:ease-in-out after:w-0 after:absolute after:top-0 after:left-0 after:content-[''] hover:after:w-[120%] hover:after:duration-700">
            {text}
        </div>
    </div>
    
  )
}

export default Chip