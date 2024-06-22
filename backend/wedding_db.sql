-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
<<<<<<< HEAD
-- Generation Time: Jun 17, 2024 at 05:32 PM
=======
-- Generation Time: Jun 18, 2024 at 04:41 AM
>>>>>>> 44d29a65662299e8fedc7daf213dadae1c26aaf7
-- Generation Time: Jun 20, 2024 at 09:36 AM
-- Server version: 10.11.7-MariaDB-log
-- PHP Version: 8.1.10

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
<<<<<<< HEAD
-- Table structure for table `tbl_admins`
=======
>>>>>>> 44d29a65662299e8fedc7daf213dadae1c26aaf7
--

CREATE TABLE `tbl_admins` (
  `id_admin` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

<<<<<<< HEAD
=======
--
-- Dumping data for table `tbl_admins`
--

INSERT INTO `tbl_admins` (`id_admin`, `username`, `email`, `password`) VALUES
(2, 'admin', 'Admin@gmail.com', '$2a$10$RO5a6UgZRaAGbnAul.VcJOxZa/U3uEMy7jICmpMIurMyO46F1KAyS');

>>>>>>> 44d29a65662299e8fedc7daf213dadae1c26aaf7
-- --------------------------------------------------------

--
-- Table structure for table `tbl_detail_invitations`
<<<<<<< HEAD
=======
--

>>>>>>> 44d29a65662299e8fedc7daf213dadae1c26aaf7
CREATE TABLE `tbl_detail_invitations` (
  `id_undangan` int(11) NOT NULL,
  `nama` varchar(250) NOT NULL,
  `bride_name` varchar(100) NOT NULL,
  `groom_name` varchar(100) NOT NULL,
  `wedding_date` date NOT NULL,
  `location` varchar(255) NOT NULL
<<<<<<< HEAD
  `bride_name` varchar(100) NOT NULL,
  `groom_name` varchar(100) NOT NULL,
  `wedding_date` date NOT NULL,
  `location` varchar(255) NOT NULL
=======
>>>>>>> 44d29a65662299e8fedc7daf213dadae1c26aaf7
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_guests`
<<<<<<< HEAD
=======
--

>>>>>>> 44d29a65662299e8fedc7daf213dadae1c26aaf7
CREATE TABLE `tbl_guests` (
  `id_undangan` int(11) NOT NULL,
  `nama` varchar(250) NOT NULL,
  `status_tamu` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_invitations`
<<<<<<< HEAD
=======
--

>>>>>>> 44d29a65662299e8fedc7daf213dadae1c26aaf7
CREATE TABLE `tbl_invitations` (
  `id_undangan` int(11) NOT NULL,
  `nama` varchar(250) NOT NULL
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

-- --------------------------------------------------------

--
-- Table structure for table `tbl_users`
--

CREATE TABLE `tbl_users` (
<<<<<<< HEAD
  `id_user` int(11) NOT NULL,
=======
  `id_users` int(11) NOT NULL,
>>>>>>> 44d29a65662299e8fedc7daf213dadae1c26aaf7
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `phone` varchar(50) NOT NULL,
  `address` varchar(100) NOT NULL,
  `role` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
<<<<<<< HEAD
=======
-- Dumping data for table `tbl_users`
--

INSERT INTO `tbl_users` (`id_users`, `username`, `email`, `password`, `phone`, `address`, `role`) VALUES
(1, 'mail', 'mail@gmail.com', '$2a$10$il3FCIFOyfvcTxlujwDmee2w5T0jjJhQ4C0v1IkoIBIJ5uqMCikwe', '012345678999', 'Surabaya', 'user'),
(3, 'admin', 'admin@gmail.com', '$2a$10$mmefj7jpPXFGeOjmQxseauFxk224ptzsWwbde.Mc0f4Ny4CacRhuS', '08177888999', 'Surabaya', 'admin');

--
>>>>>>> 44d29a65662299e8fedc7daf213dadae1c26aaf7
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_admins`
--
ALTER TABLE `tbl_admins`
  ADD PRIMARY KEY (`id_admin`);

--
-- Indexes for table `tbl_detail_invitations`
<<<<<<< HEAD
ALTER TABLE `tbl_detail_invitations`
  ADD PRIMARY KEY (`id_undangan`),
  ADD UNIQUE KEY `user_id` (`nama`);
  ADD UNIQUE KEY `user_id` (`nama`);

--
-- Indexes for table `tbl_guests`
=======
--
ALTER TABLE `tbl_detail_invitations`
  ADD PRIMARY KEY (`id_undangan`),
  ADD UNIQUE KEY `user_id` (`nama`);

--
-- Indexes for table `tbl_guests`
--
>>>>>>> 44d29a65662299e8fedc7daf213dadae1c26aaf7
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
-- Indexes for table `tbl_rsvps`
--
ALTER TABLE `tbl_rsvps`
  ADD PRIMARY KEY (`id_undangan`),
  ADD UNIQUE KEY `nama` (`nama`);

--
-- Indexes for table `tbl_users`
--
ALTER TABLE `tbl_users`
<<<<<<< HEAD
  ADD PRIMARY KEY (`id_user`);
=======
  ADD PRIMARY KEY (`id_users`);
>>>>>>> 44d29a65662299e8fedc7daf213dadae1c26aaf7

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_admins`
--
ALTER TABLE `tbl_admins`
<<<<<<< HEAD
  MODIFY `id_admin` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
=======
  MODIFY `id_admin` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
>>>>>>> 44d29a65662299e8fedc7daf213dadae1c26aaf7

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
-- AUTO_INCREMENT for table `tbl_users`
--
ALTER TABLE `tbl_users`
<<<<<<< HEAD
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
=======
  MODIFY `id_users` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
>>>>>>> 44d29a65662299e8fedc7daf213dadae1c26aaf7
  MODIFY `id_users` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `tbl_detail_invitations`
--
ALTER TABLE `tbl_detail_invitations`
  ADD CONSTRAINT `tbl_detail_invitations_ibfk_1` FOREIGN KEY (`id_undangan`) REFERENCES `tbl_invitations` (`id_undangan`),
  ADD CONSTRAINT `tbl_detail_invitations_ibfk_2` FOREIGN KEY (`nama`) REFERENCES `tbl_invitations` (`nama`);

--
-- Constraints for table `tbl_guests`
<<<<<<< HEAD
-- Constraints for table `tbl_guests`
=======
>>>>>>> 44d29a65662299e8fedc7daf213dadae1c26aaf7
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
<<<<<<< HEAD
ALTER TABLE `tbl_guests`
  ADD CONSTRAINT `tbl_guests_ibfk_1` FOREIGN KEY (`id_undangan`) REFERENCES `tbl_rsvps` (`id_undangan`),
  ADD CONSTRAINT `tbl_guests_ibfk_2` FOREIGN KEY (`nama`) REFERENCES `tbl_rsvps` (`nama`);

--
-- Constraints for table `tbl_invitations`
--
ALTER TABLE `tbl_invitations`
  ADD CONSTRAINT `tbl_invitations_ibfk_1` FOREIGN KEY (`id_undangan`) REFERENCES `tbl_guests` (`id_undangan`),
  ADD CONSTRAINT `tbl_invitations_ibfk_2` FOREIGN KEY (`nama`) REFERENCES `tbl_guests` (`nama`);
=======
>>>>>>> 44d29a65662299e8fedc7daf213dadae1c26aaf7
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
