-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Oct 18, 2021 at 12:58 AM
-- Server version: 5.7.31
-- PHP Version: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `soka_shoes`
--

-- --------------------------------------------------------

--
-- Table structure for table `carrito`
--

DROP TABLE IF EXISTS `carrito`;
CREATE TABLE IF NOT EXISTS `carrito` (
  `id_carrito` int(11) NOT NULL AUTO_INCREMENT,
  `cantidad` int(11) DEFAULT NULL,
  `usuario` int(11) DEFAULT NULL,
  `producto` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_carrito`),
  KEY `carrito_usuario_fk` (`usuario`),
  KEY `carrito_producto_fk` (`producto`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `carrito`
--

INSERT INTO `carrito` (`id_carrito`, `cantidad`, `usuario`, `producto`) VALUES
(1, 2, 119, 1),
(2, 3, 123, 1),
(3, 0, 123, 4),
(4, 0, 123, 3);

-- --------------------------------------------------------

--
-- Table structure for table `categoria`
--

DROP TABLE IF EXISTS `categoria`;
CREATE TABLE IF NOT EXISTS `categoria` (
  `id_categoria` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(25) DEFAULT NULL,
  `descripcion` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id_categoria`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `categoria`
--

INSERT INTO `categoria` (`id_categoria`, `nombre`, `descripcion`) VALUES
(1, 'zapatillas', 'poderosas');

-- --------------------------------------------------------

--
-- Table structure for table `color`
--

DROP TABLE IF EXISTS `color`;
CREATE TABLE IF NOT EXISTS `color` (
  `id_color` varchar(50) NOT NULL,
  `nombre` varchar(25) DEFAULT NULL,
  PRIMARY KEY (`id_color`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `color`
--

INSERT INTO `color` (`id_color`, `nombre`) VALUES
('#FFFFFF', 'blanco');

-- --------------------------------------------------------

--
-- Table structure for table `compra`
--

DROP TABLE IF EXISTS `compra`;
CREATE TABLE IF NOT EXISTS `compra` (
  `id_compra` int(255) NOT NULL,
  `total_compra` int(11) DEFAULT NULL,
  `usuario` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_compra`),
  KEY `compra_usuario_fk` (`usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `compra`
--

INSERT INTO `compra` (`id_compra`, `total_compra`, `usuario`) VALUES
(345688, 450000, 123),
(17909518, 450000, 123),
(20880237, 270000, 116),
(23865915, 450000, 123);

-- --------------------------------------------------------

--
-- Table structure for table `detalle_compra`
--

DROP TABLE IF EXISTS `detalle_compra`;
CREATE TABLE IF NOT EXISTS `detalle_compra` (
  `id_detalle` int(11) NOT NULL AUTO_INCREMENT,
  `fecha` date DEFAULT NULL,
  `compra` int(11) DEFAULT NULL,
  `producto` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_detalle`),
  KEY `det_producto_fk` (`producto`),
  KEY `det_compra_fk` (`compra`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `marca`
--

DROP TABLE IF EXISTS `marca`;
CREATE TABLE IF NOT EXISTS `marca` (
  `id_marca` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(25) NOT NULL,
  PRIMARY KEY (`id_marca`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `marca`
--

INSERT INTO `marca` (`id_marca`, `nombre`) VALUES
(1, 'Nike');

-- --------------------------------------------------------

--
-- Table structure for table `persona`
--

DROP TABLE IF EXISTS `persona`;
CREATE TABLE IF NOT EXISTS `persona` (
  `id_persona` int(11) NOT NULL,
  `id_tipoId` int(11) DEFAULT NULL,
  `per_nom` varchar(25) DEFAULT NULL,
  `sdo_nom` varchar(25) DEFAULT NULL,
  `per_apell` varchar(25) DEFAULT NULL,
  `sdo_apell` varchar(25) DEFAULT NULL,
  `genero` tinyint(4) DEFAULT NULL,
  `fecha_nac` date DEFAULT NULL,
  `cel` varchar(10) DEFAULT NULL,
  `correo` varchar(25) DEFAULT NULL,
  `dir` varchar(255) DEFAULT NULL,
  `usuario` int(11) NOT NULL,
  PRIMARY KEY (`id_persona`),
  KEY `persona_tipoid_fk` (`id_tipoId`),
  KEY `persona_usuario_fk` (`usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `producto`
--

DROP TABLE IF EXISTS `producto`;
CREATE TABLE IF NOT EXISTS `producto` (
  `id_producto` int(11) NOT NULL AUTO_INCREMENT,
  `modelo` varchar(25) DEFAULT NULL,
  `descripcion` varchar(50) DEFAULT NULL,
  `categoria` int(11) DEFAULT NULL,
  `precio` int(11) NOT NULL,
  `url_img` mediumtext NOT NULL,
  `marca` int(11) NOT NULL,
  PRIMARY KEY (`id_producto`),
  KEY `producto_categoria_fk` (`categoria`),
  KEY `producto_marca_fk` (`marca`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `producto`
--

INSERT INTO `producto` (`id_producto`, `modelo`, `descripcion`, `categoria`, `precio`, `url_img`, `marca`) VALUES
(1, 'adddidasAAA', '99% originales', 1, 90000, 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/3a6ece34-0de3-49db-bc3e-f585c04083e7/custom-nike-mercurial-vapor-14-elite-by-you.png', 1),
(2, 'NIKE MERCURIAL VAPOR', 'Zapatillas Fútbol Hombre Mujer', 1, 50000, 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/0a0127a2-cbcc-440b-96eb-234474d24edb/calzado-de-f%C3%BAtbol-para-terreno-firme-mercurial-vapor-14-elite-fg-mcqZFs.png', 1),
(3, 'Nike Mercurial Vapor 14', 'Zapatillas Fútbol Hombre Mujer', 1, 120000, 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/41e2e8d8-8c0e-4738-bf06-0520d4cbb820/calzado-de-f%C3%BAtbol-para-terreno-firme-mercurial-vapor-14-elite-fg-mcqZFs.png', 1),
(4, 'Nike Mercurial Superfly', 'Zapatillas Fútbol Hombre Mujer', 1, 78000, 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/0340974d-665e-47da-ac8b-6b3147ded299/calzado-de-f%C3%BAtbol-para-terreno-firme-mercurial-superfly-8-pro-fg-hpgDrm.png', 1);

-- --------------------------------------------------------

--
-- Table structure for table `producto_color`
--

DROP TABLE IF EXISTS `producto_color`;
CREATE TABLE IF NOT EXISTS `producto_color` (
  `id_producto` int(11) NOT NULL,
  `id_color` varchar(50) NOT NULL,
  PRIMARY KEY (`id_producto`,`id_color`),
  KEY `PFK` (`id_producto`,`id_color`),
  KEY `producto_color_color_pfk` (`id_color`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `producto_color`
--

INSERT INTO `producto_color` (`id_producto`, `id_color`) VALUES
(1, '#FFFFFF');

-- --------------------------------------------------------

--
-- Table structure for table `producto_talla`
--

DROP TABLE IF EXISTS `producto_talla`;
CREATE TABLE IF NOT EXISTS `producto_talla` (
  `id_producto` int(11) NOT NULL,
  `id_talla` int(11) NOT NULL,
  PRIMARY KEY (`id_producto`,`id_talla`),
  KEY `PFK` (`id_producto`,`id_talla`),
  KEY `producto_talla_talla_pfk` (`id_talla`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `producto_talla`
--

INSERT INTO `producto_talla` (`id_producto`, `id_talla`) VALUES
(1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `rol`
--

DROP TABLE IF EXISTS `rol`;
CREATE TABLE IF NOT EXISTS `rol` (
  `id_rol` int(11) NOT NULL,
  `rol_nombre` varchar(25) DEFAULT NULL,
  `descripcion` varchar(250) NOT NULL,
  PRIMARY KEY (`id_rol`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `rol`
--

INSERT INTO `rol` (`id_rol`, `rol_nombre`, `descripcion`) VALUES
(1, 'ROLE_ADMIN', ''),
(2, 'ROLE_USER', '');

-- --------------------------------------------------------

--
-- Table structure for table `talla`
--

DROP TABLE IF EXISTS `talla`;
CREATE TABLE IF NOT EXISTS `talla` (
  `id_talla` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(25) DEFAULT NULL,
  `numero` tinyint(4) NOT NULL,
  PRIMARY KEY (`id_talla`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `talla`
--

INSERT INTO `talla` (`id_talla`, `nombre`, `numero`) VALUES
(1, 'talla 3', 36);

-- --------------------------------------------------------

--
-- Table structure for table `tipo_identificacion`
--

DROP TABLE IF EXISTS `tipo_identificacion`;
CREATE TABLE IF NOT EXISTS `tipo_identificacion` (
  `id_tipo` int(11) NOT NULL,
  `descripcion` varchar(50) DEFAULT NULL,
  `tipo` varchar(25) DEFAULT NULL,
  PRIMARY KEY (`id_tipo`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tipo_identificacion`
--

INSERT INTO `tipo_identificacion` (`id_tipo`, `descripcion`, `tipo`) VALUES
(1, 'identificacion cedula de ciudadania', 'CC');

-- --------------------------------------------------------

--
-- Table structure for table `transaccionp`
--

DROP TABLE IF EXISTS `transaccionp`;
CREATE TABLE IF NOT EXISTS `transaccionp` (
  `transaction_id` varchar(255) NOT NULL,
  `reference_sale` int(255) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `payment_method_type` tinyint(4) DEFAULT NULL,
  `operation_date` datetime DEFAULT NULL,
  `bank_id` tinyint(4) DEFAULT NULL,
  `payment_method` tinyint(4) DEFAULT NULL,
  `attempts` tinyint(4) DEFAULT NULL,
  `transaction_date` datetime DEFAULT NULL,
  `tax` varchar(5) DEFAULT NULL,
  `pse_bank` varchar(50) DEFAULT NULL,
  `shipping_country` varchar(5) DEFAULT NULL,
  `description` varchar(150) DEFAULT NULL,
  `currency` varchar(5) DEFAULT NULL,
  `value` int(11) DEFAULT NULL,
  `billing_country` varchar(5) DEFAULT NULL,
  `payment_method_name` varchar(50) DEFAULT NULL,
  `email_buyer` varchar(25) DEFAULT NULL,
  `payment_method_id` tinyint(4) DEFAULT NULL,
  `response_message_pol` varchar(25) DEFAULT NULL,
  PRIMARY KEY (`transaction_id`),
  KEY `transaccion_compra_fk` (`reference_sale`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `transaccionp`
--

INSERT INTO `transaccionp` (`transaction_id`, `reference_sale`, `date`, `payment_method_type`, `operation_date`, `bank_id`, `payment_method`, `attempts`, `transaction_date`, `tax`, `pse_bank`, `shipping_country`, `description`, `currency`, `value`, `billing_country`, `payment_method_name`, `email_buyer`, `payment_method_id`, `response_message_pol`) VALUES
('1f2b389e-36f0-4beb-8e0e-c00b31f95faa', 345688, '2021-10-14 04:56:49', 25, '2021-10-14 04:56:49', 25, 25, 2, '2021-10-14 04:56:49', '0.19', '', 'CO', 'Pago de paquetes turisticos', 'COP', 15000, 'CO', 'PSE', 'genesisd@gmial.com', NULL, 'APPROVED'),
('8aef72a7-ed40-4d0c-8d66-5e4839c86ac8', 23865915, '2021-11-16 12:06:22', 25, '2021-11-17 00:06:22', 25, 25, 1, '2021-11-17 00:06:22', '0.19', '', 'CO', 'Pago de  (2) adddidasAAA, (3) adddidasAAA, (0) Nike Mercurial Superfly, (0) Nike Mercurial Vapor 14.', 'COP', 450000, 'CO', 'PSE', 'genesisd@gmial.com', NULL, 'ABANDONED_TRANSACTION');

-- --------------------------------------------------------

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
CREATE TABLE IF NOT EXISTS `usuario` (
  `id_usuario` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(25) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `email` varchar(50) NOT NULL,
  PRIMARY KEY (`id_usuario`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=124 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `usuario`
--

INSERT INTO `usuario` (`id_usuario`, `username`, `password`, `email`) VALUES
(116, 'Geesis15', 'gesis', 'ola'),
(118, 'GénesiHHsdD15', '$2a$10$H4lKcGD9Vib0mR9j.vBDXuoCK4rMuE7dMFIpkXu/3EfcD4XmvOSDG', 'gen7@gmail.com'),
(119, 'Gen315', '$2a$10$.nGJ.Ib2fNsfMJoqzNaeouVnvnk5meD0J.nLH0oBz3/tDb0Xv1OA.', 'emaildd@gmail.com'),
(120, 'Gen315ee', '$2a$10$6XGL/ywj.y1WgrDrBlyCTeycc8EAuVTdtsyYfiG1trMZerWGB6f1y', 'emailddXXXXX@gmail.com'),
(121, 'Gen3', '$2a$10$8HM7Q7FcUP8TDVxvLSq99e9idNSS8Ea1scZedL4JvKWU9KIYPAX9W', 'emailddXXXXXYYY@gmail.com'),
(122, 'Gen3333', '$2a$10$McutFMcHwYaRN0cW7/L3hOiwGcPo0rvqFwwT/MQFp8Kr/Hl8zIzt.', 'emaiYY@gmail.com'),
(123, 'Sanftiago123', '$2a$10$sajVZkCK9qKTw2TcxXLDuuwnjKnkYamJ5H1jOGd4w/2bv4OedrrSm', 'san-tiago05@hotmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `usuario_rol`
--

DROP TABLE IF EXISTS `usuario_rol`;
CREATE TABLE IF NOT EXISTS `usuario_rol` (
  `usuario_id` int(11) NOT NULL,
  `rol_id` int(11) NOT NULL,
  PRIMARY KEY (`usuario_id`,`rol_id`),
  KEY `FK610kvhkwcqk2pxeewur4l7bd1` (`rol_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `usuario_rol`
--

INSERT INTO `usuario_rol` (`usuario_id`, `rol_id`) VALUES
(118, 1),
(119, 1),
(120, 1),
(121, 1),
(122, 1),
(118, 2),
(119, 2),
(120, 2),
(121, 2),
(122, 2),
(123, 2);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `carrito`
--
ALTER TABLE `carrito`
  ADD CONSTRAINT `carrito_producto_fk` FOREIGN KEY (`producto`) REFERENCES `producto` (`id_producto`),
  ADD CONSTRAINT `carrito_usuario_fk` FOREIGN KEY (`usuario`) REFERENCES `usuario` (`id_usuario`);

--
-- Constraints for table `compra`
--
ALTER TABLE `compra`
  ADD CONSTRAINT `compra_usuario_fk` FOREIGN KEY (`usuario`) REFERENCES `usuario` (`id_usuario`);

--
-- Constraints for table `detalle_compra`
--
ALTER TABLE `detalle_compra`
  ADD CONSTRAINT `det_compra_fk` FOREIGN KEY (`compra`) REFERENCES `compra` (`id_compra`),
  ADD CONSTRAINT `det_producto_fk` FOREIGN KEY (`producto`) REFERENCES `producto` (`id_producto`);

--
-- Constraints for table `persona`
--
ALTER TABLE `persona`
  ADD CONSTRAINT `persona_tipoid_fk` FOREIGN KEY (`id_tipoId`) REFERENCES `tipo_identificacion` (`id_tipo`),
  ADD CONSTRAINT `persona_usuario_fk` FOREIGN KEY (`usuario`) REFERENCES `usuario` (`id_usuario`);

--
-- Constraints for table `producto`
--
ALTER TABLE `producto`
  ADD CONSTRAINT `producto_categoria_fk` FOREIGN KEY (`categoria`) REFERENCES `categoria` (`id_categoria`),
  ADD CONSTRAINT `producto_marca_fk` FOREIGN KEY (`marca`) REFERENCES `marca` (`id_marca`);

--
-- Constraints for table `producto_color`
--
ALTER TABLE `producto_color`
  ADD CONSTRAINT `producto_color_color_pfk` FOREIGN KEY (`id_color`) REFERENCES `color` (`id_color`),
  ADD CONSTRAINT `producto_color_producto_pfk` FOREIGN KEY (`id_producto`) REFERENCES `producto` (`id_producto`);

--
-- Constraints for table `producto_talla`
--
ALTER TABLE `producto_talla`
  ADD CONSTRAINT `producto_talla_producto_pfk` FOREIGN KEY (`id_producto`) REFERENCES `producto` (`id_producto`),
  ADD CONSTRAINT `producto_talla_talla_pfk` FOREIGN KEY (`id_talla`) REFERENCES `talla` (`id_talla`);

--
-- Constraints for table `transaccionp`
--
ALTER TABLE `transaccionp`
  ADD CONSTRAINT `transaccion_compra_fk` FOREIGN KEY (`reference_sale`) REFERENCES `compra` (`id_compra`);

--
-- Constraints for table `usuario_rol`
--
ALTER TABLE `usuario_rol`
  ADD CONSTRAINT `usuario_rol_rol_fk` FOREIGN KEY (`rol_id`) REFERENCES `rol` (`id_rol`),
  ADD CONSTRAINT `usuario_rol_usuario_fk` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`id_usuario`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
