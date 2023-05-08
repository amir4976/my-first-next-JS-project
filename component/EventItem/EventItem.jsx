import Link  from "next/link"
import Image from "next/image"
import Styles from '@/styles/EventItem.module.css'



function EventItem(evt) {
    console.log(evt.evt.image)
  return (
    <div className={Styles.event}>
        <div className={Styles.img}>
            <Image src={evt.evt.image ? evt.evt.image : '/images/event-default.js'} width={170} height={100}/>
        </div>
        <div className={Styles.info}>
            <span>{evt.evt.date} at {evt.time}</span>
            <h3>{evt.evt.name}</h3>
        </div>
        <div className={Styles.link}>
            <Link href={`/events/${evt.evt.slug}`} className='btn'>
                    details
            </Link>
        </div>
    </div>
  )
}

export default EventItem