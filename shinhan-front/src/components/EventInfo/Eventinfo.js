import styles from "./Eventinfo.module.css";


const EventInfo = ({ title, text }) => {

    return(
        <div className={styles.eventInfo}>
            <div className={styles.infoTitle}>{title}</div>
            <div className={styles.infoText}>{text}</div>
        </div>
    );
};

export default EventInfo;