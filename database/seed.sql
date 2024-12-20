-- Purpose: Populate database with sample data for testing
-- Insert sample users
INSERT INTO users (email, password, created_at) VALUES
('user1@example.com', '$2y$10$abcdefghijklmnopqrstuv', NOW()),
('user2@example.com', '$2y$10$abcdefghijklmnopqrstuv', NOW());

-- Insert sample posts
INSERT INTO posts (user_id, content, created_at) VALUES
(1, 'This is the first post by user1', NOW()),
(2, 'This is a post by user2', NOW());

-- Insert sample messages
INSERT INTO messages (sender_id, receiver_id, content, created_at) VALUES
(1, 2, 'Hi, how are you?', NOW()),
(2, 1, 'I am good, thanks!', NOW());

-- To develop further: Add more diverse test data, including edge cases, and use SQL scripts to automate test resets.
