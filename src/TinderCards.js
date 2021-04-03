import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import database from './firebase';

import "./TinderCards.css"

function TinderCards() {
    // const people = []
    const realTimeYear = 2021
    const [people, setPeople] = useState([]);

    useEffect(() => {

        const unsubscribe = database
            .collection('people')
            .onSnapshot((snapshot) =>
                setPeople(snapshot.docs.map((doc) => doc.data()))
            );

        return () => {
            // clean up
            unsubscribe()
        };
    }, [])


    // people.push('admin', 'tester') ==
    // setPeople([...people, 'admin', 'tester'])
    return (
        <div>
            <div className="tinderCards__cardContainer">
                {people.map(person => (
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={['down']}

                    >
                        <div
                            style={{ backgroundImage: `url(${person.url})` }}
                            className="card">
                            <div className="shadow">

                            </div>
                            <div className="bio">
                                <h3>{person.name} ({realTimeYear - person.year})</h3>
                                <h4>{person.work}</h4>

                            </div>
                            <div className="status nope">NOPE</div>
                            <div className="status like">LIKE</div>
                            <div className="status superlike">SuperLike</div>
                        </div>
                    </TinderCard>
                ))}

            </div>
        </div>
    )
}

export default TinderCards
