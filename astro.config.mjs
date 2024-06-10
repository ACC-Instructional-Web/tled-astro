import { defineConfig } from 'astro/config';
import aws from 'astro-sst';

export default defineConfig({
  output: 'hybrid',
  adapter: aws(),
});
