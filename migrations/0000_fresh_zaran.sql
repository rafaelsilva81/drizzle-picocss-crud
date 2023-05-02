CREATE TABLE `book` (
	`id` integer PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`author` text NOT NULL,
	`sinopsis` text,
	`pages` integer,
	`is_borrowed` integer DEFAULT 0
);
--> statement-breakpoint
CREATE TABLE `borrows` (
	`id` integer PRIMARY KEY NOT NULL,
	`book_id` text NOT NULL,
	`user_id` text NOT NULL,
	`borrow_date` integer,
	`return_date` integer,
	`accumulated_fine` integer DEFAULT 0
);
--> statement-breakpoint
CREATE TABLE `user` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text NOT NULL
);
