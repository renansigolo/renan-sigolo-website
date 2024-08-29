/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  readonly NEXT_PUBLIC_SITE_URL: string;
  readonly NEXT_PUBLIC_GA_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
