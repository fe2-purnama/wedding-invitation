-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 17, 2024 at 06:43 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `wedding_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_admins`
--

CREATE TABLE `tbl_admins` (
  `username` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_detail_invitations`
--

CREATE TABLE `tbl_detail_invitations` (
  `id_undangan` int(11) NOT NULL,
  `nama` varchar(250) NOT NULL,
  `bride_name` varchar(100) NOT NULL,
  `groom_name` varchar(100) NOT NULL,
  `wedding_date` date NOT NULL,
  `location` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_guests`
--

CREATE TABLE `tbl_guests` (
  `id_undangan` int(11) NOT NULL,
  `nama` varchar(250) NOT NULL,
  `status_tamu` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_invitations`
--

CREATE TABLE `tbl_invitations` (
  `id_undangan` int(11) NOT NULL,
  `nama` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_registers`
--

CREATE TABLE `tbl_registers` (
  `username` varchar(50) NOT NULL,
  `password` varchar(250) NOT NULL,
  `email` varchar(250) NOT NULL,
  `no_telp` varchar(50) NOT NULL,
  `alamat` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_rsvps`
--

CREATE TABLE `tbl_rsvps` (
  `id_undangan` int(11) NOT NULL,
  `nama` varchar(250) NOT NULL,
  `status_reservasi` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_admins`
--
ALTER TABLE `tbl_admins`
  ADD PRIMARY KEY (`username`),
  ADD UNIQUE KEY `password` (`password`);

--
-- Indexes for table `tbl_detail_invitations`
--
ALTER TABLE `tbl_detail_invitations`
  ADD PRIMARY KEY (`id_undangan`),
  ADD UNIQUE KEY `user_id` (`nama`);

--
-- Indexes for table `tbl_guests`
--
ALTER TABLE `tbl_guests`
  ADD PRIMARY KEY (`id_undangan`),
  ADD UNIQUE KEY `nama_tamu` (`nama`);

--
-- Indexes for table `tbl_invitations`
--
ALTER TABLE `tbl_invitations`
  ADD PRIMARY KEY (`id_undangan`),
  ADD UNIQUE KEY `nama` (`nama`);

--
-- Indexes for table `tbl_registers`
--
ALTER TABLE `tbl_registers`
  ADD PRIMARY KEY (`username`),
  ADD UNIQUE KEY `password` (`password`);

--
-- Indexes for table `tbl_rsvps`
--
ALTER TABLE `tbl_rsvps`
  ADD PRIMARY KEY (`id_undangan`),
  ADD UNIQUE KEY `nama` (`nama`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_detail_invitations`
--
ALTER TABLE `tbl_detail_invitations`
  MODIFY `id_undangan` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_guests`
--
ALTER TABLE `tbl_guests`
  MODIFY `id_undangan` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `tbl_admins`
--
ALTER TABLE `tbl_admins`
  ADD CONSTRAINT `tbl_admins_ibfk_1` FOREIGN KEY (`username`) REFERENCES `tbl_registers` (`username`),
  ADD CONSTRAINT `tbl_admins_ibfk_2` FOREIGN KEY (`password`) REFERENCES `tbl_registers` (`password`);

--
-- Constraints for table `tbl_detail_invitations`
--
ALTER TABLE `tbl_detail_invitations`
  ADD CONSTRAINT `tbl_detail_invitations_ibfk_1` FOREIGN KEY (`id_undangan`) REFERENCES `tbl_invitations` (`id_undangan`),
  ADD CONSTRAINT `tbl_detail_invitations_ibfk_2` FOREIGN KEY (`nama`) REFERENCES `tbl_invitations` (`nama`);

--
-- Constraints for table `tbl_guests`
--
ALTER TABLE `tbl_guests`
  ADD CONSTRAINT `tbl_guests_ibfk_1` FOREIGN KEY (`id_undangan`) REFERENCES `tbl_rsvps` (`id_undangan`),
  ADD CONSTRAINT `tbl_guests_ibfk_2` FOREIGN KEY (`nama`) REFERENCES `tbl_rsvps` (`nama`);

--
-- Constraints for table `tbl_invitations`
--
ALTER TABLE `tbl_invitations`
  ADD CONSTRAINT `tbl_invitations_ibfk_1` FOREIGN KEY (`id_undangan`) REFERENCES `tbl_guests` (`id_undangan`),
  ADD CONSTRAINT `tbl_invitations_ibfk_2` FOREIGN KEY (`nama`) REFERENCES `tbl_guests` (`nama`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
