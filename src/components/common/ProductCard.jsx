import { motion } from 'framer-motion';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import { slideUp } from '../../utils/animations';

export default function ProductCard({ product, index = 0 }) {
  return (
    <motion.div
      variants={slideUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-30px' }}
      transition={{ delay: index * 0.05 }}
    >
      <Card hover className="group h-full">
        <div className="aspect-[4/3] overflow-hidden bg-background">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        </div>
        <div className="p-5">
          <Badge className="mb-3">{product.category}</Badge>
          <h3 className="text-lg font-semibold leading-snug text-navy">{product.name}</h3>
         <p className="text-muted-foreground text-sm leading-relaxed">
           {product.description}
            </p>
        </div>
      </Card>
    </motion.div>
  );
}
