import products from '../../products.json';
import Link from 'next/link'

import { motion } from 'framer-motion'
import { fadeInUp } from '../styles/animations'

// animate: defines animation
// initial: defines initial state of animation or starting point
// exit: define animation when component exits

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function Home(props) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit={{ opacity: 0 }}
    >
      <motion.div variants={stagger} className='container center'>
        <motion.div
          initial={{ x:-200, opacity: 0 }}
          animate={{ x: 0, opacity:1 }}
          className='title'
        >
          <h1>Select a protein</h1>
        </motion.div>
        <motion.div variants={stagger} className='product-row'>
          {products.map(product => (
            <Link
              key={product.id}
              href='/products/[id]'
              as={`/products/${product.id}`}
            >
              <motion.div
                whileHover={{scale: 1.05}}
                whileTap={{scale: 0.95}}
                variants={fadeInUp} 
                className='card'
              >
                <span className='category'>Protein</span>
                <motion.img 
                  initial={{ x: 60, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  key={product.image} 
                  src={product.image} 
                  width={250} 
                />
                <div className='product-info'>
                  <h4>{product.name}</h4>
                  <span>{product.price}</span>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

// export const getStaticProps = async () => {
//   // const response = await fetch('https://api.github.com/orgs/rocketseat');
//   // const data = await response.json();

//   return {
//     props: {
//       products: data,
//     },
//     revalidate: 10,
//   }
// }
