import { FC } from 'react'
import Marquee from 'react-fast-marquee'
import Bitmap from '../../assets/imgs/Bitmap.png'
import PartnerCard from './PartnerCard/PartnerCard'
import { partnersInfo } from './PartnersInfo'

export interface PartnersMarqueeProps {}

const PartnersMarquee: FC<PartnersMarqueeProps> = () => {
  return (
    <Marquee style={{ marginTop: '40px' }} pauseOnHover={true} speed={60} pauseOnClick={true} gradient={false}>
      {partnersInfo.map((item, index) => (
        <PartnerCard key={index} partnerImg={item.url ? item.url : Bitmap} partnerName={item.partnerName} />
      ))}
    </Marquee>
  )
}

export default PartnersMarquee
