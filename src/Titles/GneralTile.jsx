import Title from '../assets/Title.svg'

export default function LandingTitle({size}) {
  return (
    <div className={` ${size} `} style={{backgroundImage:`url(${Title})`}}>  
    </div>
  )
}
