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

INSERT INTO "public"."galleries" ("name", "column_number", "tier", "tags", "nsfw") VALUES
	('Another Test Gallery', 3, 'Free', '{Hentai}', true),
	('Test Gallery', 3, 'Tier 1', '{Dojin}', true),
	('More Test Gallery', 3, 'Tier 3', '{Hentai,VTuber}', true),
	('Some More Testing', 3, 'Tier 2', '{Hentai,Dojin}', false),
	('Even More Testing', 3, 'Free', '{VTuber}', false),
	('Killa Testing Here', 3, 'Tier 1', '{VTuber,Dojin}', false);


--
-- Data for Name: tags; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."tags" ("name") VALUES
	('Test Tag'),
	('Hentai'),
	('Dojin
'),
	('VTuber');


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
	('0418ff20-6b35-46a9-81f6-d220c88920c5', 'galleries', 'killa_testing_here/1.jpeg', NULL, '2024-05-27 15:26:12.014745+00', '2024-05-27 15:27:16.286533+00', '2024-05-27 15:26:12.014745+00', '{"eTag": "\"f8eaf2e06e34ad1b3e101908ab02883e\"", "size": 326461, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2024-05-27T15:27:16.278Z", "contentLength": 326461, "httpStatusCode": 200}', 'a4df5a8e-11a0-4060-8a61-65d3561c916f', NULL),
	('0328f4c1-4318-4ec7-acf8-66a97544ea32', 'galleries', 'even_more_testing/1.jpeg', NULL, '2024-05-27 15:26:26.82884+00', '2024-05-27 15:27:27.502525+00', '2024-05-27 15:26:26.82884+00', '{"eTag": "\"76b9705bb529b16fc58a4bdb0b134c9b\"", "size": 552385, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2024-05-27T15:27:27.488Z", "contentLength": 552385, "httpStatusCode": 200}', 'fc9888da-be0c-4af4-b0c3-81a584fc6f54', NULL),
	('25ea2051-ae55-4728-90ac-aea08467166c', 'galleries', 'test_gallery/neroshi-1-3.png', NULL, '2024-05-27 13:15:29.27921+00', '2024-05-27 14:51:41.449764+00', '2024-05-27 13:15:29.27921+00', '{"eTag": "\"2c6f2901ed88fbdd8c790a4b77d9caa8\"", "size": 156786, "mimetype": "image/png", "cacheControl": "max-age=3600", "lastModified": "2024-05-27T14:51:41.442Z", "contentLength": 156786, "httpStatusCode": 200}', 'c9d36afc-0afe-49e3-87c9-7c1bf5b2824a', NULL),
	('54527fef-4a47-48ed-b7aa-4dc10eb2a421', 'galleries', 'test_gallery/neroshi-1-2.jpeg', NULL, '2024-05-27 13:15:29.284061+00', '2024-05-27 14:51:41.458674+00', '2024-05-27 13:15:29.284061+00', '{"eTag": "\"a22ea7bfaed689b675b11428b98de42e\"", "size": 705547, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2024-05-27T14:51:41.442Z", "contentLength": 705547, "httpStatusCode": 200}', '3ea9ec28-b51b-45fd-a273-00d20b9b96f1', NULL),
	('2e8fb8df-b9d0-49e2-9b01-7645f344869f', 'galleries', 'killa_testing_here/neroshi-1-3.png', NULL, '2024-05-27 15:26:11.996052+00', '2024-05-27 15:26:11.996052+00', '2024-05-27 15:26:11.996052+00', '{"eTag": "\"2c6f2901ed88fbdd8c790a4b77d9caa8\"", "size": 156786, "mimetype": "image/png", "cacheControl": "max-age=3600", "lastModified": "2024-05-27T15:26:11.981Z", "contentLength": 156786, "httpStatusCode": 200}', 'a43205f1-5b04-4a87-8ce4-8d75eb17e840', NULL),
	('ff5ed820-c718-441c-a169-ec63ef3afbe6', 'galleries', 'killa_testing_here/neroshi-3.jpeg', NULL, '2024-05-27 15:26:12.00853+00', '2024-05-27 15:26:12.00853+00', '2024-05-27 15:26:12.00853+00', '{"eTag": "\"7fd95d9da9f3e6c7237a94feedcfc3af\"", "size": 97841, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2024-05-27T15:26:11.996Z", "contentLength": 97841, "httpStatusCode": 200}', '28d3c817-2635-4214-87fa-35d65efa1481', NULL),
	('058a1c46-4c20-4e3b-9ec9-56ae9abcf77a', 'galleries', 'killa_testing_here/neroshi-1-2.jpeg', NULL, '2024-05-27 15:26:12.010853+00', '2024-05-27 15:26:12.010853+00', '2024-05-27 15:26:12.010853+00', '{"eTag": "\"a22ea7bfaed689b675b11428b98de42e\"", "size": 705547, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2024-05-27T15:26:11.985Z", "contentLength": 705547, "httpStatusCode": 200}', '3693798c-4652-45c3-9824-13bc75fb6b6a', NULL),
	('ac89d27e-a170-4c4e-8cdd-88d386be1f9b', 'galleries', 'killa_testing_here/neroshi-1.jpeg', NULL, '2024-05-27 15:26:12.01953+00', '2024-05-27 15:26:12.01953+00', '2024-05-27 15:26:12.01953+00', '{"eTag": "\"76b9705bb529b16fc58a4bdb0b134c9b\"", "size": 552385, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2024-05-27T15:26:12.000Z", "contentLength": 552385, "httpStatusCode": 200}', '41c5cf9a-b5e3-47e4-8273-ec2f08c46d89', NULL),
	('ec56a0e1-e39e-46f3-856f-43f83c5cbc4c', 'galleries', 'even_more_testing/neroshi-1-3.png', NULL, '2024-05-27 15:26:26.810548+00', '2024-05-27 15:26:26.810548+00', '2024-05-27 15:26:26.810548+00', '{"eTag": "\"2c6f2901ed88fbdd8c790a4b77d9caa8\"", "size": 156786, "mimetype": "image/png", "cacheControl": "max-age=3600", "lastModified": "2024-05-27T15:26:26.799Z", "contentLength": 156786, "httpStatusCode": 200}', 'e4d87895-cebf-4bf0-b390-828586868a27', NULL),
	('52dc4b6a-0caf-4852-a4d0-bc7176a54972', 'galleries', 'even_more_testing/neroshi-2.jpeg', NULL, '2024-05-27 15:26:26.817193+00', '2024-05-27 15:26:26.817193+00', '2024-05-27 15:26:26.817193+00', '{"eTag": "\"f8eaf2e06e34ad1b3e101908ab02883e\"", "size": 326461, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2024-05-27T15:26:26.801Z", "contentLength": 326461, "httpStatusCode": 200}', 'c5363d15-0de5-4968-8bd4-9dbcccab7d93', NULL),
	('f00ba7e4-8fc6-4026-9864-938ce09658b1', 'galleries', 'even_more_testing/neroshi-4-1.jpeg', NULL, '2024-05-27 15:26:26.836977+00', '2024-05-27 15:26:26.836977+00', '2024-05-27 15:26:26.836977+00', '{"eTag": "\"eac1dd9a94c71dd30f565f95d32b0c6b\"", "size": 1227804, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2024-05-27T15:26:26.806Z", "contentLength": 1227804, "httpStatusCode": 200}', 'c84dd01e-5615-46b4-8750-d53b79b55d7d', NULL),
	('f1430361-6a4c-46e5-bb1a-c3e863ef418d', 'galleries', 'another_test_gallery/neroshi-1-3.png', NULL, '2024-05-27 15:26:37.223029+00', '2024-05-27 15:26:37.223029+00', '2024-05-27 15:26:37.223029+00', '{"eTag": "\"2c6f2901ed88fbdd8c790a4b77d9caa8\"", "size": 156786, "mimetype": "image/png", "cacheControl": "max-age=3600", "lastModified": "2024-05-27T15:26:37.206Z", "contentLength": 156786, "httpStatusCode": 200}', '64f6e606-54a5-43a6-adf5-6abb19a14a93', NULL),
	('be76aff4-3c6b-4150-89e7-d1ac2d2d5dee', 'galleries', 'killa_testing_here/neroshi-4-1.jpeg', NULL, '2024-05-27 15:26:12.032747+00', '2024-05-27 15:26:12.032747+00', '2024-05-27 15:26:12.032747+00', '{"eTag": "\"eac1dd9a94c71dd30f565f95d32b0c6b\"", "size": 1227804, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2024-05-27T15:26:12.001Z", "contentLength": 1227804, "httpStatusCode": 200}', 'c9dd2f8e-b541-435f-8084-cd48d21328c4', NULL),
	('bb3f8f81-f4c4-4f16-a5bd-ace6ca832b5a', 'galleries', 'more_test_gallery/1.jpeg', NULL, '2024-05-27 15:26:45.962244+00', '2024-05-27 15:27:11.520157+00', '2024-05-27 15:26:45.962244+00', '{"eTag": "\"d06af35773c09ff8cc1f4a590052be28\"", "size": 456918, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2024-05-27T15:27:11.509Z", "contentLength": 456918, "httpStatusCode": 200}', '82631199-60e3-4d4a-8045-0a094decc3eb', NULL),
	('ff97ab2d-31c2-48fe-bb1c-7586d1d28d9a', 'galleries', 'more_test_gallery/neroshi-1-3.png', NULL, '2024-05-27 15:26:45.935012+00', '2024-05-27 15:26:45.935012+00', '2024-05-27 15:26:45.935012+00', '{"eTag": "\"2c6f2901ed88fbdd8c790a4b77d9caa8\"", "size": 156786, "mimetype": "image/png", "cacheControl": "max-age=3600", "lastModified": "2024-05-27T15:26:45.923Z", "contentLength": 156786, "httpStatusCode": 200}', 'c1ae3648-b56c-453a-aae4-9e7ade927f77', NULL),
	('b85ae43e-e739-42d2-89b9-aeebb6274013', 'galleries', 'more_test_gallery/neroshi-1-2.jpeg', NULL, '2024-05-27 15:26:45.951778+00', '2024-05-27 15:26:45.951778+00', '2024-05-27 15:26:45.951778+00', '{"eTag": "\"a22ea7bfaed689b675b11428b98de42e\"", "size": 705547, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2024-05-27T15:26:45.926Z", "contentLength": 705547, "httpStatusCode": 200}', 'ab898845-f735-4f80-8ab3-9946e0c09654', NULL),
	('b4c0e111-bed7-4998-9139-883f99d08011', 'galleries', 'more_test_gallery/neroshi-4-1.jpeg', NULL, '2024-05-27 15:26:45.95914+00', '2024-05-27 15:26:45.95914+00', '2024-05-27 15:26:45.95914+00', '{"eTag": "\"eac1dd9a94c71dd30f565f95d32b0c6b\"", "size": 1227804, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2024-05-27T15:26:45.929Z", "contentLength": 1227804, "httpStatusCode": 200}', '6009e476-2d9f-4ae1-9c84-e20c05edc098', NULL),
	('be86a80f-c60c-408f-8956-50901c5decfc', 'galleries', 'even_more_testing/neroshi-3.jpeg', NULL, '2024-05-27 15:26:26.809425+00', '2024-05-27 15:26:26.809425+00', '2024-05-27 15:26:26.809425+00', '{"eTag": "\"7fd95d9da9f3e6c7237a94feedcfc3af\"", "size": 97841, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2024-05-27T15:26:26.799Z", "contentLength": 97841, "httpStatusCode": 200}', '31ec6434-4d98-4169-bcad-4ffbcedfadd8', NULL),
	('b8ca6de4-e321-4152-98e1-61437877adaf', 'galleries', 'even_more_testing/neroshi-1-2.jpeg', NULL, '2024-05-27 15:26:26.822241+00', '2024-05-27 15:26:26.822241+00', '2024-05-27 15:26:26.822241+00', '{"eTag": "\"a22ea7bfaed689b675b11428b98de42e\"", "size": 705547, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2024-05-27T15:26:26.797Z", "contentLength": 705547, "httpStatusCode": 200}', '1bc18161-d98e-4006-99d4-a73dfd624c73', NULL),
	('40be76ab-7733-442e-a70c-886cee49b987', 'galleries', 'another_test_gallery/1.jpeg', NULL, '2024-05-27 15:26:37.225793+00', '2024-05-27 15:27:34.666222+00', '2024-05-27 15:26:37.225793+00', '{"eTag": "\"7fd95d9da9f3e6c7237a94feedcfc3af\"", "size": 97841, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2024-05-27T15:27:34.661Z", "contentLength": 97841, "httpStatusCode": 200}', 'c2d5bdfa-6760-4dd4-a53a-382b29b6b470', NULL),
	('aee6868d-46e4-4e40-9569-27b2e408af41', 'galleries', 'another_test_gallery/neroshi-4-2.jpeg', NULL, '2024-05-27 15:26:37.254185+00', '2024-05-27 15:26:37.254185+00', '2024-05-27 15:26:37.254185+00', '{"eTag": "\"d06af35773c09ff8cc1f4a590052be28\"", "size": 456918, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2024-05-27T15:26:37.248Z", "contentLength": 456918, "httpStatusCode": 200}', '8b5f4a89-b8f1-4e83-adb6-e30be6c570c8', NULL),
	('33ec9d63-c158-4fc5-bf0d-938537ffdbf2', 'galleries', 'even_more_testing/neroshi-4-2.jpeg', NULL, '2024-05-27 15:26:26.841264+00', '2024-05-27 15:26:26.841264+00', '2024-05-27 15:26:26.841264+00', '{"eTag": "\"d06af35773c09ff8cc1f4a590052be28\"", "size": 456918, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2024-05-27T15:26:26.834Z", "contentLength": 456918, "httpStatusCode": 200}', 'b99f829b-7aed-44c6-9687-aa73ac77d43d', NULL),
	('25fdb5df-5cb1-4d6d-b882-be9003bd5c2f', 'galleries', 'more_test_gallery/neroshi-2.jpeg', NULL, '2024-05-27 15:26:45.940585+00', '2024-05-27 15:26:45.940585+00', '2024-05-27 15:26:45.940585+00', '{"eTag": "\"f8eaf2e06e34ad1b3e101908ab02883e\"", "size": 326461, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2024-05-27T15:26:45.927Z", "contentLength": 326461, "httpStatusCode": 200}', 'd980f193-e963-4c25-87b9-fcb88eb7fcb7', NULL),
	('4c9f74e9-83ce-4058-9ad5-acb07fe409bb', 'galleries', 'more_test_gallery/neroshi-1.jpeg', NULL, '2024-05-27 15:26:45.9507+00', '2024-05-27 15:26:45.9507+00', '2024-05-27 15:26:45.9507+00', '{"eTag": "\"76b9705bb529b16fc58a4bdb0b134c9b\"", "size": 552385, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2024-05-27T15:26:45.929Z", "contentLength": 552385, "httpStatusCode": 200}', '0a95bd52-67af-45f7-b421-b7e1ef9b98de', NULL),
	('adaf37d9-fc5c-4263-b61c-5cd564f50772', 'galleries', 'another_test_gallery/neroshi-2.jpeg', NULL, '2024-05-27 15:26:37.236201+00', '2024-05-27 15:26:37.236201+00', '2024-05-27 15:26:37.236201+00', '{"eTag": "\"f8eaf2e06e34ad1b3e101908ab02883e\"", "size": 326461, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2024-05-27T15:26:37.213Z", "contentLength": 326461, "httpStatusCode": 200}', '5953e3e5-a2f0-4043-b492-933487a17736', NULL),
	('168cb5fe-1deb-431a-b588-1ef0a367020d', 'galleries', 'more_test_gallery/neroshi-3.jpeg', NULL, '2024-05-27 15:26:45.9354+00', '2024-05-27 15:26:45.9354+00', '2024-05-27 15:26:45.9354+00', '{"eTag": "\"7fd95d9da9f3e6c7237a94feedcfc3af\"", "size": 97841, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2024-05-27T15:26:45.927Z", "contentLength": 97841, "httpStatusCode": 200}', '439d366f-ba58-4b34-bd55-f6c28902d40f', NULL),
	('60294a9f-06f5-4dd1-acbc-616dba00a695', 'galleries', 'some_more_testing/neroshi-1-3.png', NULL, '2024-05-27 15:26:56.323099+00', '2024-05-27 15:26:56.323099+00', '2024-05-27 15:26:56.323099+00', '{"eTag": "\"2c6f2901ed88fbdd8c790a4b77d9caa8\"", "size": 156786, "mimetype": "image/png", "cacheControl": "max-age=3600", "lastModified": "2024-05-27T15:26:56.312Z", "contentLength": 156786, "httpStatusCode": 200}', '135039b1-2af1-4c82-aaf3-78f9009ad1c4', NULL),
	('62d04150-984f-4292-b422-f81adbbf170b', 'galleries', 'some_more_testing/neroshi-1.jpeg', NULL, '2024-05-27 15:26:56.338289+00', '2024-05-27 15:26:56.338289+00', '2024-05-27 15:26:56.338289+00', '{"eTag": "\"76b9705bb529b16fc58a4bdb0b134c9b\"", "size": 552385, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2024-05-27T15:26:56.317Z", "contentLength": 552385, "httpStatusCode": 200}', '7567a4f3-908b-4395-9a0a-ccecf3d4f5fe', NULL),
	('b769127c-d4f3-4989-a1fc-17aa07bc50a4', 'galleries', 'some_more_testing/neroshi-4-2.jpeg', NULL, '2024-05-27 15:26:56.353941+00', '2024-05-27 15:26:56.353941+00', '2024-05-27 15:26:56.353941+00', '{"eTag": "\"d06af35773c09ff8cc1f4a590052be28\"", "size": 456918, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2024-05-27T15:26:56.347Z", "contentLength": 456918, "httpStatusCode": 200}', '47f7be86-2509-4172-a032-7bae7d745f29', NULL),
	('02dabd39-7124-4f00-a018-23e08ae87283', 'galleries', 'another_test_gallery/neroshi-1-2.jpeg', NULL, '2024-05-27 15:26:37.241469+00', '2024-05-27 15:26:37.241469+00', '2024-05-27 15:26:37.241469+00', '{"eTag": "\"a22ea7bfaed689b675b11428b98de42e\"", "size": 705547, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2024-05-27T15:26:37.205Z", "contentLength": 705547, "httpStatusCode": 200}', '375de468-e8c6-42be-a40f-d3e4a1448bfb', NULL),
	('d7a2275f-e493-4e0d-9894-1d7a38c5249a', 'galleries', 'some_more_testing/neroshi-2.jpeg', NULL, '2024-05-27 15:26:56.330535+00', '2024-05-27 15:26:56.330535+00', '2024-05-27 15:26:56.330535+00', '{"eTag": "\"f8eaf2e06e34ad1b3e101908ab02883e\"", "size": 326461, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2024-05-27T15:26:56.316Z", "contentLength": 326461, "httpStatusCode": 200}', '07cb87d5-2a00-4dda-bd36-78f2e8411843', NULL),
	('1b467502-3a85-4419-bde1-11283ac4f203', 'galleries', 'some_more_testing/neroshi-4-1.jpeg', NULL, '2024-05-27 15:26:56.351987+00', '2024-05-27 15:26:56.351987+00', '2024-05-27 15:26:56.351987+00', '{"eTag": "\"eac1dd9a94c71dd30f565f95d32b0c6b\"", "size": 1227804, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2024-05-27T15:26:56.322Z", "contentLength": 1227804, "httpStatusCode": 200}', '83885da1-827b-48a6-bcbe-5c29b2225c09', NULL),
	('457cb84e-cd4e-4c37-bd67-1813e37b466a', 'galleries', 'killa_testing_here/neroshi-4-2.jpeg', NULL, '2024-05-27 15:26:12.032278+00', '2024-05-27 15:26:12.032278+00', '2024-05-27 15:26:12.032278+00', '{"eTag": "\"d06af35773c09ff8cc1f4a590052be28\"", "size": 456918, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2024-05-27T15:26:12.017Z", "contentLength": 456918, "httpStatusCode": 200}', '5f035b86-997e-4d08-80a2-60766ba286da', NULL),
	('3ed1499b-081c-4070-856c-2113ce3477b1', 'galleries', 'some_more_testing/1.jpeg', NULL, '2024-05-27 15:26:56.325337+00', '2024-05-27 15:27:07.800292+00', '2024-05-27 15:26:56.325337+00', '{"eTag": "\"7fd95d9da9f3e6c7237a94feedcfc3af\"", "size": 97841, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2024-05-27T15:27:07.794Z", "contentLength": 97841, "httpStatusCode": 200}', '6704eff1-8d5d-4653-999f-f2d47b7efa42', NULL),
	('9e140c6f-e8da-48bd-a41b-e796f59318f3', 'galleries', 'another_test_gallery/neroshi-1.jpeg', NULL, '2024-05-27 15:26:37.242454+00', '2024-05-27 15:26:37.242454+00', '2024-05-27 15:26:37.242454+00', '{"eTag": "\"76b9705bb529b16fc58a4bdb0b134c9b\"", "size": 552385, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2024-05-27T15:26:37.213Z", "contentLength": 552385, "httpStatusCode": 200}', '119d46fd-51b6-470f-bd4d-4568890e4764', NULL),
	('1e54a73f-e44b-406c-956a-2f45a487aaae', 'galleries', 'another_test_gallery/neroshi-4-1.jpeg', NULL, '2024-05-27 15:26:37.252603+00', '2024-05-27 15:26:37.252603+00', '2024-05-27 15:26:37.252603+00', '{"eTag": "\"eac1dd9a94c71dd30f565f95d32b0c6b\"", "size": 1227804, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2024-05-27T15:26:37.216Z", "contentLength": 1227804, "httpStatusCode": 200}', 'f4e6e8ee-2f97-4ba5-9754-9aefa2193f64', NULL),
	('f6fdeeeb-384f-412f-810b-66ea793e9eab', 'galleries', 'some_more_testing/neroshi-1-2.jpeg', NULL, '2024-05-27 15:26:56.33478+00', '2024-05-27 15:26:56.33478+00', '2024-05-27 15:26:56.33478+00', '{"eTag": "\"a22ea7bfaed689b675b11428b98de42e\"", "size": 705547, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2024-05-27T15:26:56.310Z", "contentLength": 705547, "httpStatusCode": 200}', '07271b9a-b302-4f46-8701-4bfc8b157dee', NULL);


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
