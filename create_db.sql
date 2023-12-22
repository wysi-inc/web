CREATE DATABASE wysi;

use wysi;

CREATE TABLE
    medals (
        medal_id INT PRIMARY KEY,
        name VARCHAR(255),
        link VARCHAR(255),
        description TEXT CHARACTER
        SET
            utf8mb4 COLLATE utf8mb4_unicode_ci,
            restriction VARCHAR(255),
            category VARCHAR(255),
            instructions TEXT,
            solution_found BOOLEAN,
            solution TEXT CHARACTER
        SET
            utf8mb4 COLLATE utf8mb4_unicode_ci,
            mods VARCHAR(255),
            locked BOOLEAN,
            video VARCHAR(255),
            date DATE,
            pack_id INT,
            first_achieved_date DATE,
            first_achieved_by VARCHAR(255),
            mode_order INT,
            ordering INT,
            rarity FLOAT
    )

-- CREATE TABLE
--     modes (mode_id int PRIMARY KEY, mode_name varchar(10))
-- INSERT INTO
--     modes (mode_id, mode_name)
-- VALUES
--     (1, 'osu');

-- INSERT INTO
--     modes (mode_id, mode_name)
-- VALUES
--     (2, 'taiko');

-- INSERT INTO
--     modes (mode_id, mode_name)
-- VALUES
--     (3, 'fruits');

-- INSERT INTO
--     modes (mode_id, mode_name)
-- VALUES
--     (4, 'mania');

-- CREATE TABLE
--     users (
--         user_id int PRIMARY KEY,
--         username varchar(15),
--         country_code varchar(255),
--         country_name varchar(255),
--         avatar_url varchar(255),
--         cover_url varchar(255),
--         title varchar(255),
--         join_date datetime,
--         playmode int,
--         page_html text,
--         page_raw text,
--         is_online boolean,
--         is_active boolean,
--         is_bot boolean,
--         is_deleted boolean,
--         is_supporter boolean,
--         support_level int,
--         has_supported boolean,
--         pm_friends_only boolean,
--         last_visit datetime,
--         FOREIGN KEY (playmode) REFERENCES modes (mode_id)
--     )
-- CREATE TABLE
--     user_country_rank_highest (
--         user_id int PRIMARY KEY,
--         rank int,
--         updated_at date,
--         FOREIGN KEY (user_id) REFERENCES users (user_id)
--     )
-- CREATE TABLE
--     user_global_rank_highest (
--         user_id int PRIMARY KEY,
--         rank int,
--         updated_at date,
--         FOREIGN KEY (user_id) REFERENCES users (user_id)
--     )
-- CREATE TABLE
--     wysi_badges (badge_id int PRIMARY KEY, title varchar(20))
-- INSERT INTO
--     wysi_badges (badge_id, title)
-- VALUES
--     (1, 'developer');

-- INSERT INTO
--     wysi_badges (badge_id, title)
-- VALUES
--     (2, 'translator');

-- INSERT INTO
--     wysi_badges (badge_id, title)
-- VALUES
--     (3, 'moderator');

-- CREATE TABLE
--     user_wysi_badges (
--         user_id int,
--         badge_id int,
--         CONSTRAINT pk_user_wysi_badges PRIMARY KEY (user_id, badge_id),
--         FOREIGN KEY (user_id) REFERENCES users (user_id),
--         FOREIGN KEY (badge_id) REFERENCES wysi_badges (badge_id)
--     )
-- CREATE TABLE
--     user_badges (
--         user_id int,
--         awarded_at datetime,
--         description text,
--         image_url varchar(255),
--         url varchar(255),
--         CONSTRAINT pk_user_badge PRIMARY KEY (user_id, url),
--         FOREIGN KEY (user_id) REFERENCES users (user_id)
--     )
-- CREATE TABLE
--     user_active_tournament_banners (
--         user_id int,
--         banner_id int,
--         tournament_id int,
--         image varchar(255),
--         CONSTRAINT pk_user_tournament_banner PRIMARY KEY (user_id, banner_id),
--         FOREIGN KEY (user_id) REFERENCES users (user_id)
--     )
-- CREATE TABLE
--     user_groups (
--         user_id int,
--         group_id int,
--         group_name varchar(255),
--         colour char(7),
--         has_listing boolean,
--         has_playmodes boolean,
--         identifier varchar(255),
--         is_probationary boolean,
--         short_name varchar(255),
--         playmodes text,
--         CONSTRAINT pk_user_group PRIMARY KEY (user_id, group_id),
--         FOREIGN KEY (user_id) REFERENCES users (user_id)
--     )
-- CREATE TABLE
--     user_achievements (
--         user_id int,
--         achievement_id int,
--         achieved_at datetime,
--         CONSTRAINT pk_user_achievement PRIMARY KEY (user_id, achievement_id),
--         FOREIGN KEY (user_id) REFERENCES users (user_id),
--         FOREIGN KEY (achievement_id) REFERENCES medals (medal_id)
--     )
-- CREATE TABLE
--     user_country_rank (
--         user_id int,
--         rank_date date,
--         rank int,
--         CONSTRAINT pk_country_rank PRIMARY KEY (user_id, rank_date),
--         FOREIGN KEY (user_id) REFERENCES users (user_id)
--     )
-- CREATE TABLE
--     user_global_rank (
--         user_id int,
--         rank_date date,
--         rank int,
--         CONSTRAINT pk_global_rank PRIMARY KEY (user_id, rank_date),
--         FOREIGN KEY (user_id) REFERENCES users (user_id)
--     )
-- CREATE TABLE
--     user_kudosu (
--         user_id int PRIMARY KEY,
--         kudosu_total int,
--         kudosu_available int,
--         FOREIGN KEY (user_id) REFERENCES users (user_id)
--     )
-- CREATE TABLE
--     user_statistics (
--         user_id int PRIMARY KEY,
--         play_time int,
--         play_count int,
--         pp int,
--         ranked_score int,
--         total_score int,
--         hit_accuracy int,
--         maximum_combo int,
--         level_current int,
--         level_progress int,
--         grade_x int,
--         grade_xh int,
--         grade_s int,
--         grade_sh int,
--         grade_a int,
--         hit_300 int,
--         hit_100 int,
--         hit_50 int,
--         hit_0 int,
--         FOREIGN KEY (user_id) REFERENCES users (user_id)
--     )
-- CREATE TABLE
--     user_counts (
--         user_id int PRIMARY KEY,
--         beatmapset_favourite_count int,
--         beatmapset_ranked_count int,
--         beatmapset_loved_count int,
--         beatmapset_guest_count int,
--         beatmapset_nominated_count int,
--         beatmapset_pending_count int,
--         beatmapset_graveyard_count int,
--         beatmapset_ranked_and_approved_count int,
--         beatmapset_unranked_count int,
--         beatmap_playcounts_count int,
--         scores_best_count int,
--         scores_first_count int,
--         scores_pinned_count int,
--         scores_recent_count int,
--         replays_watched_by_others int,
--         total_hits_count int,
--         follower_count int,
--         mapping_follower_count int,
--         comments_count int,
--         post_count int,
--         FOREIGN KEY (user_id) REFERENCES users (user_id)
--     )
-- CREATE TABLE
--     user_about (
--         user_id int PRIMARY KEY,
--         discord varchar(255),
--         twitter varchar(255),
--         twitch varchar(255),
--         youtube varchar(255),
--         instagram varchar(255),
--         website varchar(255),
--         interests varchar(255),
--         occupation varchar(255),
--         location varchar(255),
--         FOREIGN KEY (user_id) REFERENCES users (user_id)
--     )
-- CREATE TABLE
--     previous_usernames (
--         user_id int PRIMARY KEY,
--         username varchar(15),
--         FOREIGN KEY (user_id) REFERENCES users (user_id)
--     )
-- CREATE TABLE
--     user_monthly_plays (
--         user_id int,
--         play_count int,
--         month_date date,
--         CONSTRAINT pk_monthly_playcounts PRIMARY KEY (user_id, month_date),
--         FOREIGN KEY (user_id) REFERENCES users (user_id)
--     )
-- CREATE TABLE
--     user_monthly_replays (
--         user_id int,
--         replay_count int,
--         replay_date date,
--         CONSTRAINT pk_monthly_playcounts PRIMARY KEY (user_id, replay_date),
--         FOREIGN KEY (user_id) REFERENCES users (user_id)
--     )
-- CREATE TABLE
--     keyboard_layouts (
--         layout_code varchar(5) PRIMARY KEY,
--         layout_name varchar(15)
--     )
-- INSERT INTO
--     keyboard_layouts (layout_code, layout_name)
-- VALUES
--     ('k2', '2 Keys');

-- INSERT INTO
--     keyboard_layouts (layout_code, layout_name)
-- VALUES
--     ('k3', '3 Keys');

-- INSERT INTO
--     keyboard_layouts (layout_code, layout_name)
-- VALUES
--     ('k4', '4 Keys');

-- INSERT INTO
--     keyboard_layouts (layout_code, layout_name)
-- VALUES
--     ('k40', '40%');

-- INSERT INTO
--     keyboard_layouts (layout_code, layout_name)
-- VALUES
--     ('k60', '60%');

-- INSERT INTO
--     keyboard_layouts (layout_code, layout_name)
-- VALUES
--     ('k75', '75%');

-- INSERT INTO
--     keyboard_layouts (layout_code, layout_name)
-- VALUES
--     ('ktkl', 'TKL');

-- INSERT INTO
--     keyboard_layouts (layout_code, layout_name)
-- VALUES
--     ('kfull', 'FULL');

-- CREATE TABLE
--     user_components (
--         user_id int PRIMARY KEY,
--         cpu varchar(255),
--         gpu varchar(255),
--         ram varchar(255),
--         psu varchar(255),
--         storage varchar(255),
--         motherboard varchar(255),
--         chasis varchar(255),
--         FOREIGN KEY (user_id) REFERENCES users (user_id)
--     )
-- CREATE TABLE
--     user_peripherals (
--         user_id int PRIMARY KEY,
--         monitor varchar(255),
--         headphones varchar(255),
--         microphone varchar(255),
--         tablet varchar(255),
--         mouse varchar(255),
--         keyboard varchar(255),
--         keypad varchar(255),
--         mousepad varchar(255),
--         chair varchar(255),
--         camera varchar(255),
--         audio varchar(255),
--         FOREIGN KEY (user_id) REFERENCES users (user_id)
--     )
-- CREATE TABLE
--     user_mouse (
--         user_id int PRIMARY KEY,
--         model varchar(255),
--         dpi int,
--         FOREIGN KEY (user_id) REFERENCES users (user_id)
--     )
-- CREATE TABLE
--     user_tablets (
--         user_id int PRIMARY KEY,
--         model varchar(255),
--         size_w int,
--         size_h int,
--         area_w int,
--         area_h int,
--         position_x int,
--         position_y int,
--         position_r int,
--         FOREIGN KEY (user_id) REFERENCES users (user_id)
--     )
-- CREATE TABLE
--     user_keyboards (
--         user_id int PRIMARY KEY,
--         model varchar(255),
--         layout varchar(5),
--         FOREIGN KEY (user_id) REFERENCES users (user_id),
--         FOREIGN KEY (layout) REFERENCES keyboard_layouts (layout_code)
--     )
-- CREATE TABLE
--     user_keyboard_keys (
--         user_id int,
--         key_code varchar(5),
--         FOREIGN KEY (user_id) REFERENCES users (user_id),
--         CONSTRAINT pk_user_key PRIMARY KEY (user_id, key_code)
--     )