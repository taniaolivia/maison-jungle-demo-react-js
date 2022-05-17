import CareScale from "./CareScale";
import '../styles/PlantItem.css';

function PlantItem({cover, name, water, light, price}) {
    return (
        <li className="lmj-plant-item" onClick={() => handleClick}>
            <span className='lmj-plant-item-price'>{price}€</span>
            <img className="lmj-plant-item-cover" src={cover} alt={`${name} cover`} />
            <p>{name}</p>
            <div>
                <CareScale careType='water' scaleValue={water} />
                <CareScale careType='light' scaleValue={light} />
            </div>
        </li>
    )
}

function handleClick(plantName) {
	alert(`Vous voulez acheter 1 ${plantName}? Très bon choix 🌱✨`)
}

export default PlantItem;