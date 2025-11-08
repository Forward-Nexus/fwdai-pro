#!/usr/bin/env node

/**
 * Performance Monitoring Setup
 * 
 * Adds Web Vitals tracking and performance monitoring
 */

import fs from 'fs-extra';
import chalk from 'chalk';

async function setupPerformanceMonitoring() {
  console.log(chalk.cyan.bold('\n⚡ Performance Monitoring Setup\n'));

  // Web Vitals monitoring
  const webVitalsCode = `// lib/web-vitals.ts
import { onCLS, onFID, onFCP, onLCP, onTTFB } from 'web-vitals';

function sendToAnalytics(metric) {
  // Send to your analytics endpoint
  const body = JSON.stringify(metric);
  const url = '/api/analytics';

  // Use navigator.sendBeacon if available
  if (navigator.sendBeacon) {
    navigator.sendBeacon(url, body);
  } else {
    fetch(url, { body, method: 'POST', keepalive: true });
  }
}

export function reportWebVitals() {
  onCLS(sendToAnalytics);
  onFID(sendToAnalytics);
  onFCP(sendToAnalytics);
  onLCP(sendToAnalytics);
  onTTFB(sendToAnalytics);
}
`;

  // Performance observer
  const performanceObserverCode = `// lib/performance-observer.ts
export function observePerformance() {
  if (typeof window === 'undefined') return;

  // Observe long tasks
  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (entry.duration > 50) {
        console.warn('Long task detected:', entry);
        // Send to monitoring service
      }
    }
  });

  observer.observe({ entryTypes: ['longtask'] });

  // Memory usage (Chrome only)
  if ('memory' in performance) {
    setInterval(() => {
      const memory = (performance as any).memory;
      if (memory.usedJSHeapSize > memory.jsHeapSizeLimit * 0.9) {
        console.warn('High memory usage detected');
      }
    }, 30000);
  }
}
`;

  // API endpoint for analytics
  const apiEndpointCode = `// pages/api/analytics.ts (or app/api/analytics/route.ts)
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const metric = await request.json();
  
  // Log or send to analytics service
  console.log('Web Vital:', metric);
  
  // Example: Send to PostHog, Sentry, or custom analytics
  // await fetch('https://your-analytics-service.com/metrics', {
  //   method: 'POST',
  //   body: JSON.stringify(metric)
  // });

  return NextResponse.json({ success: true });
}
`;

  await fs.ensureDir('lib');
  await fs.writeFile('lib/web-vitals.ts', webVitalsCode);
  await fs.writeFile('lib/performance-observer.ts', performanceObserverCode);
  
  await fs.ensureDir('pages/api');
  await fs.writeFile('pages/api/analytics.ts', apiEndpointCode);

  console.log(chalk.green('\n✅ Performance monitoring configured!\n'));
  console.log(chalk.white('Created:'));
  console.log(chalk.white('  - lib/web-vitals.ts'));
  console.log(chalk.white('  - lib/performance-observer.ts'));
  console.log(chalk.white('  - pages/api/analytics.ts\n'));
  console.log(chalk.cyan('Next steps:'));
  console.log(chalk.white('1. Install: pnpm add web-vitals'));
  console.log(chalk.white('2. Import in _app.tsx or layout.tsx:'));
  console.log(chalk.gray('   import { reportWebVitals } from "@/lib/web-vitals";'));
  console.log(chalk.gray('   import { observePerformance } from "@/lib/performance-observer";'));
  console.log(chalk.gray('   reportWebVitals();'));
  console.log(chalk.gray('   observePerformance();'));
  console.log(chalk.white('3. Monitor metrics in your analytics dashboard\n'));
}

setupPerformanceMonitoring().catch(console.error);

