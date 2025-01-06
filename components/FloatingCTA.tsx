import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useTranslations } from 'next-intl';


interface FloatingCTAProps {
  isVisible: boolean;
}

export default function FloatingCTA({ isVisible }: FloatingCTAProps) {
  const t = useTranslations('navbar');
 
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-8 right-8 z-50"
        >
          <Link
            href="https://calendly.com/gkitoko-pro"
            target="_blank"
            className="flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-800 text-white px-6 py-3 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl"
          >
            <span>{t('cta_button')}</span>
            <motion.span
              className="inline-block"
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
              transition={{
                type: "spring",
                stiffness: 700,
                damping: 15,
              }}
            >
              →
            </motion.span>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 