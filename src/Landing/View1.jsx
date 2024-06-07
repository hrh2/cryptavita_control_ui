import bgImage from '../assets/Group 852.svg'

export default function View1({size}) {
  return (
    <div className={`${size}`} style={{backgroundImage:`url(${bgImage})`}}>
    </div>
  )
}
