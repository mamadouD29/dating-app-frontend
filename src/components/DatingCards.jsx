import React, {useEffect, useState} from "react";
import DatingCard from "react-tinder-card"
import "./DatingCards.css"
import axios from './axios'


const DatingCards = () => {
    const [people, setPeople] = useState([]);

    useEffect(()=>{
        async function fetData(){
            const req = await axios.get("/dating/cards")
            setPeople(req.data)
        }
        fetData()
    },[])

    const swiped = (direction, nameToDelete) => {
        console.log("receiving ", nameToDelete )
    }

    const outOffFrame = (name) => {
        console.log(name + "left the screen!!")

    }

    return (
        <div className="datingCards">
            <div className="datingCards-container">
                {
                    people.map((person)=> (
                        <DatingCard className="swipe" key={person.name} preventSwipe= {["up", "down"]} onSwipe={(dir)=>swiped(dir, person.name)} onCardLeftScreen={()=>outOffFrame(person.name)} >
                            <div style={{backgroundImage: `url(${person.imgUrl})`}} className="card">
                                <h3>{person.name}</h3>
                            </div>
                        </DatingCard>
                    ))
                }

            </div>
        </div>
    )
}


export default DatingCards;