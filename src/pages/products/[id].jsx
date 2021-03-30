import React from "react";
// import { useRouter } from 'next/router'
import Link from "next/link";

import products from "../../../products.json";
import { motion } from 'framer-motion'
import { fadeInUp } from '../../styles/animations'

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.05
    }
  }
}

export default function Product({ id }) {
  // const { query, isFallback } = useRouter();

  // if ( isFallback ) {
  //     return <p>Carregando...</p>;
  // }

  let product = null;
  products.map((p, key) => {
    if (p.id === id) {
      product = products[key];
    }
  });

  return (
    <motion.div
        initial='initial'
        animate='animate'
        exit={{ opacity: 0 }}
    >
      <div className="fullscreen">
        <div className="product">
          <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            className="img"
          >
            <motion.img
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              key={product.image} 
              src={product.image} 
            />
          </motion.div>
          <div className="product-details">
            <motion.div variants={stagger} className="inner">
              <Link href="/">
                <motion.div variants={fadeInUp}>
                  <a className="go-back">Back to products</a>
                </motion.div>
              </Link>
              <motion.div variants={fadeInUp}>
                <span className="category">Protein</span>
              </motion.div>
              <motion.h5 variants={fadeInUp}>{product.name}</motion.h5>
              <motion.p variants={fadeInUp}>{product.details}</motion.p>
              <motion.div variants={fadeInUp} className="additonals">
                <span>Soy Free</span>
                <span>Gluten Free</span>
              </motion.div>
              <motion.div variants={fadeInUp} className="qty-price">
                <div className="qty">
                  <div className="minus">-</div>
                  <div className="amount">1</div>
                  <div className="add">+</div>
                </div>
                <span className="price">{product.price}</span>
              </motion.div>
              <motion.div variants={fadeInUp} className="btn-row">
                <button className="add-to-cart"> Add to cart</button>
                <button className="subscribe"> Subscribe</button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

Product.getInitialProps = async (context) => {
  const { id } = context.query;
  return { id };
};

// export const getStaticPaths = async () => {
//     const response = await fetch(`https://api.github.com/orgs/rocketseat/members`);
//     const data = await response.json();

//     const paths = data.map(member => {
//         return { params: { login: member.login } }
//     })

//     return {
//         paths,
//         fallback: true,
//     }
// }

// export const getStaticProps = async (context) => {
//     const { login } = context.params;

//     const response = await fetch(`https://api.github.com/users/${login}`);
//     const data = await response.json();

//     return {
//         props: {
//             user: data
//         },
//         revalidate: 10,
//     }
// }
