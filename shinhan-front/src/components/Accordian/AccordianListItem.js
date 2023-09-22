import styles from "./AccordianListItem.module.css";
import ArrowIcon from "../../assets/icons/ic_arrow.svg";

const AccordianListItem = ({title, onClick, isOpen}) => {
    return (
        <div className="accordian">
            <div className={styles.accordianContainer} onClick={onClick}>
                <div className={styles.accorianTitle}>{title}</div>
                <img src={ArrowIcon} class={`${styles.ArrowIcon} ${isOpen ? styles.arrowOpen : ""}`} />
            </div>
        </div>

        
    );
};

export default AccordianListItem;