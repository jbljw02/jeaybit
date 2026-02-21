import styles from '../styles/maintenance/maintenance.module.css';

export default function Home() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.card}>
                <h1 className={styles.title}>서비스 점검 중</h1>
                <p className={styles.subtitle}>더 나은 서비스 제공을 위해 현재 시스템 점검을 진행하고 있습니다.</p>
                <div className={styles.divider} />
                <p className={styles.description}>
                    이용에 불편을 드려 죄송합니다.<br />
                    점검이 완료되는 즉시 서비스를 재개할 예정입니다.
                </p>
            </div>
            <p className={styles.footer}>JeayBit &copy; {new Date().getFullYear()}</p>
        </div>
    );
}
