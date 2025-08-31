import * as React from 'react';
import { Link, navigate } from 'gatsby';

import AttributeGrid from '../components/AttributeGrid';
import Container from '../components/Container';
import Hero from '../components/Hero';
import BlogPreviewGrid from '../components/BlogPreviewGrid';
import Highlight from '../components/Highlight';
import Layout from '../components/Layout/Layout';
import ProductCollectionGrid from '../components/ProductCollectionGrid';
import ProductCardGrid from '../components/ProductCardGrid';
import Quote from '../components/Quote';
import Title from '../components/Title';

import { toOptimizedImage } from '../helpers/general';

import * as styles from './index.module.css';

import products from '../helpers/products.json';
import blogs from '../helpers/blogs.json';

const IndexPage = () => {
  const goToShop = () => {
    navigate('/shop');
  };

  return (
    <Layout disablePaddingBottom>
      {/* Hero Section */}
      <Hero
        maxWidth={'500px'}
        image={'/banner1.png'} // replace with your own banner
        title={'Streetwear Essentials'}
        subtitle={'Orujin Clothing — T-Shirts, Hoodies & More'}
        ctaText={'Shop Now'}
        ctaAction={goToShop}
      />

      {/* Message / About */}
      <div className={styles.messageContainer}>
        <p>
          Streetwear designed for everyday life by{' '}
          <span className={styles.gold}>Orujin Clothing</span>.
        </p>
        <p>Shop our T-shirts, hoodies, jeans, and accessories.</p>
      </div>

      {/* Collection Section */}
      <div className={styles.collectionContainer}>
        <Container size={'large'}>
          <Title name={'New Collection'} />
          <ProductCollectionGrid data={products} />
        </Container>
      </div>

      {/* New Arrivals */}
      <div className={styles.newArrivalsContainer}>
        <Container>
          <Title name={'New Arrivals'} link={'/shop'} textLink={'view all'} />
          <ProductCardGrid
            spacing={true}
            showSlider
            height={480}
            columns={3}
            data={products}
          />
        </Container>
      </div>

      {/* Highlight Section */}
      <div className={styles.highlightContainer}>
        <Container size={'large'} fullMobile>
          <Highlight
            image={'/highlight.png'} // replace with your highlight image
            altImage={'highlight image'}
            miniImage={'/highlightmin.png'} // optional
            miniImageAlt={'mini highlight image'}
            title={'Orujin Hoodies'}
            description={`Our premium hoodies are soft, cozy, and built for streetwear and active life.`}
            textLink={'shop now'}
            link={'/shop'}
          />
        </Container>
      </div>

      {/* Promotion / Banner */}
      <div className={styles.promotionContainer}>
        <Hero
          image={toOptimizedImage('/banner2.png')} // replace with your promo banner
          title={`-50% Off\nAll Essentials`}
        />
        <div className={styles.linkContainers}>
          <Link to={'/shop'}>WOMAN</Link>
          <Link to={'/shop'}>MAN</Link>
        </div>
      </div>

      {/* Quote Section */}
      <Quote
        bgColor={'var(--standard-light-grey)'}
        title={'About Orujin'}
        quote={
          '“We believe in creating quality streetwear that combines comfort, style, and sustainability. Everything else should take care of itself.”'
        }
      />

      {/* Blog Section */}
      <div className={styles.blogsContainer}>
        <Container size={'large'}>
          <Title name={'Journal'} subtitle={'Notes on life and style'} />
          <BlogPreviewGrid data={blogs} />
        </Container>
      </div>

      {/* Sustainability / Promotion */}
      <div className={styles.sustainableContainer}>
        <Hero
          image={toOptimizedImage('/banner3.png')} // replace with your sustainability banner
          title={'We are Sustainable'}
          subtitle={
            'From caring for our land to supporting our people, discover the steps we’re taking to do more for the world around us.'
          }
          ctaText={'read more'}
          maxWidth={'660px'}
          ctaStyle={styles.ctaCustomButton}
        />
      </div>

      {/* Social Media Section */}
      <div className={styles.socialContainer}>
        <Title
          name={'Styled by You'}
          subtitle={'Tag @oru.jin.clothing to be featured.'}
        />
        <div className={styles.socialContentGrid}>
          <img src={toOptimizedImage(`/social/socialMedia1.png`)} alt={'social media 1'} />
          <img src={toOptimizedImage(`/social/socialMedia2.png`)} alt={'social media 2'} />
          <img src={toOptimizedImage(`/social/socialMedia3.png`)} alt={'social media 3'} />
          <img src={toOptimizedImage(`/social/socialMedia4.png`)} alt={'social media 4'} />
        </div>
      </div>

      <AttributeGrid />
    </Layout>
  );
};

export default IndexPage;
