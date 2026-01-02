/**
 * Site Configuration
 * Handles environment variables for site branding and customization
 */

export interface SiteConfig {
  title: string;
  description: string;
  name: string;
}

/**
 * Site configuration object
 * Uses environment variables with fallback to default values
 * Note: NEXT_PUBLIC_ environment variables are statically embedded at build time
 */
export const siteConfig: SiteConfig = {
  title: process.env.NEXT_PUBLIC_SITE_TITLE || "非凡影院 - 2026免费高清电影网站",
  description: process.env.NEXT_PUBLIC_SITE_DESCRIPTION || "非凡影院每日都会为广大影迷朋友更新最近热播电视剧大全、热播电影大全 、热播动漫大全.重点实时更新热播剧,欢迎各位影剧朋友免费访问非凡影音电影网进行观看。",
  name: process.env.NEXT_PUBLIC_SITE_NAME || "非凡影院",
};
