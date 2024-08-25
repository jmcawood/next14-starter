import styles from "./singlePost.module.css"
import Image from "next/image"

const SinglePostPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image 
                src="https://images.pexels.com/photos/26653530/pexels-photo-26653530/free-photo-of-stars-streaks-over-snow-covered-mountain.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="" 
                fill 
                className={styles.img}
                />
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>Title</h1>
                <div className={styles.detail}>
                    <Image 
                    src="https://images.pexels.com/photos/26653530/pexels-photo-26653530/free-photo-of-stars-streaks-over-snow-covered-mountain.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt=""  
                    className={styles.avatar}
                    width={50}
                    height={50}
                    />
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Author</span>
                        <span className={styles.detailValue}>Terry Jefferson</span>
                    </div>
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Published</span>
                        <span className={styles.detailValue}>25.08.2024</span>
                    </div>
                </div>
                <div className={styles.content}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae magnam explicabo officia praesentium. Possimus repudiandae ullam velit asperiores reprehenderit magni, tempore nulla, nesciunt dignissimos explicabo facere numquam expedita impedit enim.
                </div>
            </div>
        </div>
    )
}

export default SinglePostPage