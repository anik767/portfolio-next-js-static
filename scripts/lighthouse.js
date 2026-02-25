#!/usr/bin/env node

/**
 * Lighthouse Report Export Script
 * 
 * Exports Lighthouse audit reports as HTML files.
 * 
 * Usage:
 *   npm run lighthouse [URL]              - Desktop audit (default)
 *   npm run lighthouse:mobile [URL]       - Mobile audit
 *   npm run lighthouse:desktop [URL]      - Desktop audit
 * 
 * Examples:
 *   npm run lighthouse http://localhost:3000
 *   npm run lighthouse:mobile https://example.com
 */

import * as chromeLauncher from 'chrome-launcher';
import lighthouse from 'lighthouse';
import fs from 'node:fs';
import path from 'node:path';

// Parse command line arguments
const args = process.argv.slice(2);
const url = args.find(arg => !arg.startsWith('--')) || 'http://localhost:3000';
const isMobile = args.includes('--mobile');
const formFactor = isMobile ? 'mobile' : 'desktop';

let chrome = null;

try {
  console.log(`\n🔍 Starting Lighthouse audit...`);
  console.log(`📍 URL: ${url}`);
  console.log(`📱 Device: ${formFactor}\n`);

  // Launch Chrome
  chrome = await chromeLauncher.launch();

  // Run Lighthouse audit
  const result = await lighthouse(url, {
    port: chrome.port,
    formFactor: formFactor,
    output: 'html',
    screenEmulation: {
      mobile: formFactor === 'mobile',
      width: formFactor === 'mobile' ? 412 : 1350,
      height: formFactor === 'mobile' ? 732 : 940,
      deviceScaleFactor: formFactor === 'mobile' ? 2.625 : 1,
    },
  });

  // Create reports directory
  const reportsDir = path.join(process.cwd(), 'lighthouse-reports');
  if (!fs.existsSync(reportsDir)) {
    fs.mkdirSync(reportsDir, { recursive: true });
  }

  // Generate filename with timestamp
  const timestamp = new Date().toISOString().replaceAll(':', '-').replaceAll('.', '-').slice(0, -5);
  const filename = `lighthouse-${formFactor}-${timestamp}.html`;
  const filePath = path.join(reportsDir, filename);

  // Save HTML report
  fs.writeFileSync(filePath, result.report);

  // Display results
  const categories = result.lhr.categories;
  console.log('\n📊 Audit Results:\n');
  console.log(`Performance:      ${Math.round((categories.performance?.score || 0) * 100)}/100`);
  console.log(`Accessibility:    ${Math.round((categories.accessibility?.score || 0) * 100)}/100`);
  console.log(`Best Practices:   ${Math.round((categories['best-practices']?.score || 0) * 100)}/100`);
  console.log(`SEO:              ${Math.round((categories.seo?.score || 0) * 100)}/100`);
  
  console.log(`\n✅ Report exported to: ${filePath}\n`);

} catch (error) {
  console.error('\n❌ Error:', error.message);
  process.exit(1);
} finally {
  if (chrome) {
    await chrome.kill();
  }
}
