-- Table for User
CREATE TABLE users (
   id BIGSERIAL PRIMARY KEY,
   username VARCHAR(255) NOT NULL UNIQUE,
   password VARCHAR(255) NOT NULL,
   email VARCHAR(255) NOT NULL UNIQUE
);

-- Table for Account
CREATE TABLE account (
     id BIGSERIAL PRIMARY KEY,
     user_id BIGINT NOT NULL,
     account_number VARCHAR(255) NOT NULL UNIQUE,
     amount NUMERIC(19,2) DEFAULT 0.0 NOT NULL,
     start_date DATE NOT NULL,
     end_date DATE NOT NULL,
     duration INT NOT NULL,
     interest_rate NUMERIC(5,2) NOT NULL,
     interest_on VARCHAR(50) NOT NULL,
     interest_calculation_duration VARCHAR(50) NOT NULL,
     currency VARCHAR(10) NOT NULL,
     bank_name VARCHAR(255) NOT NULL,
     CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Insert records into users table
INSERT INTO users (username, password, email) VALUES
  ('alice', 'password123', 'alice@example.com'),
  ('bob', 'password456', 'bob@example.com'),
  ('charlie', 'password789', 'charlie@example.com');

-- Insert records into account table
INSERT INTO account (user_id, account_number, amount, start_date, end_date, duration, interest_rate, interest_on, interest_calculation_duration, currency, bank_name) VALUES
    (1, '123456789', 5000.00, '2024-01-01', '2025-01-01', 12, 5.0, 'MATURITY', 'ANNUALLY', 'USD', 'Bank of America'),
    (1, '987654321', 10000.00, '2024-02-01', '2026-02-01', 24, 4.5, 'ANNUALLY', 'ANNUALLY', 'EUR', 'Deutsche Bank'),
    (2, '543216789', 7500.00, '2023-05-01', '2024-05-01', 12, 3.5, 'MONTHLY', 'MONTHLY', 'GBP', 'HSBC'),
    (3, '192837465', 2500.00, '2024-03-01', '2025-03-01', 12, 2.8, 'QUARTERLY', 'QUARTERLY', 'INR', 'State Bank of India');
