DROP TABLE if EXISTS memo;

CREATE TABLE memo (
    message VARCHAR(32),
    event_date DATE NOT NULL DEFAULT CURRENT_DATE
);
