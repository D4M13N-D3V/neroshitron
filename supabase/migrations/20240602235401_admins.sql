
CREATE TABLE IF NOT EXISTS "public"."admins" (
    "user_id" "uuid" NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "assigner" "uuid"
);

ALTER TABLE "public"."admins" OWNER TO "postgres";

CREATE POLICY "Enable delete for admins" ON "public"."tags" FOR DELETE TO "authenticated" USING ((EXISTS ( SELECT 1
   FROM "public"."admins"
  WHERE ("admins"."user_id" = "auth"."uid"()))));

CREATE POLICY "Enable delete for users based on admins" ON "public"."galleries" FOR DELETE USING ((EXISTS ( SELECT 1
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

CREATE POLICY "Enable read access for all users" ON "public"."tags" FOR SELECT USING (true);

CREATE POLICY "Enable read for users based on user_id" ON "public"."user_subscriptions" FOR SELECT USING (true);

ALTER TABLE ONLY "public"."admins"
    ADD CONSTRAINT "admins_pkey" PRIMARY KEY ("user_id");

ALTER TABLE ONLY "public"."admins"
    ADD CONSTRAINT "admins_assigner_fkey" FOREIGN KEY ("assigner") REFERENCES "auth"."users"("id");

ALTER TABLE ONLY "public"."admins"
    ADD CONSTRAINT "admins_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "auth"."users"("id");
