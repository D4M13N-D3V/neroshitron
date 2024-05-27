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



--
-- Data for Name: flow_state; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: users; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: identities; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: instances; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sessions; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: mfa_amr_claims; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: mfa_factors; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: mfa_challenges; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: refresh_tokens; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



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
	('25ea2051-ae55-4728-90ac-aea08467166c', 'galleries', 'Test Gallery/neroshi-1-3.png', NULL, '2024-05-27 13:15:29.27921+00', '2024-05-27 13:15:29.27921+00', '2024-05-27 13:15:29.27921+00', '{"eTag": "\"2c6f2901ed88fbdd8c790a4b77d9caa8\"", "size": 156786, "mimetype": "image/png", "cacheControl": "max-age=3600", "lastModified": "2024-05-27T13:15:29.267Z", "contentLength": 156786, "httpStatusCode": 200}', '62b23c8b-251a-4410-89b1-c54ba4e26526', NULL),
	('876c4095-98fe-480b-b7f4-9bbe8cb0e9f1', 'galleries', 'Test Gallery/neroshi-3.jpeg', NULL, '2024-05-27 13:15:29.279371+00', '2024-05-27 13:15:29.279371+00', '2024-05-27 13:15:29.279371+00', '{"eTag": "\"7fd95d9da9f3e6c7237a94feedcfc3af\"", "size": 97841, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2024-05-27T13:15:29.269Z", "contentLength": 97841, "httpStatusCode": 200}', 'c69a89e2-5cd8-462e-9716-b46bc6992012', NULL),
	('54527fef-4a47-48ed-b7aa-4dc10eb2a421', 'galleries', 'Test Gallery/neroshi-1-2.jpeg', NULL, '2024-05-27 13:15:29.284061+00', '2024-05-27 13:15:29.284061+00', '2024-05-27 13:15:29.284061+00', '{"eTag": "\"a22ea7bfaed689b675b11428b98de42e\"", "size": 705547, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2024-05-27T13:15:29.259Z", "contentLength": 705547, "httpStatusCode": 200}', '68f50e59-915a-470a-8c70-ffa24bceeae5', NULL),
	('ab6b077b-96c9-47d5-8b6e-26603a7f5526', 'galleries', 'Test Gallery/neroshi-2.jpeg', NULL, '2024-05-27 13:15:29.284648+00', '2024-05-27 13:15:29.284648+00', '2024-05-27 13:15:29.284648+00', '{"eTag": "\"f8eaf2e06e34ad1b3e101908ab02883e\"", "size": 326461, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2024-05-27T13:15:29.272Z", "contentLength": 326461, "httpStatusCode": 200}', 'c53ebb38-77a3-4dba-b5ff-f6b7942938fe', NULL),
	('9f340e7e-ebfe-49e3-b939-ce6a76b00524', 'galleries', 'Test Gallery/neroshi-1.jpeg', NULL, '2024-05-27 13:15:29.29804+00', '2024-05-27 13:15:29.29804+00', '2024-05-27 13:15:29.29804+00', '{"eTag": "\"76b9705bb529b16fc58a4bdb0b134c9b\"", "size": 552385, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2024-05-27T13:15:29.273Z", "contentLength": 552385, "httpStatusCode": 200}', 'fd99b1e9-ba96-44fe-943a-1aa23a98db0d', NULL),
	('daa4f8bb-5227-48a8-ae9c-9c9bc0cb61fe', 'galleries', 'Test Gallery/neroshi-4-1.jpeg', NULL, '2024-05-27 13:15:29.305156+00', '2024-05-27 13:15:29.305156+00', '2024-05-27 13:15:29.305156+00', '{"eTag": "\"eac1dd9a94c71dd30f565f95d32b0c6b\"", "size": 1227804, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2024-05-27T13:15:29.273Z", "contentLength": 1227804, "httpStatusCode": 200}', 'ffb64256-a72e-453a-8336-56fa12cc901f', NULL),
	('21df51f4-efc9-4076-bc84-9699b6efea72', 'galleries', 'Test Gallery/neroshi-4-2.jpeg', NULL, '2024-05-27 13:15:29.308884+00', '2024-05-27 13:15:29.308884+00', '2024-05-27 13:15:29.308884+00', '{"eTag": "\"d06af35773c09ff8cc1f4a590052be28\"", "size": 456918, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2024-05-27T13:15:29.301Z", "contentLength": 456918, "httpStatusCode": 200}', 'aaa5abda-7fb7-46e0-b3ec-a57679276386', NULL);


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

SELECT pg_catalog.setval('"auth"."refresh_tokens_id_seq"', 1, false);


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
