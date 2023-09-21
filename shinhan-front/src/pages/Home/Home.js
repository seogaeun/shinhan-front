import styles from "./Home.module.css";
import infoImg from "./../../assets/images/header_1.svg"
import EventInfo from "./../../components/EventInfo/Eventinfo";
import ArrowIcon from "./../../assets/icons/ic_arrow.svg"
import { useState } from "react";
import AccordianListItem from "../../components/Accordian/AccordianListItem";

import EventLogo1 from "./../../assets/images/event_logo_1.png";
import EventLogoFill from "./../../assets/icons/ic_arrow_fill.png";


const Home = () =>{
    const [openAccordian1, setOpenAccordian11] = useState(false);
    const [openAccordian2, setOpenAccordian12] = useState(false);
    const [text, setText] = useState("hello");

    const events = [
        {num: 1, title:"기간",text:"2023.07.01(토) ~ 2023.12.31(일)"},
        {num: 2, title:"대상",text:"신한투자증권 생애 첫 계좌 개설 신규 고객"},
        {num: 2, title:"혜택",text:"1000만원 드림"}
    ];



    {/*string 앞에 set을 하면 형태를 바꾸는 그런 useState 함수*/}
    const onClickAccordian1 = () =>{
        setOpenAccordian11(!openAccordian1);
    }
    const onClickAccordian2 = () =>{
        setOpenAccordian12(!openAccordian2);
    }

    return (
        <div className={styles.container}>
            <section className={styles.header}>
                <div className={styles.subTitle}>지금 계좌 개설하면</div>
                <div className={styles.title}>
                    <span className={styles.primaryColor}>수수료 평생혜택</span> 제공
                </div>

            </section>

            {/*카드 섹션 */}
            <div className={styles.mainInfo}>
                <div className={styles.cardImageContainer}>
                    <img className={styles.ic_Share_img}src={infoImg} alt="infoImg"/>
                </div>

                <div className={styles.cardTitle}>온라인 국내주식 수수료
                <br/>
                <span className={styles.primaryColor}>평생 혜택</span> 제공
            </div>
            {/*설명 */}
                <ul className={styles.cardDesc}>
                    <li>* 유관기관 제비용만 고객 부담(07.01 기준)</li>
                    <li>   - 코스피, 코스닥, 코넥스 : 0.00363960%</li>
                    <li>   - K-OTC : 0.09091870%</li>
                    <li>   - ETF, ETN, ELW : 0.00420870%</li>
                    <li>* 온라인 채널 거래에 한함(증권플러스 제외)</li>
                </ul>            
            </div>

            {/*기간 & 대상*/}
            <section className={styles.subInfo}>
                {events.map((event) => (
                    <EventInfo title={event.title} text={event.text}/>
                ))}



            </section>

            {/*혜택 받으러가기 버튼*/}
            <a href="#" target="_blank">
                <div className={styles.roundButton}>
                    수수료 평생혜택 받으러가기
                </div>                 
            </a>
            
            {/*토글 목록들*/}
            <section className={styles.linkSection}>
                {/*메뉴 1 */}
                <AccordianListItem
                    title={"투자에 필요한 더~ 많은 혜택"}
                    onClick={onClickAccordian1}
                    isOpen={openAccordian1}
                />

                {/*메뉴 2 */}
                <AccordianListItem
                    title={"쉽고 빠른 투자 정보"}
                    onClick={onClickAccordian2}
                    isOpen={openAccordian2}
                />
                

                {/* <div className={styles.accordianContainer} onClick={onClickAccordian1}>
                    <div className={styles.accordianTitle}>
                    투자에 필요한 더~ 많은 혜택
                    </div>
                    <img src={ArrowIcon} className={`${styles.arrowIcon}`}/>
                </div>
                <div className={`${styles.linkContentContainer}`}>
                    <a className={styles.linkItem} herf={"https://digitalshinhansec.com/global"}>
                        <div className={styles.linkLayout}>
                            <img className={styles.linkLogo} src={EventLogo1}/>
                            <div>
                                <div className={styles.linksubText}>
                                수수료+환전우대 혜택까지
                                </div>
                                <div className={styles.linkText}>해외주식</div>
                            </div>
                            
                        </div>
                        </a>
                </div> */}



            </section>

            {/*이벤트 유의사항 */}
            <div className={styles.notice}>
                <div className={styles.noticeTitle}>※ 이벤트 유의사항</div>
                <ul className={styles.noticeDesc}>
                        <li>기간 내 대상 고객이 이벤트를 신청해야 혜택이 적용되며, 신청 시점 이후 체결된 거래에 한해 수수료 혜택이 적용됩니다.</li>
                        <li> 본 이벤트 생애 첫 계좌 개설 신규 고객 조건은 2023.07.01(토) 이전에 당사에서 개설한 계좌가 없는 고객(IRP, DB, DC 계좌 제외) 입니다.</li>
                        <li>이벤트 대상 계좌는 ① 비대면 증권종합계좌(신한알파, 모바일 홈페이지, 신한플러스에서 개설한 계좌 한정), ②은행제휴 S-Lite 한정입니다. 파운트 등 핀테크 제휴계좌는 제외됩니다.</li>
                    </ul>     
       
            </div>           

            {/*Footer */}
            <div className={styles.footer}>
                <ul className={styles.footerDesc}>
                        <li>서울특별시 영등포구 여의대로 70 (신한투자증권 타워)</li>
                        <li> 대표이사 김상태  | 사업자등록번호 116-81-36684</li>
                        <li>©2023 SHINHAN SECURITIES CO.,LTD.</li>
                    </ul>     
       
            </div>            

        </div>
    ); 

};
export default Home;