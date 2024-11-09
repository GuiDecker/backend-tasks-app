import { defineConfig } from 'drizzle-kit'
import { env } from './env'

export default defineConfig({
  schema: './src/db/schema.ts',
  out: './.migrations',
  dialect: 'postgresql',
  dbCredentials: {
    // put your user:password:host:port/database
    url: env.DATABASE_URL,
  },

  // driver: "pglite",
  // dbCredentials: {
  //   url: "./database/",
  // },

  // extensionsFilters: ["postgis"],
  // schemaFilter: "public",
  // tablesFilter: "*",

  // introspect: {
  //   casing: "camel",
  // },

  // migrations: {
  //   prefix: "timestamp",
  //   table: "__drizzle_migrations__",
  //   schema: "public",
  // },

  // breakpoints: true,
  // strict: true,
  // verbose: true,
})
