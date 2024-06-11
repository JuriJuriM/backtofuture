import React from 'react'
import './Second.scss'
import Parttwo from '../../assets/img/parttwo.jpg'
import Start from '../../assets/img/start.jpg'
import Biff from '../../assets/img/biff.jpg'
import Doc from '../../assets/img/doc.jpg'
import Twomarthy from '../../assets/img/twomarthy.jpg'
import Max from '../../assets/img/max.jpg'
import Pickture from '../../assets/img/pickture.png'


const Second = () => {
    return (
        <div className='second'>
            <div className='container'>
                <div className='second__body'>
                    <div className='second__title'>Back to the Future Part II</div>
                    <div className='second__parttwo'>
                        <img src={Parttwo} alt='Parttwo' />
                    </div>
                    <div className='second__row'>
                        <div className='second__column'>
                            <div className='second__item'>
                                <div className='second__photo'>
                                    <img src={Start} alt='Start' />
                                </div>
                            </div>
                        </div>
                        <div className='second__column'>
                            <div className='second__item'>
                                <div className='second__text'>Back to the Future Part II is a 1989 American science fiction film directed by Robert Zemeckis from a screenplay by Bob Gale; both wrote the story. It is the sequel to the 1985 film Back to the Future and the second installment in the Back to the Future franchise. The film stars Michael J. Fox, Christopher Lloyd, Lea Thompson, and Thomas F. Wilson with Elisabeth Shue (replacing Claudia Wells), and Jeffrey Weissman (replacing Crispin Glover) in supporting roles.</div>
                            </div>
                        </div>
                    </div>
                    <div className='second__row'>
                        <div className='second__column'>
                            <div className='second__item'>
                                <div className='second__text'>It follows Marty McFly (Fox) and his friend Dr. Emmett "Doc" Brown (Lloyd) as they travel from 1985 to 2015 to prevent Marty's son from sabotaging the McFly family's future. When their arch-nemesis Biff Tannen (Wilson) steals Doc's DeLorean time machine and uses it to alter history for his benefit, the duo must return to 1955 to restore the timeline.</div>
                            </div>
                        </div>
                        <div className='second__column'>
                            <div className='second__item'>
                                <div className='second__photo'>
                                    <img src={Biff} alt='Start' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='second__row'>
                        <div className='second__column'>
                            <div className='second__item'>
                                <div className='second__photo'>
                                    <img src={Doc} alt='Doc' />
                                </div>
                            </div>
                        </div>
                        <div className='second__column'>
                            <div className='second__item'>
                                <div className='second__text'>The film was produced on a $40 million budget and was filmed back to back with its sequel Part III. Filming began in February 1989, after two years were spent building the sets and writing the scripts. Back to the Future Part II was also a ground-breaking project for visual effects studio Industrial Light & Magic (ILM).</div>
                            </div>
                        </div>
                    </div>
                    <div className='second__row'>
                        <div className='second__column'>
                            <div className='second__item'>
                                <div className='second__text'>In addition to digital compositing, ILM used the VistaGlide motion control camera system, which allowed an actor to portray multiple characters simultaneously on-screen without sacrificing camera movement.</div>
                            </div>
                        </div>
                        <div className='second__column'>
                            <div className='second__item'>
                                <div className='second__photo'>
                                    <img src={Twomarthy} alt='Twomarthy' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='second__row'>
                        <div className='second__column'>
                            <div className='second__item'>
                                <div className='second__photo'>
                                    <img src={Max} alt='Max' />
                                </div>
                            </div>
                        </div>
                        <div className='second__column'>
                            <div className='second__item'>
                                <div className='second__text'>Back to the Future Part II was released by Universal Pictures on November 22, 1989. Though the film received mostly positive reviews from critics, it was deemed inferior to its predecessor. The film grossed over $332 million worldwide in its initial run, making it the third-highest-grossing film of 1989.</div>
                            </div>
                        </div>
                    </div>
                    <div className='second__titles'>Back To The Future Part II (1989) Original Theatrical Trailer</div>
                    <div className='second__from'>
                        <div className='second__video'>
                            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/M8kvj07HpFI?si=Eq9WrpmYmv8ezVHu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                    </div>
                    <div className='second__parttwo'>
                        <img src={Pickture} alt='Pickture' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Second