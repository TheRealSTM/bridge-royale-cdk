#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { BridgeRoyaleAppStack } from '../lib/bridge-royale-app-stack';

const app = new cdk.App();
new BridgeRoyaleAppStack(app, 'BridgeRoyaleAppStack', {
  /* Uncomment the next line if you know exactly what Account and Region you
   * want to deploy the stack to. */
  env: { account: '992382556853', region: 'us-east-1' },

  /* For more information, see https://docs.aws.amazon.com/cdk/latest/guide/environments.html */
});