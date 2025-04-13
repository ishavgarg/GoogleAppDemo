// Breakpoints for responsive design
export const breakpoints = {
  xs: '320px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1400px'
};

// Media query helper functions
export const media = {
  xs: `@media (min-width: ${breakpoints.xs})`,
  sm: `@media (min-width: ${breakpoints.sm})`,
  md: `@media (min-width: ${breakpoints.md})`,
  lg: `@media (min-width: ${breakpoints.lg})`,
  xl: `@media (min-width: ${breakpoints.xl})`,
  xxl: `@media (min-width: ${breakpoints.xxl})`,
  
  // Max width media queries (useful for mobile-first design)
  maxXs: `@media (max-width: ${breakpoints.xs})`,
  maxSm: `@media (max-width: ${breakpoints.sm})`,
  maxMd: `@media (max-width: ${breakpoints.md})`,
  maxLg: `@media (max-width: ${breakpoints.lg})`,
  maxXl: `@media (max-width: ${breakpoints.xl})`,
  
  // Custom range
  between: (min: string, max: string) => 
    `@media (min-width: ${min}) and (max-width: ${max})`
};

// Helper function for responsive font sizes
export const responsiveFontSize = {
  xs: '0.75rem',  // 12px
  sm: '0.875rem', // 14px
  base: '1rem',   // 16px
  md: '1.125rem', // 18px
  lg: '1.25rem',  // 20px
  xl: '1.5rem',   // 24px
  xxl: '2rem'     // 32px
};

// Helper function for responsive spacing
export const spacing = {
  xs: '0.25rem',  // 4px
  sm: '0.5rem',   // 8px
  md: '1rem',     // 16px
  lg: '1.5rem',   // 24px
  xl: '2rem',     // 32px
  xxl: '3rem'     // 48px
}; 