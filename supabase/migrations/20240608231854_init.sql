
SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

CREATE EXTENSION IF NOT EXISTS "pg_net" WITH SCHEMA "extensions";

CREATE EXTENSION IF NOT EXISTS "pgsodium" WITH SCHEMA "pgsodium";

COMMENT ON SCHEMA "public" IS 'standard public schema';

CREATE EXTENSION IF NOT EXISTS "pg_graphql" WITH SCHEMA "graphql";

CREATE EXTENSION IF NOT EXISTS "pg_stat_statements" WITH SCHEMA "extensions";

CREATE EXTENSION IF NOT EXISTS "pgcrypto" WITH SCHEMA "extensions";

CREATE EXTENSION IF NOT EXISTS "pgjwt" WITH SCHEMA "extensions";

CREATE EXTENSION IF NOT EXISTS "supabase_vault" WITH SCHEMA "vault";

CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA "extensions";

CREATE TYPE "public"."interface_config_option" AS ENUM (
    'color',
    'image'
);

ALTER TYPE "public"."interface_config_option" OWNER TO "postgres";

CREATE TYPE "public"."tier" AS ENUM (
    'Free',
    'Tier 1',
    'Tier 2',
    'Tier 3'
);

ALTER TYPE "public"."tier" OWNER TO "postgres";

SET default_tablespace = '';

SET default_table_access_method = "heap";

CREATE TABLE IF NOT EXISTS "public"."admins" (
    "user_id" "uuid" NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "assigner" "uuid"
);

ALTER TABLE "public"."admins" OWNER TO "postgres";

CREATE TABLE IF NOT EXISTS "public"."galleries" (
    "name" "text" NOT NULL,
    "column_number" bigint,
    "tier" "text" DEFAULT 'Free'::"text",
    "nsfw" boolean,
    "tags" "text"[],
    "thumbnail_file" "text" DEFAULT ''::"text"
);

ALTER TABLE "public"."galleries" OWNER TO "postgres";

CREATE TABLE IF NOT EXISTS "public"."interface_configurations" (
    "name" "text" NOT NULL,
    "value" "text" NOT NULL,
    "type" "public"."interface_config_option" DEFAULT 'color'::"public"."interface_config_option" NOT NULL
);

ALTER TABLE "public"."interface_configurations" OWNER TO "postgres";

CREATE TABLE IF NOT EXISTS "public"."tags" (
    "name" "text" NOT NULL,
    "gallery_name" "text"
);

ALTER TABLE "public"."tags" OWNER TO "postgres";

CREATE TABLE IF NOT EXISTS "public"."tiers" (
    "name" "text" NOT NULL,
    "price" double precision NOT NULL,
    "color" "text" NOT NULL,
    "description" "text" NOT NULL
);

ALTER TABLE "public"."tiers" OWNER TO "postgres";

CREATE TABLE IF NOT EXISTS "public"."user_subscriptions" (
    "user_id" "uuid" NOT NULL,
    "tier" "public"."tier"
);

ALTER TABLE "public"."user_subscriptions" OWNER TO "postgres";

ALTER TABLE ONLY "public"."admins"
    ADD CONSTRAINT "admins_pkey" PRIMARY KEY ("user_id");

ALTER TABLE ONLY "public"."galleries"
    ADD CONSTRAINT "galleries_pkey" PRIMARY KEY ("name");

ALTER TABLE ONLY "public"."interface_configurations"
    ADD CONSTRAINT "interface_configurations_pkey" PRIMARY KEY ("name");

ALTER TABLE ONLY "public"."tags"
    ADD CONSTRAINT "tags_pkey" PRIMARY KEY ("name");

ALTER TABLE ONLY "public"."tiers"
    ADD CONSTRAINT "tiers_pkey" PRIMARY KEY ("name");

ALTER TABLE ONLY "public"."user_subscriptions"
    ADD CONSTRAINT "user_subscriptions_pkey" PRIMARY KEY ("user_id");

ALTER TABLE ONLY "public"."admins"
    ADD CONSTRAINT "admins_assigner_fkey" FOREIGN KEY ("assigner") REFERENCES "auth"."users"("id");

ALTER TABLE ONLY "public"."admins"
    ADD CONSTRAINT "admins_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "auth"."users"("id");

ALTER TABLE ONLY "public"."tags"
    ADD CONSTRAINT "tags_gallery_name_fkey" FOREIGN KEY ("gallery_name") REFERENCES "public"."galleries"("name");

ALTER TABLE ONLY "public"."user_subscriptions"
    ADD CONSTRAINT "user_subscriptions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "auth"."users"("id");

CREATE POLICY "Enable delete for admins" ON "public"."tags" FOR DELETE TO "authenticated" USING ((EXISTS ( SELECT 1
   FROM "public"."admins"
  WHERE ("admins"."user_id" = "auth"."uid"()))));

CREATE POLICY "Enable delete for users based on admins" ON "public"."galleries" FOR DELETE TO "authenticated" USING ((EXISTS ( SELECT 1
   FROM "public"."admins"
  WHERE ("admins"."user_id" = "auth"."uid"()))));

CREATE POLICY "Enable insert for admins" ON "public"."tags" FOR INSERT TO "authenticated" WITH CHECK ((EXISTS ( SELECT 1
   FROM "public"."admins"
  WHERE ("admins"."user_id" = "auth"."uid"()))));

CREATE POLICY "Enable insert for users based admins" ON "public"."galleries" FOR INSERT WITH CHECK ((EXISTS ( SELECT 1
   FROM "public"."admins"
  WHERE ("admins"."user_id" = "auth"."uid"()))));

CREATE POLICY "Enable read access for all users" ON "public"."admins" FOR SELECT USING (true);

CREATE POLICY "Enable read access for all users" ON "public"."galleries" FOR SELECT USING (true);

CREATE POLICY "Enable read access for all users" ON "public"."interface_configurations" FOR SELECT USING (true);

CREATE POLICY "Enable read access for all users" ON "public"."tags" FOR SELECT USING (true);

CREATE POLICY "Enable read access for all users" ON "public"."tiers" FOR SELECT USING (true);

CREATE POLICY "Enable read for users based on user_id" ON "public"."user_subscriptions" FOR SELECT USING (true);

CREATE POLICY "admin insert" ON "public"."tiers" FOR INSERT WITH CHECK ((EXISTS ( SELECT 1
   FROM "public"."admins"
  WHERE ("admins"."user_id" = "auth"."uid"()))));

CREATE POLICY "admin update" ON "public"."tiers" FOR UPDATE USING ((EXISTS ( SELECT 1
   FROM "public"."admins"
  WHERE ("admins"."user_id" = "auth"."uid"()))));

ALTER TABLE "public"."admins" ENABLE ROW LEVEL SECURITY;

CREATE POLICY "delete for admin" ON "public"."tiers" FOR DELETE USING ((EXISTS ( SELECT 1
   FROM "public"."admins"
  WHERE ("admins"."user_id" = "auth"."uid"()))));

ALTER TABLE "public"."galleries" ENABLE ROW LEVEL SECURITY;

ALTER TABLE "public"."interface_configurations" ENABLE ROW LEVEL SECURITY;

ALTER TABLE "public"."tags" ENABLE ROW LEVEL SECURITY;

ALTER TABLE "public"."tiers" ENABLE ROW LEVEL SECURITY;

CREATE POLICY "update for admin" ON "public"."galleries" FOR UPDATE USING ((EXISTS ( SELECT 1
   FROM "public"."admins"
  WHERE ("admins"."user_id" = "auth"."uid"()))));

CREATE POLICY "update theme admin" ON "public"."interface_configurations" FOR UPDATE USING ((EXISTS ( SELECT 1
   FROM "public"."admins"
  WHERE ("admins"."user_id" = "auth"."uid"()))));

ALTER TABLE "public"."user_subscriptions" ENABLE ROW LEVEL SECURITY;

ALTER PUBLICATION "supabase_realtime" OWNER TO "postgres";

GRANT USAGE ON SCHEMA "public" TO "postgres";
GRANT USAGE ON SCHEMA "public" TO "anon";
GRANT USAGE ON SCHEMA "public" TO "authenticated";
GRANT USAGE ON SCHEMA "public" TO "service_role";

GRANT ALL ON TABLE "public"."admins" TO "anon";
GRANT ALL ON TABLE "public"."admins" TO "authenticated";
GRANT ALL ON TABLE "public"."admins" TO "service_role";

GRANT ALL ON TABLE "public"."galleries" TO "anon";
GRANT ALL ON TABLE "public"."galleries" TO "authenticated";
GRANT ALL ON TABLE "public"."galleries" TO "service_role";

GRANT ALL ON TABLE "public"."interface_configurations" TO "anon";
GRANT ALL ON TABLE "public"."interface_configurations" TO "authenticated";
GRANT ALL ON TABLE "public"."interface_configurations" TO "service_role";

GRANT ALL ON TABLE "public"."tags" TO "anon";
GRANT ALL ON TABLE "public"."tags" TO "authenticated";
GRANT ALL ON TABLE "public"."tags" TO "service_role";

GRANT ALL ON TABLE "public"."tiers" TO "anon";
GRANT ALL ON TABLE "public"."tiers" TO "authenticated";
GRANT ALL ON TABLE "public"."tiers" TO "service_role";

GRANT ALL ON TABLE "public"."user_subscriptions" TO "anon";
GRANT ALL ON TABLE "public"."user_subscriptions" TO "authenticated";
GRANT ALL ON TABLE "public"."user_subscriptions" TO "service_role";

ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "service_role";

ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "service_role";

ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "service_role";

RESET ALL;
