//컴포넌트는 시작은 대문자로 해야 인식 함
import Logo from "./../../assets/images/logo.svg";
import Share from "./../../assets/images/ic_share.svg"
import styles from "./TopNav.module.css"


const TopNav = () => {
    const APP_DOWNLOAD_LINK = "https://open.shinhansec.com/phone/goM.jsp?p=OTUxMCYmJiZTJiY*&amp;v=2";
    const currentUrl = window.document.location.href;

    //onClick 시, 파라미터로 지정된 링크 복사되고 알림창 보내는 함수 구현
    const handleCopyClipBoard = () => {
        navigator.clipboard
          .writeText(currentUrl)
          .then(() => {
            alert("공유되었습니다~~");
          })
          .catch((err) => {
            alert("공유에 실패했습니다.");
          });
      };
      

    const onClickShareButton = () => {
        handleCopyClipBoard();
    }


    return <div>
        {/*로고*/}
        <div className={styles.container}>
            <img src={Logo} alt="logo"/>

            {/*----------------오른쪽 버튼--------------------*/}
            <div className={styles.rightButtonContainer}>
                    {/*다운로드 버튼*/}
                    <a href={APP_DOWNLOAD_LINK} target="_blank">
                        <div className={styles.roundButton}>앱 다운로드</div> 
                        {/*class가 아니라 className을 써야함*/}
                        {/*roundbutton통해 난수 생성*/}
                        
                    </a>


                {/*공유 버튼*/}
                <div className={styles.icShare} onClick={onClickShareButton}>
                    <img className={styles.ic_Share_img}src={Share} alt="share"/>
                </div>
            </div>
        </div>



        
    </div>
};


export default TopNav; //이렇게 매핑해야 default 컴포넌트로 인지함

