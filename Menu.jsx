import React from 'react';
import { useLanguage } from '../LanguageContext';

function Menu() {
    const { language } = useLanguage();
    return (
        <>
            <div className='firstpart-container'>
                <div className='allin-one'>
                    <div className='texts-container'>
                        <h1 className='our-name'>Ararat</h1>
                        <h3 className='name-flex'>IT School</h3>
                        <p className='introducion'>{language === 'am' && <p>Բացահայտիր IT անսահման հնարավորությունները</p>}
                            {language === 'en' && <p>Discover the endless possibilities of IT</p>}</p>
                        {language === 'ru' && <p>Откройте для себя безграничные возможности ИТ</p>}

                        {language === 'am' && <button className='our-lessons-button'>Դասընթացներ</button>}
                        {language === 'en' && <button className='our-lessons-button'>Lessons</button>}
                        {language === 'ru' && <button className='our-lessons-button'>Курсы</button>}
                    </div>
                    <div className='image-container'>
                        <img className="imagedeveloper" src="https://aitschool.am/images/main_image.png" alt="Developer" />
                    </div>
                </div>
                <div className='lessons'>
                    <div className='title'>
                        {language === 'am' && <h2>Դասընթացներ</h2>}
                        {language === 'en' && <h2>Lessons</h2>}
                        {language === 'ru' && <h2>Курсы</h2>}
                    </div>
                    <div className='les-cont'>
                        <div className="lesson-introducion">
                            <div className='img-text'>
                                <div className='image-lesson'>
                                    <img src='https://api.aitschool.am/web_course.png'></img>
                                </div>
                                <div className='text'>
                                    <h3>
                                        Web ծրագրավորում
                                    </h3>
                                    <p>6 ամիս</p>
                                </div>

                            </div>
                        </div>
                        <div className="lesson-introducion">
                            <div className='img-text'>
                                <div className='image-lesson'>
                                    <img src='https://api.aitschool.am/ui-ux.png'></img>
                                </div>
                                <div className='text'>
                                    <h3>
                                        UI/UX
                                    </h3>
                                    <p>2 ամիս</p>
                                </div>

                            </div>
                        </div>
                        <div className="lesson-introducion">
                            <div className='img-text'>
                                <div className='image-lesson'>
                                    <img src='https://api.aitschool.am/smm.png'></img>
                                </div>
                                <div className='text'>
                                    <h3>
                                        SMM
                                    </h3>
                                    <p>2 ամիս</p>
                                </div>

                            </div>
                        </div>
                        <div className="lesson-introducion">
                            <div className='img-text'>
                                <div className='image-lesson'>
                                    <img src='https://api.aitschool.am/graphic-design.png'></img>
                                </div>
                                <div className='text'>
                                    <h3>
                                        Գրաֆիկ դիզայն
                                    </h3>
                                    <p>2 ամիս</p>
                                </div>

                            </div>
                        </div>
                        <div className="lesson-introducion">
                            <div className='img-text'>
                                <div className='image-lesson'>
                                    <img src='https://api.aitschool.am/english.png'></img>
                                </div>
                                <div className='text'>
                                    <h3>
                                        Անգլերեն
                                    </h3>
                                    <p>4 ամիս</p>
                                </div>

                            </div>
                        </div>
                        <div className="lesson-introducion">
                            <div className='img-text'>
                                <div className='image-lesson'>
                                    <img src='https://api.aitschool.am/3d-illustration-computer-keyboard-and-mouse-object-png.png'></img>
                                </div>
                                <div className='text'>
                                    <h3>
                                        Համակարգչային գրագիտություն
                                    </h3>
                                    <p>2 ամիս</p>
                                </div>

                            </div>
                        </div>
                        <div className="lesson-introducion">
                            <div className='img-text'>
                                <div className='image-lesson'>
                                    <img src='https://api.aitschool.am/kids.blog.webp'></img>
                                </div>
                                <div className='text'>
                                    <h3>
                                        AIT kids
                                    </h3>
                                    <p>8 ամիս</p>
                                </div>

                            </div>
                        </div>
                        <div className="lesson-introducion">
                            <div className='img-text'>
                                <div className='image-lesson'>
                                    <img src='https://api.aitschool.am/free-linkedin-2-5645838-4695696.webp'></img>
                                </div>
                                <div className='text'>
                                    <h3>
                                        LinkedIn Mastery
                                    </h3>
                                    <p>10 դաս</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='branches'>
                    <div className='title'>

                        {language === 'am' && <h2>Մասնաճյուղեր</h2>}
                        {language === 'en' && <h2>Branches</h2>}
                        {language === 'ru' && <h2>Ветви</h2>}
                    </div>
                    <div className='two-branches'>
                        <div className='ararat-it'>
                            <div className='image-ait'>
                                <img src="https://aitschool.am/images/office_ararat.jpg"></img>
                            </div>
                            <div>

                                {language === 'am' && <p>Ք. Արարատ</p>}
                                {language === 'en' && <p>C.Ararat</p>}
                                {language === 'ru' && <p>Г. Арарат</p>}
                            </div>
                        </div>
                        <div className='yerevan-it'>
                            <div className='image-ait'>
                                <img src="https://aitschool.am/images/office_yerevan.jpeg"></img>
                            </div>
                            <div>

                                {language === 'am' && <p>Ք. Երևան</p>}
                                {language === 'en' && <p>C.Yerevan</p>}
                                {language === 'ru' && <p>Г. Ереван</p>}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='what-will-give-ya'>
                    <div className='divo-and-image'>
                        <div className='texto'>

                            {language === 'am' && <h2>Ինչ կտա ձեզ AIT-ն</h2>}
                            {language === 'en' && <h2>What will AIT give you?</h2>}
                            {language === 'ru' && <h2>Что вам даст АИТ?</h2>}
                            <div className='image-divs'>
                                <div className='whatwillgivedivs'>
                                    <div className='no'>
                                        <div className='numero'>
                                            <img src="https://aitschool.am/images/number1.svg" alt="" />
                                        </div>
                                        <div className='lolo'>
                                            {language === 'am' && <h3>Կրթություն</h3>}
                                            {language === 'en' && <h3>Education</h3>}
                                            {language === 'ru' && <h3>Образование</h3>}

                                            {language === 'am' && <p>Մասնակցի՛ր 10 ամսյա դասընթացին և ձեռք բեր<br></br> ծրագրավորման հիմնարար գիտելիքներ: Ինչպես <br></br>նաև կարող եք ուսանել Graphic Design, UI/UX<br></br> Design, SMM և Անգլերեն</p>}
                                            {language === 'en' && <p>Take part in the 10-month course and acquire<br></br> fundamental knowledge of programming. How <br></br>you can also study Graphic Design, UI/UX<br></br> Design, SMM and English</p>}
                                            {language === 'ru' && <p>Примите участие в 10-месячном курсе и получите фундаментальные знания в области программирования. Как <br></br>вы также можете изучать графический дизайн, UI/UX<br></br> дизайн, SMM и английский язык</p>}
                                        </div>
                                    </div>
                                    <div className='no no2'>
                                        <div className='numero numero2'>
                                            <img src="https://aitschool.am/images/number2.svg" alt="" />
                                        </div>
                                        <div className='lolo'>
                                            {language === 'am' && <h3>Պրակտիկա</h3>}
                                            {language === 'en' && <h3>Exercise</h3>}
                                            {language === 'ru' && <h3>Упражняться</h3>}

                                            {language === 'am' && <p>Դասընթացի ավարտից հետո անցեք փորձաշրջան դպրոցին կից գործող ծրագրավորման ընկերությունում։ Կիրառի՛ր գիտելիքներդ՝ աշխատելով իրական նախագծերի վրա</p>}
                                            {language === 'en' && <p>After completing the course, take a trial period at a programming company operating under the school. Apply your knowledge by working on real projects</p>}
                                            {language === 'ru' && <p>После прохождения курса пройдите испытательный срок в компании-разработчике, работающей при школе. Примените свои знания, работая над реальными проектами</p>}
                                        </div>
                                    </div>
                                    <div className='no'>
                                        <div className='numero'>
                                            <img src="https://aitschool.am/images/number3.svg" alt="" />
                                        </div>
                                        <div className='lolo'>
                                            {language === 'am' && <h3>Աշխատանք</h3>}
                                            {language === 'en' && <h3>Work</h3>}
                                            {language === 'ru' && <h3>Работа</h3>}

                                            {language === 'am' && <p>Ստացի՛ր մեր թիմին միանալու հնարավորություն։ Մեր ուսանողները կազմում են մեր թիմի 80%ը։</p>}
                                            {language === 'en' && <p>Get a chance to join our team. Our students make up 80% of our team.</p>}
                                            {language === 'ru' && <p>Получите шанс присоединиться к нашей команде. Наши студенты составляют 80% нашей команды.</p>}

                                        </div>
                                    </div>
                                </div>
                                <div className='world-image'>
                                    <img className='image-world' src="https://aitschool.am/images/globus.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Menu;
