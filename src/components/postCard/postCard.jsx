import styles from "./postCard.module.css"
import Image from "next/image";
import Link from "next/link";

const PostCard = () => {
     return (
         <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.imgContainer}>
                    <Image src="https://images.pexels.com/photos/26653530/pexels-photo-26653530/free-photo-of-stars-streaks-over-snow-covered-mountain.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill className={styles.img}/>
                </div>
                <span className={styles.date}>25.08.2024</span>
            </div>
            <div className={styles.bottom}>
                <h1 className={styles.title}>Title</h1>
                <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto vel ratione cupiditate magni autem consectetur perspiciatis maiores non enim incidunt!</p>
                <Link className={styles.link} href="/blog/post">READ MORE</Link>
            </div>
         </div>
     )
};

export default  PostCard;