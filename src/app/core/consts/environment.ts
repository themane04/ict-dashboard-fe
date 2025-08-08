import {endpoints} from './backend';
import {urls} from './frontend';
import {config} from './config';

export const environment = {
  backendUrl: 'http://localhost:5211',
  backendApiUrl: 'http://localhost:5211/api',
  backendEndpoints: endpoints,
  frontendUrls: urls,
  config: config,
}
