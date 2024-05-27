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
	('00000000-0000-0000-0000-000000000000', '410c5c63-cba5-442a-a6bb-157acc0bd370', '{"action":"login","actor_id":"893c7701-d5df-4415-80bd-1ec089764400","actor_username":"damienostler1@outlook.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-05-27 14:34:43.53365+00', '');


--
-- Data for Name: flow_state; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: users; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."users" ("instance_id", "id", "aud", "role", "email", "encrypted_password", "email_confirmed_at", "invited_at", "confirmation_token", "confirmation_sent_at", "recovery_token", "recovery_sent_at", "email_change_token_new", "email_change", "email_change_sent_at", "last_sign_in_at", "raw_app_meta_data", "raw_user_meta_data", "is_super_admin", "created_at", "updated_at", "phone", "phone_confirmed_at", "phone_change", "phone_change_token", "phone_change_sent_at", "email_change_token_current", "email_change_confirm_status", "banned_until", "reauthentication_token", "reauthentication_sent_at", "is_sso_user", "deleted_at", "is_anonymous") VALUES
	('00000000-0000-0000-0000-000000000000', '893c7701-d5df-4415-80bd-1ec089764400', 'authenticated', 'authenticated', 'damienostler1@outlook.com', '$2a$10$ISYdoWsKL7gxfRz7c5IKDOTsmcjNpGgg9OOApYLMOvtOoNTo4HGM6', '2024-05-27 14:10:29.639017+00', NULL, '', NULL, '', NULL, '', '', NULL, '2024-05-27 14:34:43.534227+00', '{"provider": "email", "providers": ["email"]}', '{"sub": "893c7701-d5df-4415-80bd-1ec089764400", "email": "damienostler1@outlook.com", "email_verified": false, "phone_verified": false}', NULL, '2024-05-27 14:10:29.634157+00', '2024-05-27 14:34:43.535377+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL, false);


--
-- Data for Name: identities; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."identities" ("provider_id", "user_id", "identity_data", "provider", "last_sign_in_at", "created_at", "updated_at", "id") VALUES
	('893c7701-d5df-4415-80bd-1ec089764400', '893c7701-d5df-4415-80bd-1ec089764400', '{"sub": "893c7701-d5df-4415-80bd-1ec089764400", "email": "damienostler1@outlook.com", "email_verified": false, "phone_verified": false}', 'email', '2024-05-27 14:10:29.636992+00', '2024-05-27 14:10:29.637013+00', '2024-05-27 14:10:29.637013+00', 'b823bde7-9eae-4e1f-8253-75f12f0f06f2');


--
-- Data for Name: instances; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sessions; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."sessions" ("id", "user_id", "created_at", "updated_at", "factor_id", "aal", "not_after", "refreshed_at", "user_agent", "ip", "tag") VALUES
	('3499fcf0-59da-493f-ae3b-617ef41b4404', '893c7701-d5df-4415-80bd-1ec089764400', '2024-05-27 14:34:43.534268+00', '2024-05-27 14:34:43.534268+00', NULL, 'aal1', NULL, NULL, 'node', '192.168.65.1', NULL);


--
-- Data for Name: mfa_amr_claims; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."mfa_amr_claims" ("session_id", "created_at", "updated_at", "authentication_method", "id") VALUES
	('3499fcf0-59da-493f-ae3b-617ef41b4404', '2024-05-27 14:34:43.535548+00', '2024-05-27 14:34:43.535548+00', 'password', 'dcc35216-f906-4501-812d-f2ed2704ab8e');


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
	('00000000-0000-0000-0000-000000000000', 2, 'HsInil2IT99mHjGqk_xeKA', '893c7701-d5df-4415-80bd-1ec089764400', false, '2024-05-27 14:34:43.534857+00', '2024-05-27 14:34:43.534857+00', NULL, '3499fcf0-59da-493f-ae3b-617ef41b4404');


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

INSERT INTO "public"."galleries" ("name", "column_number", "tier", "tags") VALUES
	('Test Gallery', 3, 'Free', '{"Test Tag"}');


--
-- Data for Name: tags; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- Data for Name: user_subscriptions; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- Data for Name: buckets; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--

INSERT INTO "storage"."buckets" ("id", "name", "owner", "created_at", "updated_at", "public", "avif_autodetection", "file_size_limit", "allowed_mime_types", "owner_id") VALUES
	('galleries', 'galleries', NULL, '2024-05-27 13:06:16.360824+00', '2024-05-27 13:06:16.360824+00', false, false, NULL, NULL, NULL);


--
-- Data for Name: objects; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--

INSERT INTO "storage"."objects" ("id", "bucket_id", "name", "owner", "created_at", "updated_at", "last_accessed_at", "metadata", "version", "owner_id") VALUES
	('25ea2051-ae55-4728-90ac-aea08467166c', 'galleries', 'test_gallery/neroshi-1-3.png', NULL, '2024-05-27 13:15:29.27921+00', '2024-05-27 14:51:41.449764+00', '2024-05-27 13:15:29.27921+00', '{"eTag": "\"2c6f2901ed88fbdd8c790a4b77d9caa8\"", "size": 156786, "mimetype": "image/png", "cacheControl": "max-age=3600", "lastModified": "2024-05-27T14:51:41.442Z", "contentLength": 156786, "httpStatusCode": 200}', 'c9d36afc-0afe-49e3-87c9-7c1bf5b2824a', NULL),
	('54527fef-4a47-48ed-b7aa-4dc10eb2a421', 'galleries', 'test_gallery/neroshi-1-2.jpeg', NULL, '2024-05-27 13:15:29.284061+00', '2024-05-27 14:51:41.458674+00', '2024-05-27 13:15:29.284061+00', '{"eTag": "\"a22ea7bfaed689b675b11428b98de42e\"", "size": 705547, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2024-05-27T14:51:41.442Z", "contentLength": 705547, "httpStatusCode": 200}', '3ea9ec28-b51b-45fd-a273-00d20b9b96f1', NULL);


--
-- Data for Name: s3_multipart_uploads; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: s3_multipart_uploads_parts; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: hooks; Type: TABLE DATA; Schema: supabase_functions; Owner: supabase_functions_admin
--



--
-- Data for Name: secrets; Type: TABLE DATA; Schema: vault; Owner: supabase_admin
--



--
-- Name: refresh_tokens_id_seq; Type: SEQUENCE SET; Schema: auth; Owner: supabase_auth_admin
--

SELECT pg_catalog.setval('"auth"."refresh_tokens_id_seq"', 2, true);


--
-- Name: key_key_id_seq; Type: SEQUENCE SET; Schema: pgsodium; Owner: supabase_admin
--

SELECT pg_catalog.setval('"pgsodium"."key_key_id_seq"', 1, false);


--
-- Name: hooks_id_seq; Type: SEQUENCE SET; Schema: supabase_functions; Owner: supabase_functions_admin
--

SELECT pg_catalog.setval('"supabase_functions"."hooks_id_seq"', 1, false);


--
-- PostgreSQL database dump complete
--

RESET ALL;
