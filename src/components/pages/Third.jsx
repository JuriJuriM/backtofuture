import React from 'react'
import './Third.scss'
import Back3 from '../../assets/img/back3.jpeg'
import Inacar from '../../assets/img/inacar.jpg'
import Mitting from '../../assets/img/mitting.jpg'
import Biffold from '../../assets/img/biffold.jpg'
import Clara from '../../assets/img/clara.jpg'
import Watches from '../../assets/img/watches.jpg'
import Timemashine from '../../assets/img/timemashine.jpg'
import Best from '../../assets/img/best.jpg'
import Threeparts from '../../assets/img/threeparts.jpg'

const Third = () => {
    return (
        <div className='third'>
            <div className='container'>
                <div className='third__body'>
                    <div className='third__title'>Back to the Future Part III</div>
                    <div className='third__back'>
                        <img src={Back3} alt='Back3' />
                    </div>
                    <div className='third__row'>
                        <div className='third__column'>
                            <div className='third__item'>
                                <div className='third__photo'>
                                    <img src={Inacar} alt='In a car' />
                                </div>
                            </div>
                        </div>
                        <div className='third__column'>
                            <div className='third__item'>
                                <div className='third__text'>Back to the Future Part III is a 1990 American science fiction Western film and the third installment of the Back to the Future trilogy.</div>
                            </div>
                        </div>
                    </div>
                    <div className='third__row'>
                        <div className='third__column'>
                            <div className='third__item'>
                                <div className='third__text'>The film was directed by Robert Zemeckis, and stars Michael J. Fox, Christopher Lloyd, Mary Steenburgen, Thomas F. Wilson, and Lea Thompson.</div>
                            </div>
                        </div>
                        <div className='third__column'>
                            <div className='third__item'>
                                <div className='third__photo'>
                                    <img src={Mitting} alt='Mitting' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='third__row'>
                        <div className='third__column'>
                            <div className='third__item'>
                                <div className='third__photo'>
                                    <img src={Biffold} alt='Biff old' />
                                </div>
                            </div>
                        </div>
                        <div className='third__column'>
                            <div className='third__item'>
                                <div className='third__text'>The film continues immediately following Back to the Future Part II (1989); while stranded in 1955 during his time travel adventures, Marty McFly (Fox) discovers that his friend Dr. Emmett "Doc" Brown (Lloyd), trapped in 1885, was killed by Buford "Mad Dog" Tannen (Wilson), Biff's great-grandfather.</div>
                            </div>
                        </div>
                    </div>
                    <div className='third__row'>
                        <div className='third__column'>
                            <div className='third__item'>
                                <div className='third__text'>Marty travels to 1885 to rescue Doc and return once again to 1985, but matters are complicated when Doc falls in love with Clara Clayton (Steenburgen).</div>
                            </div>
                        </div>
                        <div className='third__column'>
                            <div className='third__item'>
                                <div className='third__photo'>
                                    <img src={Clara} alt='Clara' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='third__row'>
                        <div className='third__column'>
                            <div className='third__item'>
                                <div className='third__photo'>
                                    <img src={Watches} alt='Watches' />
                                </div>
                            </div>
                        </div>
                        <div className='third__column'>
                            <div className='third__item'>
                                <div className='third__text'>Back to the Future Part III was filmed in California and Arizona, and was produced on a $40 million budget back-to-back with Part II.</div>
                            </div>
                        </div>
                    </div>
                    <div className='third__row'>
                        <div className='third__column'>
                            <div className='third__item'>
                                <div className='third__text'> Part III was released in the United States on May 25, 1990, six months after the previous installment, and grossed $245 million worldwide during its initial run, making it the sixth-highest-grossing film of 1990.</div>
                            </div>
                        </div>
                        <div className='third__column'>
                            <div className='third__item'>
                                <div className='third__photo'>
                                    <img src={Timemashine} alt='Timemashine' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='third__row'>
                        <div className='third__column'>
                            <div className='third__item'>
                                <div className='third__photo'>
                                    <img src={Best} alt='The best' />
                                </div>
                            </div>
                        </div>
                        <div className='third__column'>
                            <div className='third__item'>
                                <div className='third__text'>The film received a positive response from critics, who noted it as an improvement over Part II.</div>
                            </div>
                        </div>
                    </div>
                    <div className='third__titles'>Back to the Future Part 3 Official Trailer</div>
                    <div className='third__from'>
                        <div className='third__video'>
                            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/3C8c3EoEfw4?si=eEkBZXgPXshDZsVh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                    </div>
                    <div className='third__back'>
                        <img src={Threeparts} alt='All three parts' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Third