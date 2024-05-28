CREATE TYPE tier AS ENUM ('Free', 'Tier 1', 'Tier 2', 'Tier 3');

CREATE TABLE tags (
    name text primary key,
    gallery_name text
);

CREATE TABLE user_subscriptions (
    user_id uuid primary key references auth.users(id),
    tier tier
);

CREATE TABLE galleries (
    name text primary key,
    column_number int8,
    tier tier,
    nsfw boolean,
    tags text[]
);

ALTER TABLE tags ADD FOREIGN KEY (gallery_name) REFERENCES galleries(name);