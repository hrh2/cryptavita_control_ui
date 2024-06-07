import BgImage from '../assets/partners.png'

export default function View3({size}) {
  return (
    <div className={`${size}`} style={{backgroundImage:`url(${BgImage})`}}>
    </div>
  )
}
