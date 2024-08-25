import Image from "next/image"
import styles from "./about.module.css"

const AboutPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h2 className={styles.subtitle}>About Agency</h2>
                <h1 className={styles.title}>
                    We create digital ideas that are bigger, bolder, braver and better.
                </h1>
                <p className={styles.description}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ratione ducimus incidunt voluptatibus voluptatum maxime nulla 
                    quis minima nostrum ea labore optio, eos, illo rerum perferendis delectus laboriosam quia modi aperiam error sequi! 
                    Architecto reprehenderit voluptate nostrum distinctio esse modi nihil. Distinctio pariatur doloribus et, eaque nulla magnam modi! Odit.
                </p>
                <div className={styles.boxes}>
                    <div className={styles.box}>
                        <h1>10 K+</h1>
                        <p>Year of experience</p>
                    </div>
                    <div className={styles.box}>
                        <h1>10 K+</h1>
                        <p>Year of experience</p>
                    </div>
                    <div className={styles.box}>
                        <h1>10 K+</h1>
                        <p>Year of experience</p>
                    </div>
                </div>
            </div>
            <div className={styles.imgContainer}>
                <Image
                src="/about.png"
                alt="About image"
                fill
                className={styles.img}
                />
            </div>
        </div>
    )
}

export default AboutPage

