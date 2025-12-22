/**
 * 🏷️ BADGE COMPONENT
 * 
 * Reusable badge/tag component.
 */

import React from 'react';
import { useTheme } from '../../context';

type BadgeVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | 'neutral';
type BadgeSize = 'sm' | 'md' | 'lg';

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  size?: BadgeSize;
  className?: string;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  icon,
}) => {
  const { colors } = useTheme();

  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return {
          backgroundColor: `${colors.primary}20`,
          color: colors.primary,
          borderColor: `${colors.primary}30`,
        };
      case 'secondary':
        return {
          backgroundColor: `${colors.secondary}20`,
          color: colors.secondary,
          borderColor: `${colors.secondary}30`,
        };
      case 'success':
        return {
          backgroundColor: `${colors.success}20`,
          color: colors.success,
          borderColor: `${colors.success}30`,
        };
      case 'warning':
        return {
          backgroundColor: `${colors.warning}20`,
          color: colors.warning,
          borderColor: `${colors.warning}30`,
        };
      case 'error':
        return {
          backgroundColor: `${colors.error}20`,
          color: colors.error,
          borderColor: `${colors.error}30`,
        };
      case 'info':
        return {
          backgroundColor: `${colors.info}20`,
          color: colors.info,
          borderColor: `${colors.info}30`,
        };
      case 'neutral':
      default:
        return {
          backgroundColor: colors.bgTertiary,
          color: colors.textSecondary,
          borderColor: colors.border,
        };
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'px-2 py-0.5 text-xs';
      case 'lg':
        return 'px-4 py-2 text-sm';
      case 'md':
      default:
        return 'px-3 py-1 text-xs';
    }
  };

  const styles = getVariantStyles();

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border font-bold uppercase tracking-wider ${getSizeClasses()} ${className}`}
      style={styles}
    >
      {icon}
      {children}
    </span>
  );
};

export default Badge;

