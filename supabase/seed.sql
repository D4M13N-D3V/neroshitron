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
	('00000000-0000-0000-0000-000000000000', 'ff4e9892-902a-4e6f-9493-976acd87e5ad', '{"action":"token_revoked","actor_id":"893c7701-d5df-4415-80bd-1ec089764400","actor_username":"damienostler1@outlook.com","actor_via_sso":false,"log_type":"token"}', '2024-05-28 00:06:54.426626+00', ''),
	('00000000-0000-0000-0000-000000000000', '13891f74-fb79-45bd-a202-3c3846723eb3', '{"action":"token_refreshed","actor_id":"893c7701-d5df-4415-80bd-1ec089764400","actor_username":"damienostler1@outlook.com","actor_via_sso":false,"log_type":"token"}', '2024-05-28 01:11:09.34946+00', ''),
	('00000000-0000-0000-0000-000000000000', '6125acd2-6bd2-4ae1-8b41-4b54b8097a64', '{"action":"token_revoked","actor_id":"893c7701-d5df-4415-80bd-1ec089764400","actor_username":"damienostler1@outlook.com","actor_via_sso":false,"log_type":"token"}', '2024-05-28 01:11:09.350568+00', ''),
	('00000000-0000-0000-0000-000000000000', '904b1ae0-83cb-4bce-a1b9-65f4215e0095', '{"action":"logout","actor_id":"893c7701-d5df-4415-80bd-1ec089764400","actor_username":"damienostler1@outlook.com","actor_via_sso":false,"log_type":"account"}', '2024-05-28 01:45:53.937368+00', ''),
	('00000000-0000-0000-0000-000000000000', '16bba433-9af2-4328-b0d2-d59a9d072edb', '{"action":"user_signedup","actor_id":"e11e6fda-d1fc-4b0a-bd61-80233fcb5cdd","actor_username":"damienostler1@gmail.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}', '2024-05-28 02:01:35.369669+00', ''),
	('00000000-0000-0000-0000-000000000000', 'a80de210-524f-41a2-b437-a0a68a5b0dc5', '{"action":"login","actor_id":"e11e6fda-d1fc-4b0a-bd61-80233fcb5cdd","actor_username":"damienostler1@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-05-28 02:01:35.372417+00', ''),
	('00000000-0000-0000-0000-000000000000', '56e9bcfc-28ea-4fbf-aae2-a6c611da2536', '{"action":"token_refreshed","actor_id":"e11e6fda-d1fc-4b0a-bd61-80233fcb5cdd","actor_username":"damienostler1@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-05-28 03:03:11.47339+00', ''),
	('00000000-0000-0000-0000-000000000000', 'f661df3e-4600-4254-a606-dab87b0bf241', '{"action":"token_revoked","actor_id":"e11e6fda-d1fc-4b0a-bd61-80233fcb5cdd","actor_username":"damienostler1@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-05-28 03:03:11.474173+00', ''),
	('00000000-0000-0000-0000-000000000000', 'eccb045f-3fa3-4cc4-92b5-2181ae4c684e', '{"action":"token_refreshed","actor_id":"e11e6fda-d1fc-4b0a-bd61-80233fcb5cdd","actor_username":"damienostler1@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-06-01 01:54:12.341648+00', ''),
	('00000000-0000-0000-0000-000000000000', 'bdca3f89-401a-40b5-b1bd-7b053f72f15a', '{"action":"token_revoked","actor_id":"e11e6fda-d1fc-4b0a-bd61-80233fcb5cdd","actor_username":"damienostler1@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-06-01 01:54:12.342909+00', ''),
	('00000000-0000-0000-0000-000000000000', 'a76ea115-0732-45e4-a05f-cbf9aec04dab', '{"action":"logout","actor_id":"e11e6fda-d1fc-4b0a-bd61-80233fcb5cdd","actor_username":"damienostler1@gmail.com","actor_via_sso":false,"log_type":"account"}', '2024-06-01 01:54:44.965028+00', ''),
	('00000000-0000-0000-0000-000000000000', '73e58d43-80dc-4c40-93b8-66debb2d79f2', '{"action":"login","actor_id":"893c7701-d5df-4415-80bd-1ec089764400","actor_username":"damienostler1@outlook.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-06-01 01:54:50.928035+00', ''),
	('00000000-0000-0000-0000-000000000000', 'a7b0b5b0-42d0-4970-a799-f918e320a460', '{"action":"token_refreshed","actor_id":"893c7701-d5df-4415-80bd-1ec089764400","actor_username":"damienostler1@outlook.com","actor_via_sso":false,"log_type":"token"}', '2024-06-01 02:52:51.499031+00', ''),
	('00000000-0000-0000-0000-000000000000', 'dd70c686-fc1b-42da-8aa1-91a6d7fbcc14', '{"action":"token_revoked","actor_id":"893c7701-d5df-4415-80bd-1ec089764400","actor_username":"damienostler1@outlook.com","actor_via_sso":false,"log_type":"token"}', '2024-06-01 02:52:51.50256+00', ''),
	('00000000-0000-0000-0000-000000000000', '09161c6c-3f38-4405-b26e-67fe90bc0005', '{"action":"token_refreshed","actor_id":"893c7701-d5df-4415-80bd-1ec089764400","actor_username":"damienostler1@outlook.com","actor_via_sso":false,"log_type":"token"}', '2024-06-01 03:51:46.507091+00', ''),
	('00000000-0000-0000-0000-000000000000', '7fd17052-1b4a-4178-98b8-3b16b9de930a', '{"action":"token_revoked","actor_id":"893c7701-d5df-4415-80bd-1ec089764400","actor_username":"damienostler1@outlook.com","actor_via_sso":false,"log_type":"token"}', '2024-06-01 03:51:46.5081+00', ''),
	('00000000-0000-0000-0000-000000000000', '727021f7-1385-43eb-9139-5c8d0984fb07', '{"action":"logout","actor_id":"893c7701-d5df-4415-80bd-1ec089764400","actor_username":"damienostler1@outlook.com","actor_via_sso":false,"log_type":"account"}', '2024-06-01 04:28:20.313782+00', ''),
	('00000000-0000-0000-0000-000000000000', '7df2cdbc-1c84-4847-8142-90477524ee7a', '{"action":"login","actor_id":"893c7701-d5df-4415-80bd-1ec089764400","actor_username":"damienostler1@outlook.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-06-01 04:32:18.045015+00', ''),
	('00000000-0000-0000-0000-000000000000', 'abb0a2d8-d525-4612-a364-9ba3ea22eabf', '{"action":"logout","actor_id":"893c7701-d5df-4415-80bd-1ec089764400","actor_username":"damienostler1@outlook.com","actor_via_sso":false,"log_type":"account"}', '2024-06-01 04:32:21.789565+00', ''),
	('00000000-0000-0000-0000-000000000000', '21e30d5b-7f03-459f-814d-43757cf3f8bf', '{"action":"login","actor_id":"893c7701-d5df-4415-80bd-1ec089764400","actor_username":"damienostler1@outlook.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-06-01 04:33:07.034577+00', ''),
	('00000000-0000-0000-0000-000000000000', '1d8fca22-6ef6-42eb-a1e9-659e702e0568', '{"action":"token_refreshed","actor_id":"893c7701-d5df-4415-80bd-1ec089764400","actor_username":"damienostler1@outlook.com","actor_via_sso":false,"log_type":"token"}', '2024-06-01 05:31:30.614051+00', ''),
	('00000000-0000-0000-0000-000000000000', '3a9c811c-fad9-4739-9e2f-807a65f92ebc', '{"action":"token_revoked","actor_id":"893c7701-d5df-4415-80bd-1ec089764400","actor_username":"damienostler1@outlook.com","actor_via_sso":false,"log_type":"token"}', '2024-06-01 05:31:30.614956+00', ''),
	('00000000-0000-0000-0000-000000000000', '7620c8d4-9662-4c6b-b04f-8bcf5fc37cd2', '{"action":"token_refreshed","actor_id":"893c7701-d5df-4415-80bd-1ec089764400","actor_username":"damienostler1@outlook.com","actor_via_sso":false,"log_type":"token"}', '2024-06-01 07:21:44.28552+00', ''),
	('00000000-0000-0000-0000-000000000000', '4cfcd7b6-8a95-4713-9409-317734ae7b38', '{"action":"token_revoked","actor_id":"893c7701-d5df-4415-80bd-1ec089764400","actor_username":"damienostler1@outlook.com","actor_via_sso":false,"log_type":"token"}', '2024-06-01 07:21:44.286437+00', ''),
	('00000000-0000-0000-0000-000000000000', '41cd74f2-8882-4e30-ae82-b743901cae3a', '{"action":"logout","actor_id":"893c7701-d5df-4415-80bd-1ec089764400","actor_username":"damienostler1@outlook.com","actor_via_sso":false,"log_type":"account"}', '2024-06-01 07:37:28.737433+00', ''),
	('00000000-0000-0000-0000-000000000000', 'a490a17d-b47e-4820-923d-e7c8bc88efb5', '{"action":"login","actor_id":"893c7701-d5df-4415-80bd-1ec089764400","actor_username":"damienostler1@outlook.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-06-01 07:37:35.302764+00', ''),
	('00000000-0000-0000-0000-000000000000', '3c44829d-3ec7-4698-95c3-b53597422759', '{"action":"token_refreshed","actor_id":"893c7701-d5df-4415-80bd-1ec089764400","actor_username":"damienostler1@outlook.com","actor_via_sso":false,"log_type":"token"}', '2024-06-01 08:36:15.774+00', ''),
	('00000000-0000-0000-0000-000000000000', '5b2c215f-bfd1-4b59-a782-eaac62d1c458', '{"action":"token_revoked","actor_id":"893c7701-d5df-4415-80bd-1ec089764400","actor_username":"damienostler1@outlook.com","actor_via_sso":false,"log_type":"token"}', '2024-06-01 08:36:15.775505+00', ''),
	('00000000-0000-0000-0000-000000000000', '0a5a278a-9fd1-4bcc-a041-66f1302ac7e6', '{"action":"token_refreshed","actor_id":"893c7701-d5df-4415-80bd-1ec089764400","actor_username":"damienostler1@outlook.com","actor_via_sso":false,"log_type":"token"}', '2024-06-01 09:34:29.572756+00', ''),
	('00000000-0000-0000-0000-000000000000', '89b87acd-362b-4c51-8c3a-5a5e356ed8e2', '{"action":"token_revoked","actor_id":"893c7701-d5df-4415-80bd-1ec089764400","actor_username":"damienostler1@outlook.com","actor_via_sso":false,"log_type":"token"}', '2024-06-01 09:34:29.573904+00', ''),
	('00000000-0000-0000-0000-000000000000', '8c413fec-a827-4ede-a533-2409f855d2e0', '{"action":"token_refreshed","actor_id":"893c7701-d5df-4415-80bd-1ec089764400","actor_username":"damienostler1@outlook.com","actor_via_sso":false,"log_type":"token"}', '2024-06-01 10:35:29.39825+00', ''),
	('00000000-0000-0000-0000-000000000000', '786f5ba3-670c-4799-8b5d-9e2536b75ca0', '{"action":"token_revoked","actor_id":"893c7701-d5df-4415-80bd-1ec089764400","actor_username":"damienostler1@outlook.com","actor_via_sso":false,"log_type":"token"}', '2024-06-01 10:35:29.399482+00', ''),
	('00000000-0000-0000-0000-000000000000', 'da188f51-e5c3-467c-b9c4-7e2ba8430981', '{"action":"token_refreshed","actor_id":"893c7701-d5df-4415-80bd-1ec089764400","actor_username":"damienostler1@outlook.com","actor_via_sso":false,"log_type":"token"}', '2024-06-01 20:10:45.655684+00', ''),
	('00000000-0000-0000-0000-000000000000', 'c415ee23-3497-4445-9b18-b3698dd35e16', '{"action":"token_revoked","actor_id":"893c7701-d5df-4415-80bd-1ec089764400","actor_username":"damienostler1@outlook.com","actor_via_sso":false,"log_type":"token"}', '2024-06-01 20:10:45.656475+00', ''),
	('00000000-0000-0000-0000-000000000000', '4c5c4c36-a506-4c80-b467-68618dbf10db', '{"action":"token_refreshed","actor_id":"893c7701-d5df-4415-80bd-1ec089764400","actor_username":"damienostler1@outlook.com","actor_via_sso":false,"log_type":"token"}', '2024-06-01 22:05:34.985137+00', ''),
	('00000000-0000-0000-0000-000000000000', '52eb3774-6624-4987-b357-fb07ff22e368', '{"action":"token_revoked","actor_id":"893c7701-d5df-4415-80bd-1ec089764400","actor_username":"damienostler1@outlook.com","actor_via_sso":false,"log_type":"token"}', '2024-06-01 22:05:34.986175+00', ''),
	('00000000-0000-0000-0000-000000000000', '4c493923-b97a-4ca7-ad59-801212c59692', '{"action":"token_refreshed","actor_id":"893c7701-d5df-4415-80bd-1ec089764400","actor_username":"damienostler1@outlook.com","actor_via_sso":false,"log_type":"token"}', '2024-06-02 03:42:48.403833+00', ''),
	('00000000-0000-0000-0000-000000000000', '04114bf3-53c5-447b-bb9d-0cf0e97411ce', '{"action":"token_revoked","actor_id":"893c7701-d5df-4415-80bd-1ec089764400","actor_username":"damienostler1@outlook.com","actor_via_sso":false,"log_type":"token"}', '2024-06-02 03:42:48.405516+00', ''),
	('00000000-0000-0000-0000-000000000000', '59785eb8-3a22-4596-b534-c76d0aaadf9b', '{"action":"token_refreshed","actor_id":"893c7701-d5df-4415-80bd-1ec089764400","actor_username":"damienostler1@outlook.com","actor_via_sso":false,"log_type":"token"}', '2024-06-02 04:41:14.398806+00', ''),
	('00000000-0000-0000-0000-000000000000', '1da856fa-1582-447b-a033-6dfd6e91ee5b', '{"action":"token_revoked","actor_id":"893c7701-d5df-4415-80bd-1ec089764400","actor_username":"damienostler1@outlook.com","actor_via_sso":false,"log_type":"token"}', '2024-06-02 04:41:14.399986+00', ''),
	('00000000-0000-0000-0000-000000000000', '3790f005-05d8-439d-a828-fb8e6a22356f', '{"action":"logout","actor_id":"893c7701-d5df-4415-80bd-1ec089764400","actor_username":"damienostler1@outlook.com","actor_via_sso":false,"log_type":"account"}', '2024-06-02 05:20:51.896435+00', ''),
	('00000000-0000-0000-0000-000000000000', '903ece4b-635c-4fd0-9a6d-c60103328e11', '{"action":"login","actor_id":"893c7701-d5df-4415-80bd-1ec089764400","actor_username":"damienostler1@outlook.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-06-02 05:21:03.760977+00', ''),
	('00000000-0000-0000-0000-000000000000', 'ab8d42bd-c9df-4782-8cbd-14279592fe94', '{"action":"logout","actor_id":"893c7701-d5df-4415-80bd-1ec089764400","actor_username":"damienostler1@outlook.com","actor_via_sso":false,"log_type":"account"}', '2024-06-02 06:18:43.051255+00', ''),
	('00000000-0000-0000-0000-000000000000', '008ae3d1-61c4-4456-8e70-8a2030acbbc4', '{"action":"login","actor_id":"893c7701-d5df-4415-80bd-1ec089764400","actor_username":"damienostler1@outlook.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-06-02 07:19:23.344522+00', ''),
	('00000000-0000-0000-0000-000000000000', 'bf042910-d447-4f27-bb63-fbd6b80c266f', '{"action":"token_refreshed","actor_id":"893c7701-d5df-4415-80bd-1ec089764400","actor_username":"damienostler1@outlook.com","actor_via_sso":false,"log_type":"token"}', '2024-06-02 08:17:36.070061+00', ''),
	('00000000-0000-0000-0000-000000000000', '55f64c6a-d6bd-4dd4-8627-3c35caa6dc7e', '{"action":"token_revoked","actor_id":"893c7701-d5df-4415-80bd-1ec089764400","actor_username":"damienostler1@outlook.com","actor_via_sso":false,"log_type":"token"}', '2024-06-02 08:17:36.071183+00', ''),
	('00000000-0000-0000-0000-000000000000', '578dc04e-5665-410c-8c0e-bbf40b397b18', '{"action":"token_refreshed","actor_id":"893c7701-d5df-4415-80bd-1ec089764400","actor_username":"damienostler1@outlook.com","actor_via_sso":false,"log_type":"token"}', '2024-06-02 09:23:17.276185+00', ''),
	('00000000-0000-0000-0000-000000000000', '4ccf2be5-8ecd-48ee-9400-7fef1004dc56', '{"action":"token_revoked","actor_id":"893c7701-d5df-4415-80bd-1ec089764400","actor_username":"damienostler1@outlook.com","actor_via_sso":false,"log_type":"token"}', '2024-06-02 09:23:17.277357+00', ''),
	('00000000-0000-0000-0000-000000000000', '824ccdf1-4dc0-4cee-8c01-ac66cdea101f', '{"action":"token_refreshed","actor_id":"893c7701-d5df-4415-80bd-1ec089764400","actor_username":"damienostler1@outlook.com","actor_via_sso":false,"log_type":"token"}', '2024-06-02 10:21:37.85499+00', ''),
	('00000000-0000-0000-0000-000000000000', '98aa3855-f2ff-4118-9618-041c82318963', '{"action":"token_revoked","actor_id":"893c7701-d5df-4415-80bd-1ec089764400","actor_username":"damienostler1@outlook.com","actor_via_sso":false,"log_type":"token"}', '2024-06-02 10:21:37.856028+00', ''),
	('00000000-0000-0000-0000-000000000000', 'f1599f7e-e1c1-4861-87e5-9b8e5e9fa8f7', '{"action":"token_refreshed","actor_id":"893c7701-d5df-4415-80bd-1ec089764400","actor_username":"damienostler1@outlook.com","actor_via_sso":false,"log_type":"token"}', '2024-06-02 11:20:00.113655+00', ''),
	('00000000-0000-0000-0000-000000000000', '84f7562d-151d-4e30-b810-70891f3a8a2b', '{"action":"token_revoked","actor_id":"893c7701-d5df-4415-80bd-1ec089764400","actor_username":"damienostler1@outlook.com","actor_via_sso":false,"log_type":"token"}', '2024-06-02 11:20:00.115274+00', ''),
	('00000000-0000-0000-0000-000000000000', '7451f114-d011-4552-9b21-bcf6d6df6243', '{"action":"token_refreshed","actor_id":"893c7701-d5df-4415-80bd-1ec089764400","actor_username":"damienostler1@outlook.com","actor_via_sso":false,"log_type":"token"}', '2024-06-02 20:49:23.877784+00', ''),
	('00000000-0000-0000-0000-000000000000', '24b82857-e2fd-4732-a2e8-ac99f67fffa9', '{"action":"token_revoked","actor_id":"893c7701-d5df-4415-80bd-1ec089764400","actor_username":"damienostler1@outlook.com","actor_via_sso":false,"log_type":"token"}', '2024-06-02 20:49:23.878598+00', ''),
	('00000000-0000-0000-0000-000000000000', 'bf2935a0-244a-449d-925c-ca7ad6bf91d6', '{"action":"token_refreshed","actor_id":"893c7701-d5df-4415-80bd-1ec089764400","actor_username":"damienostler1@outlook.com","actor_via_sso":false,"log_type":"token"}', '2024-06-02 21:49:06.535623+00', ''),
	('00000000-0000-0000-0000-000000000000', '88b130fb-5418-49ec-9e54-7db1df9b9353', '{"action":"token_revoked","actor_id":"893c7701-d5df-4415-80bd-1ec089764400","actor_username":"damienostler1@outlook.com","actor_via_sso":false,"log_type":"token"}', '2024-06-02 21:49:06.536554+00', ''),
	('00000000-0000-0000-0000-000000000000', '2aafc337-642d-4f4c-b550-b1c88b0f698a', '{"action":"token_refreshed","actor_id":"893c7701-d5df-4415-80bd-1ec089764400","actor_username":"damienostler1@outlook.com","actor_via_sso":false,"log_type":"token"}', '2024-06-02 22:47:33.949246+00', ''),
	('00000000-0000-0000-0000-000000000000', '7b7bc3c1-3751-4e00-a08c-14b5bb3cf892', '{"action":"token_revoked","actor_id":"893c7701-d5df-4415-80bd-1ec089764400","actor_username":"damienostler1@outlook.com","actor_via_sso":false,"log_type":"token"}', '2024-06-02 22:47:33.950537+00', ''),
	('00000000-0000-0000-0000-000000000000', '7b3b5a37-ed60-4b75-84ae-0caba9254581', '{"action":"login","actor_id":"893c7701-d5df-4415-80bd-1ec089764400","actor_username":"damienostler1@outlook.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-06-03 00:10:51.713229+00', ''),
	('00000000-0000-0000-0000-000000000000', 'd984ff2d-6d96-43d9-9a39-703de7400fd1', '{"action":"token_refreshed","actor_id":"893c7701-d5df-4415-80bd-1ec089764400","actor_username":"damienostler1@outlook.com","actor_via_sso":false,"log_type":"token"}', '2024-06-03 01:10:47.663131+00', ''),
	('00000000-0000-0000-0000-000000000000', 'e996a172-f818-489a-84b3-8dc8b8a1068b', '{"action":"token_revoked","actor_id":"893c7701-d5df-4415-80bd-1ec089764400","actor_username":"damienostler1@outlook.com","actor_via_sso":false,"log_type":"token"}', '2024-06-03 01:10:47.663668+00', ''),
	('00000000-0000-0000-0000-000000000000', '0f07359e-4c78-40a7-8711-4127dc74c0fb', '{"action":"token_refreshed","actor_id":"893c7701-d5df-4415-80bd-1ec089764400","actor_username":"damienostler1@outlook.com","actor_via_sso":false,"log_type":"token"}', '2024-06-03 02:08:53.524332+00', ''),
	('00000000-0000-0000-0000-000000000000', 'b8f1d6e8-4e3f-473c-b0be-98f4540da6f3', '{"action":"token_revoked","actor_id":"893c7701-d5df-4415-80bd-1ec089764400","actor_username":"damienostler1@outlook.com","actor_via_sso":false,"log_type":"token"}', '2024-06-03 02:08:53.525533+00', ''),
	('00000000-0000-0000-0000-000000000000', '1043d8ee-0301-46e0-a451-2bb043fe6634', '{"action":"token_refreshed","actor_id":"893c7701-d5df-4415-80bd-1ec089764400","actor_username":"damienostler1@outlook.com","actor_via_sso":false,"log_type":"token"}', '2024-06-03 03:07:09.462821+00', ''),
	('00000000-0000-0000-0000-000000000000', '6924eb3a-0588-46ff-94dc-b45f29a06e74', '{"action":"token_revoked","actor_id":"893c7701-d5df-4415-80bd-1ec089764400","actor_username":"damienostler1@outlook.com","actor_via_sso":false,"log_type":"token"}', '2024-06-03 03:07:09.463674+00', '');


--
-- Data for Name: flow_state; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: users; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."users" ("instance_id", "id", "aud", "role", "email", "encrypted_password", "email_confirmed_at", "invited_at", "confirmation_token", "confirmation_sent_at", "recovery_token", "recovery_sent_at", "email_change_token_new", "email_change", "email_change_sent_at", "last_sign_in_at", "raw_app_meta_data", "raw_user_meta_data", "is_super_admin", "created_at", "updated_at", "phone", "phone_confirmed_at", "phone_change", "phone_change_token", "phone_change_sent_at", "email_change_token_current", "email_change_confirm_status", "banned_until", "reauthentication_token", "reauthentication_sent_at", "is_sso_user", "deleted_at", "is_anonymous") VALUES
	('00000000-0000-0000-0000-000000000000', 'e11e6fda-d1fc-4b0a-bd61-80233fcb5cdd', 'authenticated', 'authenticated', 'damienostler1@gmail.com', '', '2024-05-28 02:01:35.370491+00', '2024-05-27 15:44:27.171961+00', '', '2024-05-27 15:44:27.171961+00', '', NULL, '', '', NULL, '2024-05-28 02:01:35.372861+00', '{"provider": "email", "providers": ["email"]}', '{}', NULL, '2024-05-27 15:44:27.167772+00', '2024-06-01 01:54:12.344577+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL, false),
	('00000000-0000-0000-0000-000000000000', '893c7701-d5df-4415-80bd-1ec089764400', 'authenticated', 'authenticated', 'damienostler1@outlook.com', '$2a$10$ISYdoWsKL7gxfRz7c5IKDOTsmcjNpGgg9OOApYLMOvtOoNTo4HGM6', '2024-05-27 14:10:29.639017+00', NULL, '', NULL, '', NULL, '', '', NULL, '2024-06-03 00:10:51.713875+00', '{"provider": "email", "providers": ["email"]}', '{"sub": "893c7701-d5df-4415-80bd-1ec089764400", "email": "damienostler1@outlook.com", "email_verified": false, "phone_verified": false}', NULL, '2024-05-27 14:10:29.634157+00', '2024-06-03 03:07:09.465697+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL, false);


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
	('d3d3a53c-1b42-47cb-8701-fc95698d7106', '893c7701-d5df-4415-80bd-1ec089764400', '2024-06-02 07:19:23.345142+00', '2024-06-02 22:47:33.954405+00', NULL, 'aal1', NULL, '2024-06-02 22:47:33.954341', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', '192.168.65.1', NULL),
	('93e61e5f-de83-43c0-8736-57075b701efb', '893c7701-d5df-4415-80bd-1ec089764400', '2024-06-03 00:10:51.713915+00', '2024-06-03 03:07:09.466859+00', NULL, 'aal1', NULL, '2024-06-03 03:07:09.466798', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', '192.168.65.1', NULL);


--
-- Data for Name: mfa_amr_claims; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."mfa_amr_claims" ("session_id", "created_at", "updated_at", "authentication_method", "id") VALUES
	('d3d3a53c-1b42-47cb-8701-fc95698d7106', '2024-06-02 07:19:23.346896+00', '2024-06-02 07:19:23.346896+00', 'password', '0d591b77-28af-4a30-a301-daacc838d19c'),
	('93e61e5f-de83-43c0-8736-57075b701efb', '2024-06-03 00:10:51.715581+00', '2024-06-03 00:10:51.715581+00', 'password', 'c6b47f07-cd77-4dfa-be78-eb7bbccce167');


--
-- Data for Name: mfa_factors; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: mfa_challenges; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: one_time_tokens; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: refresh_tokens; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."refresh_tokens" ("instance_id", "id", "token", "user_id", "revoked", "created_at", "updated_at", "parent", "session_id") VALUES
	('00000000-0000-0000-0000-000000000000', 64, '-aQ0p3dgoFGM06N1CEJhng', '893c7701-d5df-4415-80bd-1ec089764400', true, '2024-06-02 08:17:36.072721+00', '2024-06-02 09:23:17.277909+00', 'Fdh3420OVU8_AcHtT7SOEQ', 'd3d3a53c-1b42-47cb-8701-fc95698d7106'),
	('00000000-0000-0000-0000-000000000000', 65, 'mOeZVggLAIJd9wAVFzNfjg', '893c7701-d5df-4415-80bd-1ec089764400', true, '2024-06-02 09:23:17.278919+00', '2024-06-02 10:21:37.856567+00', '-aQ0p3dgoFGM06N1CEJhng', 'd3d3a53c-1b42-47cb-8701-fc95698d7106'),
	('00000000-0000-0000-0000-000000000000', 66, 'SEiL3pX_CwyyWuVoF3lMag', '893c7701-d5df-4415-80bd-1ec089764400', true, '2024-06-02 10:21:37.857854+00', '2024-06-02 11:20:00.115989+00', 'mOeZVggLAIJd9wAVFzNfjg', 'd3d3a53c-1b42-47cb-8701-fc95698d7106'),
	('00000000-0000-0000-0000-000000000000', 67, '3Ycsbg5jBAuM3LxZn1UGAw', '893c7701-d5df-4415-80bd-1ec089764400', true, '2024-06-02 11:20:00.116994+00', '2024-06-02 20:49:23.878961+00', 'SEiL3pX_CwyyWuVoF3lMag', 'd3d3a53c-1b42-47cb-8701-fc95698d7106'),
	('00000000-0000-0000-0000-000000000000', 68, 'p7WgXO_PVshB62rUN5xU7A', '893c7701-d5df-4415-80bd-1ec089764400', true, '2024-06-02 20:49:23.87952+00', '2024-06-02 21:49:06.536985+00', '3Ycsbg5jBAuM3LxZn1UGAw', 'd3d3a53c-1b42-47cb-8701-fc95698d7106'),
	('00000000-0000-0000-0000-000000000000', 69, 'p5zdPnIXjOLqif0nIF3dSg', '893c7701-d5df-4415-80bd-1ec089764400', true, '2024-06-02 21:49:06.537664+00', '2024-06-02 22:47:33.951389+00', 'p7WgXO_PVshB62rUN5xU7A', 'd3d3a53c-1b42-47cb-8701-fc95698d7106'),
	('00000000-0000-0000-0000-000000000000', 70, 'TyWiGmwbMN4hLag9hdEfJw', '893c7701-d5df-4415-80bd-1ec089764400', false, '2024-06-02 22:47:33.952392+00', '2024-06-02 22:47:33.952392+00', 'p5zdPnIXjOLqif0nIF3dSg', 'd3d3a53c-1b42-47cb-8701-fc95698d7106'),
	('00000000-0000-0000-0000-000000000000', 63, 'Fdh3420OVU8_AcHtT7SOEQ', '893c7701-d5df-4415-80bd-1ec089764400', true, '2024-06-02 07:19:23.345863+00', '2024-06-02 08:17:36.071756+00', NULL, 'd3d3a53c-1b42-47cb-8701-fc95698d7106'),
	('00000000-0000-0000-0000-000000000000', 71, 'K42SmAHYG6ial6I2WsSp2Q', '893c7701-d5df-4415-80bd-1ec089764400', true, '2024-06-03 00:10:51.714543+00', '2024-06-03 01:10:47.66392+00', NULL, '93e61e5f-de83-43c0-8736-57075b701efb'),
	('00000000-0000-0000-0000-000000000000', 72, 'YrwUhJkYZp_5uG5hP-MIdw', '893c7701-d5df-4415-80bd-1ec089764400', true, '2024-06-03 01:10:47.664502+00', '2024-06-03 02:08:53.525987+00', 'K42SmAHYG6ial6I2WsSp2Q', '93e61e5f-de83-43c0-8736-57075b701efb'),
	('00000000-0000-0000-0000-000000000000', 73, 'QCdIahteFhdcLV35WOcclw', '893c7701-d5df-4415-80bd-1ec089764400', true, '2024-06-03 02:08:53.52661+00', '2024-06-03 03:07:09.464089+00', 'YrwUhJkYZp_5uG5hP-MIdw', '93e61e5f-de83-43c0-8736-57075b701efb'),
	('00000000-0000-0000-0000-000000000000', 74, 'ib_wWqebr4i9I1enr1X16A', '893c7701-d5df-4415-80bd-1ec089764400', false, '2024-06-03 03:07:09.464595+00', '2024-06-03 03:07:09.464595+00', 'QCdIahteFhdcLV35WOcclw', '93e61e5f-de83-43c0-8736-57075b701efb');


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
-- Data for Name: admins; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."admins" ("user_id", "created_at", "assigner") VALUES
	('893c7701-d5df-4415-80bd-1ec089764400', '2024-06-02 21:12:58.507093+00', NULL);


--
-- Data for Name: galleries; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."galleries" ("name", "column_number", "tier", "nsfw", "tags") VALUES
	('Another Test Gallery', 3, 'Free', true, '{Hentai}'),
	('Test Gallery', 3, 'Tier 1', true, '{Dojin}'),
	('More Test Gallery', 3, 'Tier 3', true, '{Hentai,VTuber}'),
	('Some More Testing', 3, 'Tier 2', false, '{Hentai,Dojin}'),
	('Even More Testing', 3, 'Free', false, '{VTuber}'),
	('Killa Testing Here', 3, 'Tier 1', false, '{VTuber,Dojin}'),
	('Popcorn Tester', 3, 'Free', true, '{Hentai}'),
	('test', 3, 'Free', false, '{"[\"hentai\"]"}'),
	('testtttt', 3, 'Free', false, '{"[\"hentai\"]"}');


--
-- Data for Name: tags; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."tags" ("name", "gallery_name") VALUES
	('vtuber', NULL),
	('hentai', NULL),
	('test', NULL);


--
-- Data for Name: user_subscriptions; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."user_subscriptions" ("user_id", "tier") VALUES
	('893c7701-d5df-4415-80bd-1ec089764400', 'Tier 2');


--
-- Data for Name: buckets; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--

--
-- Data for Name: objects; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--


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

SELECT pg_catalog.setval('"auth"."refresh_tokens_id_seq"', 74, true);


--
-- Name: key_key_id_seq; Type: SEQUENCE SET; Schema: pgsodium; Owner: supabase_admin
--

SELECT pg_catalog.setval('"pgsodium"."key_key_id_seq"', 1, false);


--
-- Name: hooks_id_seq; Type: SEQUENCE SET; Schema: supabase_functions; Owner: supabase_functions_admin
--



--
-- PostgreSQL database dump complete
--

RESET ALL;
