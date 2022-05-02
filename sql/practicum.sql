-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 02, 2022 at 05:22 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `practicum`
--

-- --------------------------------------------------------

--
-- Table structure for table `candidate`
--

CREATE TABLE `candidate` (
  `id` int(11) NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `mail` varchar(255) NOT NULL,
  `phoneNumber` varchar(255) NOT NULL,
  `interest` varchar(255) NOT NULL,
  `maritalStatus` varchar(255) NOT NULL,
  `kidsNumber` int(11) NOT NULL,
  `livingArea` varchar(255) NOT NULL,
  `village` varchar(255) NOT NULL,
  `birthDate` date NOT NULL,
  `mathLevel` varchar(255) NOT NULL,
  `mathGrade` int(255) NOT NULL,
  `englishLevel` varchar(255) NOT NULL,
  `englishGrade` int(255) NOT NULL,
  `psychometry` int(255) NOT NULL,
  `travelling` tinyint(1) NOT NULL,
  `morningWork` tinyint(1) NOT NULL,
  `childrenArrangement` tinyint(1) NOT NULL,
  `studiesCombined` tinyint(1) NOT NULL,
  `adjustment` varchar(255) NOT NULL,
  `CV` tinyblob NOT NULL,
  `matriculationGrades` tinyblob NOT NULL,
  `psychometricGrade` tinyblob NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `optiontype`
--

CREATE TABLE `optiontype` (
  `id` int(11) NOT NULL,
  `idQuestionnair` int(11) NOT NULL,
  `option` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `questionnairfields`
--

CREATE TABLE `questionnairfields` (
  `id` int(11) NOT NULL,
  `nameField` varchar(255) NOT NULL,
  `typeField` varchar(255) NOT NULL,
  `createDate` varchar(255) NOT NULL,
  `required` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `role`
--

CREATE TABLE `role` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `accessablities` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `gender` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `roleId` int(11) NOT NULL,
  `education` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `experience` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `candidate`
--
ALTER TABLE `candidate`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `optiontype`
--
ALTER TABLE `optiontype`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_idQuestionnaire` (`idQuestionnair`);

--
-- Indexes for table `questionnairfields`
--
ALTER TABLE `questionnairfields`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `roleId` (`roleId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `candidate`
--
ALTER TABLE `candidate`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `optiontype`
--
ALTER TABLE `optiontype`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `questionnairfields`
--
ALTER TABLE `questionnairfields`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `role`
--
ALTER TABLE `role`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `optiontype`
--
ALTER TABLE `optiontype`
  ADD CONSTRAINT `FK_idQuestionnaire` FOREIGN KEY (`idQuestionnair`) REFERENCES `questionnairfields` (`id`);

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`roleId`) REFERENCES `role` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
