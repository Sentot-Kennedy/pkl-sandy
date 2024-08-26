-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               8.0.30 - MySQL Community Server - GPL
-- Server OS:                    Win64
-- HeidiSQL Version:             12.1.0.6537
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for notes_1
CREATE DATABASE IF NOT EXISTS `notes_1` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `notes_1`;

-- Dumping structure for table notes_1.notes
CREATE TABLE IF NOT EXISTS `notes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `title` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  KEY `user_id_idx` (`user_id`) USING BTREE,
  CONSTRAINT `fk_notes_user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table notes_1.notes: ~2 rows (approximately)
DELETE FROM `notes`;
INSERT INTO `notes` (`id`, `user_id`, `title`, `content`) VALUES
	(3, 4, 'test', 'test'),
	(7, 1, 'ok', 'ok');

-- Dumping structure for table notes_1.user
CREATE TABLE IF NOT EXISTS `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstName` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `lastName` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `email` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table notes_1.user: ~0 rows (approximately)
DELETE FROM `user`;
INSERT INTO `user` (`id`, `firstName`, `lastName`, `email`, `password`) VALUES
	(1, 'abc', 'def', 'abc@mail.com', '$2y$10$L6.KV6c3eu9Lxs4zdZqi4elqN65FmihbP87.D4/iiG.rMIUuPQNE6'),
	(2, 'cuy', '1', 'cuy@mail.com', '$2y$10$DOW7RWUFwXv8qG4XlVYG.ObQSXfeXHWKMeDlK2kLqJgPLLH2Y0XFe'),
	(4, 'i', 'ib', 'iib@mail.com', '$2y$10$lgotBe1Ae3NDJrnXoo1ADumGTZ6Uafw8VDKttsjQU..ThUGHzNit2'),
	(5, 'pe', 'dajjal', 'plerdajjal@mail.com', '$2y$10$WL0WNZuLlLbxESs8TegfWuqUD3qmAF3Gz0KpWBgbuk6FBdD9UGs6C'),
	(6, 'sentot', 'cek', 'sentot@mail.com', '$2y$10$fcbIyWyConOvESHVzyfMfunz0oqU3mMYVPnHI31hkVdUVyiDUmXfa');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
