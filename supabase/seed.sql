SET session_replication_role = replica;

--
-- PostgreSQL database dump
--

-- Dumped from database version 15.1 (Ubuntu 15.1-1.pgdg20.04+1)
-- Dumped by pg_dump version 15.6 (Ubuntu 15.6-1.pgdg20.04+1)

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

--
-- Data for Name: audit_log_entries; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."audit_log_entries" ("instance_id", "id", "payload", "created_at", "ip_address") VALUES
	('00000000-0000-0000-0000-000000000000', 'd337a17f-a756-46eb-a0e8-8ef80fd0510d', '{"action":"user_signedup","actor_id":"893c7701-d5df-4415-80bd-1ec089764400","actor_username":"damienostler1@outlook.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}', '2024-05-27 14:10:29.638476+00', ''),
	('00000000-0000-0000-0000-000000000000', 'd3e71df0-114a-4490-aeeb-6f92c45bad74', '{"action":"login","actor_id":"893c7701-d5df-4415-80bd-1ec089764400","actor_username":"damienostler1@outlook.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-05-27 14:10:29.64088+00', ''),
	('00000000-0000-0000-0000-000000000000', '1eab1cf3-5656-42c2-9e0b-796222de0c55', '{"action":"logout","actor_id":"893c7701-d5df-4415-80bd-1ec089764400","actor_username":"damienostler1@outlook.com","actor_via_sso":false,"log_type":"account"}', '2024-05-27 14:15:04.733941+00', ''),
	('00000000-0000-0000-0000-000000000000', '410c5c63-cba5-442a-a6bb-157acc0bd370', '{"action":"login","actor_id":"893c7701-d5df-4415-80bd-1ec089764400","actor_username":"damienostler1@outlook.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-05-27 14:34:43.53365+00', ''),
	('00000000-0000-0000-0000-000000000000', '262365e2-093b-493c-abff-d760344338e3', '{"action":"logout","actor_id":"893c7701-d5df-4415-80bd-1ec089764400","actor_username":"damienostler1@outlook.com","actor_via_sso":false,"log_type":"account"}', '2024-05-27 15:32:39.855999+00', ''),
	('00000000-0000-0000-0000-000000000000', 'b3b7c848-8d46-468f-8a9f-be56f842e8f8', '{"action":"login","actor_id":"893c7701-d5df-4415-80bd-1ec089764400","actor_username":"damienostler1@outlook.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-05-27 15:32:48.609554+00', ''),
	('00000000-0000-0000-0000-000000000000', '96af268f-e323-43ec-ac10-d33b94c47321', '{"action":"user_invited","actor_id":"00000000-0000-0000-0000-000000000000","actor_username":"service_role","actor_via_sso":false,"log_type":"team","traits":{"user_email":"damienostler1@gmail.com","user_id":"e11e6fda-d1fc-4b0a-bd61-80233fcb5cdd"}}', '2024-05-27 15:44:27.171353+00', ''),
	('00000000-0000-0000-0000-000000000000', '98b879f8-3ec0-4b14-9114-e9702693edd7', '{"action":"token_refreshed","actor_id":"893c7701-d5df-4415-80bd-1ec089764400","actor_username":"damienostler1@outlook.com","actor_via_sso":false,"log_type":"token"}', '2024-05-27 16:33:16.635885+00', ''),
	('00000000-0000-0000-0000-000000000000', '05788b7b-5d97-4449-b036-0d94c021f149', '{"action":"token_revoked","actor_id":"893c7701-d5df-4415-80bd-1ec089764400","actor_username":"damienostler1@outlook.com","actor_via_sso":false,"log_type":"token"}', '2024-05-27 16:33:16.636596+00', ''),
	('00000000-0000-0000-0000-000000000000', 'ec47cc2d-ee91-4bda-93cc-80966a366550', '{"action":"logout","actor_id":"893c7701-d5df-4415-80bd-1ec089764400","actor_username":"damienostler1@outlook.com","actor_via_sso":false,"log_type":"account"}', '2024-05-27 17:16:40.455383+00', ''),
	('00000000-0000-0000-0000-000000000000', 'dee2b80d-2cb6-49b0-9391-d52318eba3c6', '{"action":"login","actor_id":"893c7701-d5df-4415-80bd-1ec089764400","actor_username":"damienostler1@outlook.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-05-27 17:18:49.038768+00', ''),
	('00000000-0000-0000-0000-000000000000', '50134af5-eeca-4e0a-93c9-30c93395843d', '{"action":"token_refreshed","actor_id":"893c7701-d5df-4415-80bd-1ec089764400","actor_username":"damienostler1@outlook.com","actor_via_sso":false,"log_type":"token"}', '2024-05-27 18:17:16.199899+00', ''),
	('00000000-0000-0000-0000-000000000000', 'e1b7a78c-c40e-4348-bd41-eadc94a93ebb', '{"action":"token_revoked","actor_id":"893c7701-d5df-4415-80bd-1ec089764400","actor_username":"damienostler1@outlook.com","actor_via_sso":false,"log_type":"token"}', '2024-05-27 18:17:16.200645+00', ''),
	('00000000-0000-0000-0000-000000000000', '0fffa887-134b-4d3b-bf70-24246ec38013', '{"action":"token_refreshed","actor_id":"893c7701-d5df-4415-80bd-1ec089764400","actor_username":"damienostler1@outlook.com","actor_via_sso":false,"log_type":"token"}', '2024-05-27 19:15:16.230466+00', ''),
	('00000000-0000-0000-0000-000000000000', '83236dbe-037b-4a7a-a326-7ff3c9759bd7', '{"action":"token_revoked","actor_id":"893c7701-d5df-4415-80bd-1ec089764400","actor_username":"damienostler1@outlook.com","actor_via_sso":false,"log_type":"token"}', '2024-05-27 19:15:16.231644+00', ''),
	('00000000-0000-0000-0000-000000000000', '6f4bb32b-4690-4640-98ac-feb06384ef62', '{"action":"token_refreshed","actor_id":"893c7701-d5df-4415-80bd-1ec089764400","actor_username":"damienostler1@outlook.com","actor_via_sso":false,"log_type":"token"}', '2024-05-27 20:13:20.140291+00', ''),
	('00000000-0000-0000-0000-000000000000', 'e6e8d515-e14c-48ff-8c4d-27cea84d33f3', '{"action":"token_revoked","actor_id":"893c7701-d5df-4415-80bd-1ec089764400","actor_username":"damienostler1@outlook.com","actor_via_sso":false,"log_type":"token"}', '2024-05-27 20:13:20.140793+00', ''),
	('00000000-0000-0000-0000-000000000000', 'e878d51d-2524-4796-9288-88bcf8d1982b', '{"action":"token_refreshed","actor_id":"893c7701-d5df-4415-80bd-1ec089764400","actor_username":"damienostler1@outlook.com","actor_via_sso":false,"log_type":"token"}', '2024-05-27 21:11:27.314657+00', ''),
	('00000000-0000-0000-0000-000000000000', '0d3f4871-8215-4ae7-920b-c261ba7eaf11', '{"action":"token_revoked","actor_id":"893c7701-d5df-4415-80bd-1ec089764400","actor_username":"damienostler1@outlook.com","actor_via_sso":false,"log_type":"token"}', '2024-05-27 21:11:27.315598+00', ''),
	('00000000-0000-0000-0000-000000000000', 'f70081c9-673b-4e8e-84c6-574d4a6fc095', '{"action":"token_refreshed","actor_id":"893c7701-d5df-4415-80bd-1ec089764400","actor_username":"damienostler1@outlook.com","actor_via_sso":false,"log_type":"token"}', '2024-05-28 00:06:54.425581+00', ''),
	('00000000-0000-0000-0000-000000000000', 'ff4e9892-902a-4e6f-9493-976acd87e5ad', '{"action":"token_revoked","actor_id":"893c7701-d5df-4415-80bd-1ec089764400","actor_username":"damienostler1@outlook.com","actor_via_sso":false,"log_type":"token"}', '2024-05-28 00:06:54.426626+00', '');


--
-- Data for Name: flow_state; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: users; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."users" ("instance_id", "id", "aud", "role", "email", "encrypted_password", "email_confirmed_at", "invited_at", "confirmation_token", "confirmation_sent_at", "recovery_token", "recovery_sent_at", "email_change_token_new", "email_change", "email_change_sent_at", "last_sign_in_at", "raw_app_meta_data", "raw_user_meta_data", "is_super_admin", "created_at", "updated_at", "phone", "phone_confirmed_at", "phone_change", "phone_change_token", "phone_change_sent_at", "email_change_token_current", "email_change_confirm_status", "banned_until", "reauthentication_token", "reauthentication_sent_at", "is_sso_user", "deleted_at", "is_anonymous") VALUES
	('00000000-0000-0000-0000-000000000000', 'e11e6fda-d1fc-4b0a-bd61-80233fcb5cdd', 'authenticated', 'authenticated', 'damienostler1@gmail.com', '', NULL, '2024-05-27 15:44:27.171961+00', 'dd81fbfd6a7ad5d261d7f98fb37620afb3f954f350dacd2cac9f4b56', '2024-05-27 15:44:27.171961+00', '', NULL, '', '', NULL, NULL, '{"provider": "email", "providers": ["email"]}', '{}', NULL, '2024-05-27 15:44:27.167772+00', '2024-05-27 15:44:27.174941+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL, false),
	('00000000-0000-0000-0000-000000000000', '893c7701-d5df-4415-80bd-1ec089764400', 'authenticated', 'authenticated', 'damienostler1@outlook.com', '$2a$10$ISYdoWsKL7gxfRz7c5IKDOTsmcjNpGgg9OOApYLMOvtOoNTo4HGM6', '2024-05-27 14:10:29.639017+00', NULL, '', NULL, '', NULL, '', '', NULL, '2024-05-27 17:18:49.039562+00', '{"provider": "email", "providers": ["email"]}', '{"sub": "893c7701-d5df-4415-80bd-1ec089764400", "email": "damienostler1@outlook.com", "email_verified": false, "phone_verified": false}', NULL, '2024-05-27 14:10:29.634157+00', '2024-05-28 00:06:54.428256+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL, false);


--
-- Data for Name: identities; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."identities" ("provider_id", "user_id", "identity_data", "provider", "last_sign_in_at", "created_at", "updated_at", "id") VALUES
	('893c7701-d5df-4415-80bd-1ec089764400', '893c7701-d5df-4415-80bd-1ec089764400', '{"sub": "893c7701-d5df-4415-80bd-1ec089764400", "email": "damienostler1@outlook.com", "email_verified": false, "phone_verified": false}', 'email', '2024-05-27 14:10:29.636992+00', '2024-05-27 14:10:29.637013+00', '2024-05-27 14:10:29.637013+00', 'b823bde7-9eae-4e1f-8253-75f12f0f06f2'),
	('e11e6fda-d1fc-4b0a-bd61-80233fcb5cdd', 'e11e6fda-d1fc-4b0a-bd61-80233fcb5cdd', '{"sub": "e11e6fda-d1fc-4b0a-bd61-80233fcb5cdd", "email": "damienostler1@gmail.com", "email_verified": false, "phone_verified": false}', 'email', '2024-05-27 15:44:27.170495+00', '2024-05-27 15:44:27.170543+00', '2024-05-27 15:44:27.170543+00', 'f88a9c9a-1566-4c04-8340-3d233dcca864');


--
-- Data for Name: instances; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sessions; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."sessions" ("id", "user_id", "created_at", "updated_at", "factor_id", "aal", "not_after", "refreshed_at", "user_agent", "ip", "tag") VALUES
	('ab123eaa-eab2-4fac-a018-82ee972401fd', '893c7701-d5df-4415-80bd-1ec089764400', '2024-05-27 17:18:49.039625+00', '2024-05-28 00:06:54.429202+00', NULL, 'aal1', NULL, '2024-05-28 00:06:54.429127', 'Next.js Middleware', '192.168.65.1', NULL);


--
-- Data for Name: mfa_amr_claims; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."mfa_amr_claims" ("session_id", "created_at", "updated_at", "authentication_method", "id") VALUES
	('ab123eaa-eab2-4fac-a018-82ee972401fd', '2024-05-27 17:18:49.041915+00', '2024-05-27 17:18:49.041915+00', 'password', 'be546f0f-4e91-4f94-97e1-cc15c25191be');


--
-- Data for Name: mfa_factors; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: mfa_challenges; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: refresh_tokens; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."refresh_tokens" ("instance_id", "id", "token", "user_id", "revoked", "created_at", "updated_at", "parent", "session_id") VALUES
	('00000000-0000-0000-0000-000000000000', 5, 'vG2zuPl4y7OvEwgeItgotw', '893c7701-d5df-4415-80bd-1ec089764400', true, '2024-05-27 17:18:49.040453+00', '2024-05-27 18:17:16.201027+00', NULL, 'ab123eaa-eab2-4fac-a018-82ee972401fd'),
	('00000000-0000-0000-0000-000000000000', 6, 'd1l7CJUy3osp97yqDTyibw', '893c7701-d5df-4415-80bd-1ec089764400', true, '2024-05-27 18:17:16.201648+00', '2024-05-27 19:15:16.232194+00', 'vG2zuPl4y7OvEwgeItgotw', 'ab123eaa-eab2-4fac-a018-82ee972401fd'),
	('00000000-0000-0000-0000-000000000000', 7, 'jrCD6NCqj5WFyjkiWG6BTw', '893c7701-d5df-4415-80bd-1ec089764400', true, '2024-05-27 19:15:16.232976+00', '2024-05-27 20:13:20.141029+00', 'd1l7CJUy3osp97yqDTyibw', 'ab123eaa-eab2-4fac-a018-82ee972401fd'),
	('00000000-0000-0000-0000-000000000000', 8, 'zFVkt2ATfYlYT0nzRKmX0A', '893c7701-d5df-4415-80bd-1ec089764400', true, '2024-05-27 20:13:20.141361+00', '2024-05-27 21:11:27.316138+00', 'jrCD6NCqj5WFyjkiWG6BTw', 'ab123eaa-eab2-4fac-a018-82ee972401fd'),
	('00000000-0000-0000-0000-000000000000', 9, 'OWwpxx1Pg11r5r4c2ZUhaw', '893c7701-d5df-4415-80bd-1ec089764400', true, '2024-05-27 21:11:27.316818+00', '2024-05-28 00:06:54.426908+00', 'zFVkt2ATfYlYT0nzRKmX0A', 'ab123eaa-eab2-4fac-a018-82ee972401fd'),
	('00000000-0000-0000-0000-000000000000', 10, 'a7ykvMnMcqG4qFeQK6WX5g', '893c7701-d5df-4415-80bd-1ec089764400', false, '2024-05-28 00:06:54.427389+00', '2024-05-28 00:06:54.427389+00', 'OWwpxx1Pg11r5r4c2ZUhaw', 'ab123eaa-eab2-4fac-a018-82ee972401fd');


--
-- Data for Name: sso_providers; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: saml_providers; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: saml_relay_states; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sso_domains; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: key; Type: TABLE DATA; Schema: pgsodium; Owner: supabase_admin
--



--
-- Data for Name: galleries; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."galleries" ("name", "column_number", "tier", "tags", "nsfw") VALUES
	('Another Test Gallery', 3, 'Free', '{Hentai}', true),
	('Test Gallery', 3, 'Tier 1', '{Dojin}', true),
	('More Test Gallery', 3, 'Tier 3', '{Hentai,VTuber}', true),
	('Some More Testing', 3, 'Tier 2', '{Hentai,Dojin}', false),
	('Even More Testing', 3, 'Free', '{VTuber}', false),
	('Killa Testing Here', 3, 'Tier 1', '{VTuber,Dojin}', false),
	('Popcorn Tester', 3, 'Free', '{Hentai}', true);


--
-- Data for Name: tags; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."tags" ("name") VALUES
	('Hentai'),
	('Dojin
'),
	('VTuber');


--
-- Data for Name: user_subscriptions; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."user_subscriptions" ("user_id", "tier") VALUES
	('893c7701-d5df-4415-80bd-1ec089764400', 'Tier 2');


--
-- Data for Name: buckets; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--

INSERT INTO "storage"."buckets" ("id", "name", "owner", "created_at", "updated_at", "public", "avif_autodetection", "file_size_limit", "allowed_mime_types", "owner_id") VALUES
	('galleries', 'galleries', NULL, '2024-05-27 13:06:16.360824+00', '2024-05-27 13:06:16.360824+00', false, false, NULL, NULL, NULL);


