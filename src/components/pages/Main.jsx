import React from 'react'
import './Main.scss'
import Mainpick from '../../assets/img/mainpickture.jpg'
import First from '../../assets/img/first.jpg'
import Secondp from '../../assets/img/second.jpg'
import Marthin from '../../assets/img/marthin.jpg'
import Girlfriend from '../../assets/img/girlfriend.jpg'
import Thebest from '../../assets/img/thebest.jpg'
import Backtothefuture from '../../assets/img/backtothefuture.jpg'
import Delorian from '../../assets/img/delorian.jpg'
import Panorama from '../../assets/img/panorama.jpg'

const Main = () => {
    return (
        <div className='main'>
            <div className='container'>
                <div className='main__body'>
                    <div className='main__title'>Back to the future</div>
                    <div className='main__mainpick'>
                        <img src={Mainpick} alt='Mainpick' />
                    </div>
                    <div className='main__text-one'>Back to the Future is a 1985 American science fiction film</div>
                    <div className='main__row'>
                        <div className='main__column'>
                            <div className='main__item'>
                                <div className='main__photo'>
                                    <img src={First} alt='First' />
                                </div>
                            </div>
                        </div>
                        <div className='main__column'>
                            <div className='main__item'>
                                <div className='main__text'>Back to the Future is a 1985 American science fiction film directed by Robert Zemeckis and written by Zemeckis and Bob Gale. It stars Michael J. Fox, Christopher Lloyd, Lea Thompson, Crispin Glover, and Thomas F. Wilson. Set in 1985, it follows Marty McFly (Fox), a teenager accidentally sent back to 1955 in a time-traveling DeLorean automobile built by his eccentric scientist friend Emmett "Doc" Brown (Lloyd), where he inadvertently prevents his future parents from falling in love – threatening his own existence – and is forced to reconcile them and somehow get back to the future.</div>
                            </div>
                        </div>
                    </div>
                    <div className='main__row'>
                        <div className='main__column'>
                            <div className='main__item'>
                                <div className='main__text'>Gale and Zemeckis conceived the idea for Back to the Future in 1980. They were desperate for a successful film after numerous collaborative failures, but the project was rejected more than forty times by various studios because it was not considered raunchy enough to compete with the successful comedies of the era. A development deal was secured with Universal Pictures following Zemeckis's success directing Romancing the Stone (1984).</div>
                            </div>
                        </div>
                        <div className='main__column'>
                            <div className='main__item'>
                                <div className='main__photo'>
                                    <img src={Secondp} alt='Secondp' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='main__row'>
                        <div className='main__column'>
                            <div className='main__item'>
                                <div className='main__photo'>
                                    <img src={Marthin} alt='Marthin' />
                                </div>
                            </div>
                        </div>
                        <div className='main__column'>
                            <div className='main__item'>
                                <div className='main__text'>Fox was the first choice to portray Marty but was unavailable; Eric Stoltz was cast instead. Shortly after principal photography began in November 1984, Zemeckis determined Stoltz was not right for the part and made the concessions necessary to hire Fox, including re-filming scenes already shot with Stoltz and adding $4 million to the budget. Back to the Future was filmed in and around California and on sets at Universal Studios, and concluded the following April.</div>
                            </div>
                        </div>
                    </div>
                    <div className='main__row'>
                        <div className='main__column'>
                            <div className='main__item'>
                                <div className='main__text'>After highly successful test screenings, the release date was brought forward to July 3, 1985, giving the film more time in theaters during the busiest period of the theatrical year. The change resulted in a rushed post-production schedule and some incomplete special effects. Back to the Future was a critical and commercial success, earning $381.1 million to become the highest-grossing film of 1985 worldwide.</div>
                            </div>
                        </div>
                        <div className='main__column'>
                            <div className='main__item'>
                                <div className='main__photo'>
                                    <img src={Girlfriend} alt='Girlfriend' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='main__row'>
                        <div className='main__column'>
                            <div className='main__item'>
                                <div className='main__photo'>
                                    <img src={Thebest} alt='Thebest' />
                                </div>
                            </div>
                        </div>
                        <div className='main__column'>
                            <div className='main__item'>
                                <div className='main__text'>Critics praised the story, humorous elements, and the cast, particularly Fox, Lloyd, Thompson, and Glover. It received multiple award nominations and won an Academy Award, three Saturn Awards, and a Hugo Award. Its theme song, "The Power of Love" by Huey Lewis and the News, was also a success.</div>
                            </div>
                        </div>
                    </div>
                    <div className='main__row'>
                        <div className='main__column'>
                            <div className='main__item'>
                                <div className='main__text'>Back to the Future has since grown in esteem and is now considered by critics and audiences to be one of the greatest science-fiction films and among the best films ever made. In 2007, the United States Library of Congress selected it for preservation in the National Film Registry. The film was followed by two sequels, Back to the Future Part II (1989) and Back to the Future Part III (1990).</div>
                            </div>
                        </div>
                        <div className='main__column'>
                            <div className='main__item'>
                                <div className='main__photo'>
                                    <img src={Backtothefuture} alt='Backtothefuture' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='main__row'>
                        <div className='main__column'>
                            <div className='main__item'>
                                <div className='main__photo'>
                                    <img src={Delorian} alt='Delorian' />
                                </div>
                            </div>
                        </div>
                        <div className='main__column'>
                            <div className='main__item'>
                                <div className='main__text'>Spurred by the film's dedicated fan following and effect on popular culture, Universal Studios launched a multimedia franchise, which now includes video games, theme park rides, an animated television series, and a stage musical. Its enduring popularity has prompted numerous books about its production, documentaries, and commercials.</div>
                            </div>
                        </div>
                    </div>
                    <div className='main__mainpick'>
                        <img src={Panorama} alt='Panorama' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main