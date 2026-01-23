import PromiseCard from "./PromiseCard.tsx";
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi'
import Check from '@mui/icons-material/Check'
import "../styles/Promise.css"

const promisesData = [
    {
        title: "Indviduallösungen",
        description: "Spezialanfertigungen und maßgeschneiderte ProdukteSpezialanfertigungen und maßgeschneiderte ProdukteSpezialanfertigungen und maßgeschneiderte ProdukteSpezialanfertigungen und maßgeschneiderte ProdukteSpezialanfertigungen und maßgeschneiderte ProdukteSpezialanfertigungen und maßgeschneiderte ProdukteSpezialanfertigungen und maßgeschneiderte Produkte",
        icon: <AccessAlarmIcon style={{fontWeight: 'bold', fontSize:'60px'}}/>,
    },
    {
        title: "Qualität",
        description: "Präzise Fertigungen und strenge QualitätskontrollenPräzise Fertigungen und strenge QualitätskontrollenPräzise Fertigungen und strenge QualitätskontrollenPräzise Fertigungen und strenge Qualitätskontrollen",
        icon: <Check style={{fontWeight: 'bold', fontSize:'60px'}}/>,
    },
    {title: "Termintreue Lieferungen",
        description: "Wir garantieren eine schnellen und sicheren Transport ihrer WareWir garantieren eine schnellen und sicheren Transport ihrer WareWir garantieren eine schnellen und sicheren Transport ihrer WareWir garantieren eine schnellen und sicheren Transport ihrer WareWir garantieren eine schnellen und sicheren Transport ihrer Ware",
        icon: <LocalTaxiIcon style={{fontWeight: 'bold', fontSize:'60px'}}/>
    },
]
export default function Promises() {
    return (
        <div className="promises-container">
            {promisesData.map((item, index) => (
                <PromiseCard
                    key={index}
                    heading={item.title}
                    text={item.description}
                    icon={item.icon}
                />
            ))}
        </div>
    );
}
