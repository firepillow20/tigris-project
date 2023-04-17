import { Tigris } from '@tigrisdata/core';
import { loadEnvConfig } from '@next/env';
import { Card } from '../db/models/cards';

// Run the config loader only when not executing within next runtime
if (process.env.NODE_ENV === undefined) {
  if (process.env.APP_ENV === 'development') {
    loadEnvConfig(process.cwd(), true);
  } else if (process.env.APP_ENV === 'production') {
    loadEnvConfig(process.cwd());
  }
}

async function main() {
  // setup client and register schemas
  const tigrisClient = new Tigris();
  await tigrisClient.registerSchemas([Card]);
}

main();
