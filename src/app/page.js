import Image from 'next/image';
import styles from './page.module.css';
import Index from '../../components/Products/Index';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1> hello world</h1>

      <Index />
    </main>
  );
}
