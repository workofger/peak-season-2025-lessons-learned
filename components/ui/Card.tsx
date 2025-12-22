/**
 * 🃏 CARD COMPONENT
 * 
 * Reusable card component with various styles.
 */

import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context';

type CardVariant = 'default' | 'success' | 'warning' | 'info' | 'primary';

interface CardProps {
  children: React.ReactNode;
  variant?: CardVariant;
  className?: string;
  onClick?: () => void;
  hoverable?: boolean;
  animate?: boolean;
  delay?: number;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  className = '',
  onClick,
  hoverable = false,
  animate = true,
  delay = 0,
}) => {
  const { colors } = useTheme();

  const getVariantStyles = () => {
    switch (variant) {
      case 'success':
        return {
          backgroundColor: `${colors.success}10`,
          borderColor: `${colors.success}30`,
        };
      case 'warning':
        return {
          backgroundColor: `${colors.warning}10`,
          borderColor: `${colors.warning}30`,
        };
      case 'info':
        return {
          backgroundColor: `${colors.info}10`,
          borderColor: `${colors.info}30`,
        };
      case 'primary':
        return {
          backgroundColor: `${colors.primary}10`,
          borderColor: `${colors.primary}30`,
        };
      default:
        return {
          backgroundColor: `${colors.bgTertiary}40`,
          borderColor: colors.border,
        };
    }
  };

  const styles = getVariantStyles();

  const content = (
    <div
      className={`rounded-xl border p-4 ${hoverable ? 'cursor-pointer transition-all hover:scale-[1.02]' : ''} ${className}`}
      style={styles}
      onClick={onClick}
    >
      {children}
    </div>
  );

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay }}
      >
        {content}
      </motion.div>
    );
  }

  return content;
};

export default Card;

