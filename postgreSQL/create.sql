-- create user tables
 CREATE TABLE federated_credentials (
    _id             serial primary key, 
    google_id       int, 
    subject         int
);
CREATE TABLE users (
    _id             serial primary key,
    name            varchar(80),
    OauthKey        varchar(256),
    google_id       int
);

-- set not nulls
ALTER TABLE users ALTER COLUMN name SET NOT NULL;
ALTER TABLE users ALTER COLUMN OauthKey SET NOT NULL;

-- create transaction tables
CREATE TABLE transactions (
    _id             serial primary key,
    accountType     varchar(100),
    accountFrom     varchar(100),
    accountTo       varchar(100),
    account         varchar(100),
    date            date,
    payee           varchar(80),
    notes           varchar(200),
    amount          float,
    debit           boolean,
    credit          boolean,
    user_id         int,
    category_id     int
);

-- set not nulls
ALTER TABLE transactions ALTER COLUMN accountType SET NOT NULL;
ALTER TABLE transactions ALTER COLUMN account SET NOT NULL;
ALTER TABLE transactions ALTER COLUMN date SET NOT NULL;
ALTER TABLE transactions ALTER COLUMN amount SET NOT NULL;
ALTER TABLE transactions ALTER COLUMN debit SET NOT NULL;
ALTER TABLE transactions ALTER COLUMN credit SET NOT NULL;
ALTER TABLE transactions ALTER COLUMN user_id SET NOT NULL;
ALTER TABLE transactions ALTER COLUMN category_id SET NOT NULL;

-- create categories table
CREATE TABLE categories (
    _id             serial primary key,
    name            varchar(100),
    user_id         int
);

-- set not nulls
ALTER TABLE categories ALTER COLUMN name SET NOT NULL;
ALTER TABLE categories ALTER COLUMN user_id SET NOT NULL;

-- create categoryBudgets
CREATE TABLE categoryBudgets (
    ID              serial primary key,
    dateFrom        date,
    dateTo          date,
    amount          float,
    category_ID     int
);

--set not defaults and settings
ALTER TABLE categoryBudgets ALTER COLUMN dateFrom SET NOT NULL;
ALTER TABLE categoryBudgets ALTER COLUMN dateTo SET NOT NULL;
ALTER TABLE categoryBudgets ALTER COLUMN amount SET NOT NULL SET DEFAULT 0;
ALTER TABLE categoryBudgets ALTER COLUMN category_id SET NOT NULL;


-- add foreign keys
ALTER TABLE transactions ADD CONSTRAINT transactions_user_fkey FOREIGN KEY(user_id) REFERENCES users(_id);
ALTER TABLE transactions ADD CONSTRAINT transactions_category_fkey FOREIGN KEY(category_id) REFERENCES categories(_id);
ALTER TABLE categories ADD CONSTRAINT categories_user_fkey FOREIGN KEY(user_id) REFERENCES users(_id);
ALTER TABLE categoryBudgets ADD CONSTRAINT categorybudgets_category_fkey FOREIGN KEY(category_id) REFERENCES categories(_id);



-- Notes
-- insert key
-- ALTER TABLE categories ADD COLUMN user_id INT;

-- change to foreign key
-- ALTER TABLE categories ADD CONSTRAINT categories_user_fkey FOREIGN KEY(user_id) REFERENCES users(_id);

-- view all users
-- SELECT * FROM public.users
-- ORDER BY _id ASC 


