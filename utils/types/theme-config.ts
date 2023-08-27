/**
 * Type definition for theme configuration
 * specified in `theme-config.json`
 */
export interface ThemeConfig {
  /**
   * Global configurations like url, language etc.
   */
  global : {
    /**
     * Name of the website
     */
    siteName: string;
    /**
     * URL of the website
     */
    siteUrl: string;
  }
}