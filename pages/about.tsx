import Header from "../komponen/Header";
import styles from "../styles/about.module.css";
import Image from "next/image";
import Link from 'next/link';

export default function About() {
    return(
        
        <div className={styles.container}>
            <Header />

            
            <div className={styles.kotak}>

                <div className={styles.kotak1}>
                    <div className={styles.image1}>
                        <Link href="https://m.facebook.com/?tbua=1" >
                            <Image layout='fill' src="/facebook.svg" alt='picture' ></Image>
                        </Link>
                    </div>

                    <div className={styles.image2}>
                        <Link href="https://www.instagram.com/akmal_kv/" >
                            <Image layout='fill' src="/instagram.svg" alt='picture' ></Image>
                        </Link>
                    </div>

                    <div className={styles.image3}>
                        <Link href="https://github.com/akmaluiux" >
                            <Image layout='fill' src="/github.svg" alt='picture' ></Image>
                        </Link>
                    </div>

                    <div className={styles.text}>
                        <h2>ABOUT ME</h2>
                        <h4>i`am a UI/UX designer and front end developer from indonesia</h4>
                        <p>social media :</p>
                    </div>
                </div>

                <div className={styles.image}>
                    <Image layout='fill' src="/ho4.svg" alt='picture' ></Image>
                </div>
            </div>
        </div>
        
 
    )
}