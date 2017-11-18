create table pages(
	id uuid PRIMARY KEY, 
	name text, 
	urlPath text[], 
	description text,
	title text,
	moduleIds uuid[]
);

create table modules(
	id uuid PRIMARY KEY,
	pageId uuid references pages(pageId)
	content text
);

create table users(
	id uuid PRIMARY KEY,
	username text,
	password text,
	role '{ADMIN}'
);

