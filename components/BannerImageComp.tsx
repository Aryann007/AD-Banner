import styles from './BannerImageComp.module.css';

interface BannerProps {
  banner: {
    id: number;
    title: string;
    description: string;
    cta: string;
    image: string;
    background: string;
  };
  onEdit: () => void;
}

export default function BannerImageComp({ banner, onEdit }: BannerProps) {
  return (
    <div className={styles.banner} style={{ backgroundImage: `url(${banner.background})` }}>
      <div className={styles.imageOverlay}>
        <img className={styles.image} src={banner.image} alt={banner.title} />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>{banner.title}</h2>
        <p className={styles.description}>{banner.description}</p>
        <button className={styles.cta}>{banner.cta}</button>
      </div>
      <button className={styles.editIcon} onClick={onEdit} aria-label="Edit banner">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
        </svg>
      </button>
    </div>
  );
}
