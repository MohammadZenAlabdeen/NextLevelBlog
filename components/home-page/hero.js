import Image from 'next/image';

import classes from './hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='https://res.cloudinary.com/dwv77l2d3/image/upload/v1742935755/nextjs-course-blog/pl53l0i5omz0owfjdvxo.png'
          alt='An image showing Max'
          width={200}
          height={300}
        />
      </div>
      <h1>Hi, I'm Mohammad</h1>
      <p>
        I blog about web development - especially frontend frameworks like
        Angular or React.
      </p>
    </section>
  );
}

export default Hero;
