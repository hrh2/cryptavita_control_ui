export default function Logo({image}) {
  return (
    <div className=" w-[10rem] m-1 rounded bg-contain bg-no-repeat bg-center h-[2.5rem]" style={{backgroundImage:`url(${image})`}}>
    </div>
  )
}
